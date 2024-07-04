import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    const nToken = JSON.parse(token)
    if (token) {
        config.headers.Authorization = `Bearer ${nToken}`;
    }
    return config;
});
axiosClient.defaults.headers.post['Accept'] = 'application/json';
axiosClient.defaults.headers.get['Accept'] = 'application/json';
axiosClient.defaults.headers.post['Content-Type'] = 'application/json';
axiosClient.defaults.headers.get['Content-Type'] = 'application/json';
axiosClient.defaults.withCredentials = false;


export default axiosClient;

