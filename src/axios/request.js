import axios from 'axios';
import router from '../router';


export const axiosClient = axios.create({
    baseURL: 'https://bank-ab8a5-default-rtdb.firebaseio.com'
})

axiosClient.interceptors.response.use(null, (err) => {
    if (err.response.status === 401) {
        router.push('/auth');
    }

    return Promise.reject(err);
})