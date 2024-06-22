import axiosClient from "../axios-clinte";

export const logIn = (formData) => axiosClient.post('login', formData);
export const addAddress = (formData) => axiosClient.post('address/create', formData);
export const addCompany = (formData) => axiosClient.post('company/create/company', formData);
// export const updateInfo = (formData) => axiosClient.post('UpdateInfo', formData, headers);
export const signUp = (formData) => axiosClient.post('register', formData);
