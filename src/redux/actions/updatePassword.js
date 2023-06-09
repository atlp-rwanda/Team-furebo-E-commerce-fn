import axios from 'axios';
import {
  updatePassword,
  updatePasswordSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/updatePassword';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))
      }`;
  }
  return req;
});

const ModifyPassword = async (authData, params, dispatch) => {
  dispatch(updatePassword());
  try {
    const res = await API.patch('/modify-password', authData);
    dispatch(updatePasswordSuccess(res.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [60000]);
  } catch (error) {
    if (!error.response) {
      dispatch(updateError(error.message));
    } else if (!error.response.data.message) {
      dispatch(updateError(error.response.data));
    } else {
      dispatch(updateError(error.response.data.message));
    }
    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
  }
};
export default ModifyPassword;
