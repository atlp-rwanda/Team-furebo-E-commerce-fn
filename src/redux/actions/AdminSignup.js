/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/signupSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

const AdminSignUp = async (authData, dispatch, setAuthData) => {
  dispatch(updateStart());
  try {
    const res = await API.post('/registerAdmin', authData);

    dispatch(updateSuccess(res.data));

    setAuthData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    });

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [6000]);
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
    }, [6000]);
  }
};

export default AdminSignUp;
