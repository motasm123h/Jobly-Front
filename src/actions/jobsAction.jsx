import * as jobsRequest from '../api/jobsRequest';

export const createJobs = (formData) => async (dispatch) => {
    dispatch({ type: 'CREATE_JOBS_START' });
    try {
        const { data } = await jobsRequest.createJobs(formData);
        dispatch({ type: 'CREATE_JOBS_SUCCESS', data });
        // console.log(data);
    } catch (err) {
        // console.log(err);
        dispatch({ type: 'CREATE_JOBS_FAIL' });
    }
};


export const locationJobs = (formData, id) => async (dispatch) => {
    dispatch({ type: 'LOCATOIN_JOBS_START' });
    try {
        const { data } = await jobsRequest.locationJobs(formData, id);
        dispatch({ type: 'LOCATOIN_JOBS_SUCCESS', data });
        // console.log(data);
    } catch (err) {
        // console.log(err);
        dispatch({ type: 'LOCATOIN_JOBS_FAIL' });
    }
};


export const getJobsForCompany = (company_id) => async (dispatch) => {
    dispatch({ type: 'GET_JOBS_FOR_COMPANY_START' });
    try {
        const { data } = await jobsRequest.getJobsForCompany(company_id);
        dispatch({ type: 'GET_JOBS_FOR_COMPANY_SUCCESS', data });
    } catch (err) {
        // console.log(err);
        dispatch({ type: 'GET_JOBS_FOR_COMPANY_FAIL' });
    }
};
export const getJobsRequestForVacancy = (vacancy_id) => async (dispatch) => {
    dispatch({ type: 'GET_REQUEST_FOR_JOBS_START' });
    try {
        const { data } = await jobsRequest.getJobsRequestForVacancy(vacancy_id);
        dispatch({ type: 'GET_REQUEST_FOR_JOBS_SUCCESS', data });
        // console.log(data);
    } catch (err) {
        // console.log(err);
        dispatch({ type: 'GET_REQUEST_FOR_JOBS_FAIL' });
    }
};



