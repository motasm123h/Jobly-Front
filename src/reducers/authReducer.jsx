const authReducer = (state = { authData: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: false }
        case "AUTH_SUCCESS":
            localStorage.setItem("user", JSON.stringify({ ...action.data }))
            localStorage.setItem("token", JSON.stringify(action.data.token))
            return {
                ...state,
                authData: {
                    ...state.authData,
                    user: { ...action.data },
                    token: action.data.token
                },
                loading: false,
                error: false
            };

        // return { ...state, authData: { ...state.authData, ...action.data.user }, loading: false, error: false };
        case "AUTH_FAIL":
            return { ...state, loading: false, error: true }

        case "UPDATE_START":
            return { ...state, loading: true, error: false }
        case "UPDATE_SUCCESS":
            localStorage.setItem("user", JSON.stringify({ ...action?.data }));
            return {
                ...state,
                authData: {
                    ...state.authData,
                    user: { ...action.data },
                },
                loading: false,
                error: false
            };


        // return { ...state, authData: { ...state.authData, ...action.data }, loading: false, error: false };
        case "UPDATE_FAIL":
            return { ...state, loading: false, error: true }

        case "ADD_ADDRESS_START":
            return { ...state, loading: true, error: false }
        case "ADD_ADDRESS_SUCCESS":
            // localStorage.setItem("address", JSON.stringify({ ...action?.data }));
            return {
                ...state,
                authData: {
                    ...state.authData,
                    address: { ...state.authData.address, ...action.data }
                },
                loading: false,
                error: false
            };
        case "ADD_ADDRESS_FAIL":
            return { ...state, loading: false, error: true }


        case "ADD_COMPANY_START":
            return { ...state, loading: true, error: false }
        case "ADD_COMPANY_SUCCESS":
            // localStorage.setItem("company", JSON.stringify({ ...action?.data }));
            return {
                ...state,
                authData: {
                    ...state.authData,
                    company: { ...state.authData.company, ...action.data }
                },
                loading: false,
                error: false
            };
        case "ADD_COMPANY_FAIL":
            return { ...state, loading: false, error: true }



        default:
            return state
    }
}

export default authReducer