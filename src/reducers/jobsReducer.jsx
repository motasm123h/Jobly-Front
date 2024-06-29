/* eslint-disable no-case-declarations */

const jobsRequest = (state = { jobs: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case "CREATE_JOBS_START":
            return { ...state, loading: true, error: false }
        case "CREATE_JOBS_SUCCESS":
            return {
                ...state,
                jobs: action.data,
                loading: false,
                error: false
            };
        case "CREATE_JOBS_FAIL":
            return { ...state, loading: false, error: true }


        case "DELETE_JOBS_START":
            return { ...state, loading: true, error: false };

        case "DELETE_JOBS_SUCCESS":
            const deletedJobsData = state.jobsForCompany.data.filter(job => job.vacancy_id !== action.id);
            console.log(action.id);
            return {
                ...state,
                jobsForCompany: {
                    ...state.jobsForCompany,
                    data: deletedJobsData
                },
                loading: false,
                error: false
            };

        case "DELETE_JOBS_FAIL":
            return { ...state, loading: false, error: true };




        case "UPDATE_JOBS_START":
            return { ...state, loading: true, error: false };

        case "UPDATE_JOBS_SUCCESS":
            const updatedJobsData = state.jobsForCompany.data.map(job => {
                const jobId = String(job.vacancy_id).trim();
                const payloadId = String(action.payload.id).trim();

                if (jobId === payloadId) {
                    console.log(action.payload.data.data);
                    return action.payload.data.data; // Replace the job with the new data
                }
                return job;
            });
            return {
                ...state,
                jobsForCompany: {
                    ...state.jobsForCompany,
                    data: updatedJobsData,
                },
                loading: false,
                error: false,
            };

        case "UPDATE_JOBS_FAIL":
            return { ...state, loading: false, error: true };




        case "GET_JOBS_FOR_COMPANY_START":
            return { ...state, loading: true, error: false }
        case "GET_JOBS_FOR_COMPANY_SUCCESS":
            return {
                ...state,
                jobsForCompany: action.data,
                loading: false,
                error: false
            };
        case "GET_JOBS_FOR_COMPANY_FAIL":
            return { ...state, loading: false, error: true }






        case "GET_REQUEST_FOR_JOBS_START":
            return { ...state, loading: true, error: false }
        case "GET_REQUEST_FOR_JOBS_SUCCESS":
            return {
                ...state,
                RequestForJob: action.data,
                loading: false,
                error: false
            };
        case "GET_REQUEST_FOR_JOBS_FAIL":
            return { ...state, loading: false, error: true }



        case "LOCATOIN_JOBS_START":
            return { ...state, loading: true, error: false }
        case "LOCATOIN_JOBS_SUCCESS":
            return {
                ...state,
                // loc: action.data,
                loading: false,
                error: false
            };
        case "LOCATOIN_JOBS_FAIL":
            return { ...state, loading: false, error: true }

        default:
            return state
    }
}





export default jobsRequest