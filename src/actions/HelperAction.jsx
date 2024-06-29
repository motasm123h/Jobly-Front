import * as HelperAPI from '../api/HelperRequest';
export const uploadIma = (data) => async (dispatch) => {
    try {
        await HelperAPI.storeImg(data)
    } catch (err) {
        console.log(err)
    }
}
export const storeImg = (formData) => async (dispatch) => {
    dispatch({ type: 'IMAGE_START' });
    try {
        const { data } = await HelperAPI.storeImg(formData); // Make sure this matches your API function
        dispatch({ type: 'IMAGE_SUCCESS', data });
        console.log(data);
        // Assuming your API returns data with token
    } catch (err) {
        console.log(err);
        dispatch({ type: 'IMAGE_FAIL' });
    }
};


export const getSection = (id) => async (dispatch) => {
    dispatch({ type: 'SECTION_START' });
    try {
        const { data } = await HelperAPI.getSection(id);
        dispatch({ type: 'SECTION_SUCCESS', data });
        // console.log(data);
        // Assuming your API returns data with token
    } catch (err) {
        // console.log(err);
        dispatch({ type: 'SECTION_FAIL' });
    }
};
export const getCategory = () => async (dispatch) => {
    dispatch({ type: 'CATEGORY_START' });
    try {
        const { data } = await HelperAPI.getCategory();
        dispatch({ type: 'CATEGORY_SUCCESS', data });
        // console.log(data);
    } catch (err) {
        // console.log(err);
        dispatch({ type: 'CATEGORY_FAIL' });
    }
};


