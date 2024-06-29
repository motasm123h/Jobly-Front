import axiosClient from "../axios-clinte";
// axios.defaults.withCredentials = true;
const headers = {
    headers:
    {
        // Authorization: token ? `Bearer ${token}` : '',
        Accept: 'application/json',
        'Content-type': 'multipart/form-data',
    }
};
export const storeImg = (formData) => axiosClient.post('storeImage', formData, headers);

export const getCategory = () => axiosClient.get('category/index');
export const getSection = (id) => axiosClient.get(`/section/getSectionByCaateogry/${id}`);
