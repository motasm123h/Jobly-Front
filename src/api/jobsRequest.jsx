import axiosClient from "../axios-clinte";

export const createJobs = (formData) => axiosClient.post('company/vacancy/create', formData);

export const getJobsForCompany = (company_id) => axiosClient.get(`company/vacancy/getvacancyByCompany/${company_id}`);

export const getJobsRequestForVacancy = (vacancy_id) => axiosClient.get(`vacancy/getRequestOnVacancy/${vacancy_id}`);

export const locationJobs = (formData, vacancy_id) => axiosClient.post(`location/create/${vacancy_id}`, formData);
