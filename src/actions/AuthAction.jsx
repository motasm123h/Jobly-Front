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
export const logout = () => async (dispatch) => {
  dispatch({ type: 'LOGOUT_START' });
  try {
    const { data } = await AuthApi.logout();
    dispatch({ type: 'LOGOUT_SUCCESS' });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log(data);
  } catch (err) {
    console.log(err);
    dispatch({ type: 'LOGOUT_FAIL' });
  }
};





export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: 'DELETE_USER_START' });
  try {
    const { data } = await AuthApi.deleteUser(id);
    dispatch({ type: 'DELETE_USER_SUCCESS' });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log(data);
  } catch (err) {
    console.log(err);
    dispatch({ type: 'DELETE_USER_FAIL' });
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


export const getProfileForCompany = () => async (dispatch) => {
  dispatch({ type: 'GET_PROFILE_FOR_COMPANY_START' });
  try {
      const { data } = await AuthApi.getProfileForCompany();
      dispatch({ type: 'GET_PROFILE_FOR_COMPANY_SUCCESS', data });
      console.log(data);

  } catch (err) {
      // console.log(err);
      dispatch({ type: 'GET_PROFILE_FOR_COMPANY_FAIL' });
  }
};






export const updatepersonal = (formData, id) => async (dispatch) => {
  dispatch({ type: 'UPDATE_PERSONAL_START' });
  try {
      const { data } = await AuthApi.updatepersonal(formData, id);
      dispatch({ 
          type: 'UPDATE_PERSONAL_SUCCESS', 
          payload: { user: data.user } 
      });
  } catch (err) {
      dispatch({ type: 'UPDATE_PERSONAL_FAIL' });
  }
};

export const updateaddress = (formData, id) => async (dispatch) => {
  dispatch({ type: 'UPDATE_ADDRESS_START' });
  try {
      const { data } = await AuthApi.updateaddress(formData, id);
      console.log('API response:', data); // التحقق من استجابة الـ API
      dispatch({ 
          type: 'UPDATE_ADDRESS_SUCCESS', 
          payload: { data: data.data } 
      });
  } catch (err) {
      console.log('API error:', err); // التحقق من الأخطاء
      dispatch({ type: 'UPDATE_ADDRESS_FAIL' });
  }
};


export const updateCompany = (formData, id) => async (dispatch) => {
  dispatch({ type: 'UPDATE_COMPANY_START' });
  try {
      const { data } = await AuthApi.updateCompany(formData, id);
      console.log('API response:', data);
      console.log("heree"); // التحقق من استجابة الـ API
      // التحقق من استجابة الـ API
      dispatch({ 
          type: 'UPDATE_COMPANY_SUCCESS', 
          payload: { data: data.data } 
      });
  } catch (err) {
      console.log('API error:', err); // التحقق من الأخطاء
      dispatch({ type: 'UPDATE_COMPANY_FAIL' });
  }
};


