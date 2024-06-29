
const HelperRequest = (state = { JobsData: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case "SECTION_START":
            return { ...state, loading: true, error: false }
        case "SECTION_SUCCESS":
            return {
                ...state,
                JobsData: {
                    ...state.JobsData,
                    section: {
                        ...state.JobsData.section,
                        ...action.data
                    }
                },
                loading: false,
                error: false
            };

        case "SECTION_FAIL":
            return { ...state, loading: false, error: true }

        case "CATEGORY_START":
            return { ...state, loading: true, error: false }
        case "CATEGORY_SUCCESS":
            return {
                ...state,
                JobsData: {
                    ...state.JobsData,
                    category: {
                        ...action.data
                    }
                },
                loading: false,
                error: false
            };
        case "CATEGORY_FAIL":
            return { ...state, loading: false, error: true }

        default:
            return state
    }
}

export default HelperRequest