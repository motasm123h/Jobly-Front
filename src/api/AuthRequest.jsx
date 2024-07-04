import axiosClient from "../axios-clinte";

export const logIn = (formData) => axiosClient.post('login', formData);
export const logout = () => axiosClient.post('logout');
export const deleteUser = (id) => axiosClient.post(`delete/${id}`);

export const addAddress = (formData) => axiosClient.post('address/create', formData);
export const addCompany = (formData) => axiosClient.post('company/create/company', formData);
// export const updateInfo = (formData) => axiosClient.post('UpdateInfo', formData, headers);
export const signUp = (formData) => axiosClient.post('register', formData);
export const getProfileForCompany = () => axiosClient.get('index');
export const updatepersonal = (formData, id) => axiosClient.post(`update/${id}`, formData);
export const updateaddress = (formData, id) => axiosClient.post(`address/update/${id}`, formData);
export const updateCompany = (formData, id) => axiosClient.post(`company/update/company/${id}`, formData);
