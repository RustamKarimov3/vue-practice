import { axiosClient } from "../../axios/request";
import store from "..";

export default {
    namespaced: true,
    state() {
        return {
            requests: [],
        }
    },
    mutations: {
        setRequests(state, requests) {
            state.requests = requests;
        },
        addRequest(state, request) {
            state.requests.push(request)
        },
        removeRequest(state, id) {
            state.requests.filter(i => i.id !== id)
        }
    },
    actions: {
        async create({commit, dispatch}, payload) {
            try {
               const {data} = await axiosClient.post(`/requests.json?auth=${store.getters['auth/getToken']}`, payload);

               console.log(data);

               commit('addRequest', {...payload, id: data.name})

               dispatch(
                'setMessage',
                {
                    value: 'Заявка создана',
                    type: 'primary'
               },
               {root: true})
            } catch(e) {
                dispatch(
                    'setMessage',
                    {
                        value: e.message,
                        type: 'danger'
                   },
                   {root: true})
            }
        },
       async load({commit}) {
        const {data} = await axiosClient.get(`/requests.json?auth=${store.getters['auth/getToken']}`);

const transformed = Object.keys(data).reduce((acc, i, index) => {
    acc[index] = {id: i, ...data[i]}

    return acc;
}, [])

        commit('setRequests', transformed)
       },
       async loadById(_, id) {
            const {data} = await axiosClient.get(`/requests/${id}.json?auth=${store.getters['auth/getToken']}`);

            return data;
       },
       async remove({commit}, id) {
            await axiosClient.delete(`/requests/${id}.json?auth=${store.getters['auth/getToken']}`);

            commit('removeRequest', id)
       },
       async update({commit}, {request, id}) {
            await axiosClient.patch(`/requests/${id}.json?auth=${store.getters['auth/getToken']}`, request);

            // commit('removeRequest', id)
       }
    },
    getters: {
        requestsList: (state) => state.requests
    }
}