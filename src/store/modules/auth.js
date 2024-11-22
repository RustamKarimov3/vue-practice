import axios from 'axios';
import router from '../../router';
import { errors } from '../../utils/error';


const TOKEN = 'jwt-token';

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem(TOKEN, token);
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem(TOKEN);
        }
    },
    actions: {

        async login({commit, dispatch}, payload) {
                try {
                console.log(payload, process.env)
                const resp = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`, {...payload, returnSecureToken: true})

                // console.log(resp);
                commit('setToken', resp.data.idToken)
                commit('clearMessage', {root: true})

                return true;
            } catch(e) {
                dispatch(
                    'setMessage',
                    {
                        value: errors[e.response.data.error.message],
                        type: 'danger',
                    },
                    {root: true}
                );

                return false;
            }
            }
    },
    getters: {
        getToken(state){
            return state.token;
        },
        isAuthenticated(state) {
            return !!state.token
        }
    }
}