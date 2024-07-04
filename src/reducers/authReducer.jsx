/* eslint-disable no-case-declarations */
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

        case "AUTH_FAIL":
            return { ...state, loading: false, error: true }


            case 'LOGOUT_START':
                return { ...state, loading: true, error: false };
              case 'LOGOUT_SUCCESS':
                return {
                  ...state,
                  authData: null,
                  loading: false,
                  error: false,
                };
              case 'LOGOUT_FAIL':
                return { ...state, loading: false, error: true };

                case 'DELETE_USER_START':
                    return { ...state, loading: true, error: false };
                  case 'DELETE_USER_SUCCESS':
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    return {
                      ...state,
                      authData: null,
                      loading: false,
                      error: false,
                    };
                  case 'DELETE_USER_FAIL':
                    return { ...state, loading: false, error: true };
    






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

        case "UPDATE_FAIL":
            return { ...state, loading: false, error: true }


        case "UPDATE_PERSONAL_START":
            return { ...state, loading: true, error: false };

        case "UPDATE_PERSONAL_SUCCESS":
            const updatedUser = {
                ...state.authData.user,
                user: {
                    ...state.authData.user.user,
                    name: action.payload.user.name,
                    email: action.payload.user.email
                }
            };

            const updatedAuthData = {
                ...state.authData,
                user: updatedUser,
            };

            const updatedProfileForCompany = {
                ...state.profileforcompany.data,
                name: action.payload.user.name,
                email: action.payload.user.email
            };

            // تحديث الـ localStorage
            localStorage.setItem("auth", JSON.stringify({
                authData: updatedAuthData,
                profileforcompany: { data: updatedProfileForCompany }
            }));

            return {
                ...state,
                authData: updatedAuthData,
                profileforcompany: {
                    ...state.profileforcompany,
                    data: updatedProfileForCompany,
                },
                loading: false,
                error: false,
            };

        case "UPDATE_PERSONAL_FAIL":
            return { ...state, loading: false, error: true };

        case "UPDATE_ADDRESS_START":
            return { ...state, loading: true, error: false };
              
        case "UPDATE_ADDRESS_SUCCESS":
                const updatedAddress = { ...action.payload.data };
    
                // تحديث الـ localStorage
                const updatedAuthDataِAddress = {
                    ...state.authData,
                    address: updatedAddress,
                };
    
                const updatedProfileForCompanyForAddress = {
                    ...state.profileforcompany,
                    data: {
                        ...state.profileforcompany.data,
                        address: updatedAddress
                    }
                };
    
                localStorage.setItem("auth", JSON.stringify({
                    ...state,
                    authData: updatedAuthDataِAddress,
                    profileforcompany: updatedProfileForCompanyForAddress
                }));
    
                return {
                    ...state,
                    authData: updatedAuthDataِAddress,
                    profileforcompany: updatedProfileForCompanyForAddress,
                    loading: false,
                    error: false,
                };
    
        case "UPDATE_ADDRESS_FAIL":
            return { ...state, loading: false, error: true };
        
        
        
        
        
        case "UPDATE_COMPANY_START":
            return { ...state, loading: true, error: false };
                  
        case "UPDATE_COMPANY_SUCCESS":
                    const updatedCompany = { ...action.payload.data };
        
                    // تحديث الـ localStorage
                    const updatedAuthDataِCompany= {
                        ...state.authData,
                        company: updatedCompany,
                    };
        
                    const updatedProfileForCompanyForCompany = {
                        ...state.profileforcompany,
                        data: {
                            ...state.profileforcompany.data,
                            company: updatedCompany
                        }
                    };
        
                    localStorage.setItem("auth", JSON.stringify({
                        ...state,
                        authData: updatedAuthDataِCompany,
                        profileforcompany: updatedProfileForCompanyForCompany
                    }));
        
            return {
                        ...state,
                        authData: updatedAuthDataِCompany,
                        profileforcompany: updatedProfileForCompanyForCompany,
                        loading: false,
                        error: false,
                    };
        
        case "UPDATE_COMPANY_FAIL":
            return { ...state, loading: false, error: true };
            
        
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

        case "GET_PROFILE_FOR_COMPANY_START":
            return { ...state, loading: true, error: false }
        case "GET_PROFILE_FOR_COMPANY_SUCCESS":
            return {
                    ...state,
                    profileforcompany: action.data,
                    loading: false,
                    error: false
                };
        case "GET_PROFILE_FOR_COMPANY_FAIL":
            return { ...state, loading: false, error: true }
    
    

        default:
            return state
    }
}

export default authReducer