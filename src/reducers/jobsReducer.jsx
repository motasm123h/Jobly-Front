
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