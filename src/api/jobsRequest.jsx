import axiosClient from "../axios-clinte";

export const createJobs = (formData) => axiosClient.post('company/vacancy/create', formData);
export const deleteJobs = (id) => axiosClient.post(`company/vacancy/delete/${id}`);
export const updateJobs = (formData, id) => axiosClient.post(`company/vacancy/update/${id}`, formData);

export const getJobsForCompany = (company_id) => axiosClient.get(`company/vacancy/getvacancyByCompany/${company_id}`);

export const getJobsRequestForVacancy = (vacancy_id) => axiosClient.get(`vacancy/getRequestOnVacancy/${vacancy_id}`);

export const locationJobs = (formData, vacancy_id) => axiosClient.post(`location/create/${vacancy_id}`, formData);
