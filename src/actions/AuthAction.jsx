// AuthAction.js
import * as AuthApi from '../api/AuthRequest';

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' });
  try {
    const { data } = await AuthApi.logIn(formData); // Make sure this matches your API function
    dispatch({ type: 'AUTH_SUCCESS', data });
    console.log(data);
    // Assuming your API returns data with token
  } catch (err) {
    console.log(err);
    dispatch({ type: 'AUTH_FAIL' });
  }
};


export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" })
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data })

  } catch (err) {
    console.log(err)
    dispatch({ type: "AUTH_FAIL" })
  }
}
export const addAddress = (formData) => async (dispatch) => {
  dispatch({ type: "ADD_ADDRESS_START" })
  try {
    const { data } = await AuthApi.addAddress(formData);
    dispatch({ type: "ADD_ADDRESS_SUCCESS", data: data })

  } catch (err) {
    console.log(err)
    dispatch({ type: "ADD_ADDRESS_FAIL" })
  }
}
export const addCompany = (formData) => async (dispatch) => {
  dispatch({ type: "ADD_COMPANY_START" })
  try {
    const { data } = await AuthApi.addCompany(formData);
    dispatch({ type: "ADD_COMPANY_SUCCESS", data: data })

  } catch (err) {
    console.log(err)
    dispatch({ type: "ADD_COMPANY_FAIL" })
  }
}