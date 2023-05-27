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

const signIn = async (authData, dispatch, navigate, setAuthData) => {
  dispatch(updateStart());
  try {
    const res = await API.post('/login', authData);

    dispatch(updateSuccess(res.data));

    setAuthData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    });

    if (
      res.data.message === 'Please check your email for the authentication code'
    ) {
      setTimeout(() => {
        dispatch(clearSuccessCondition());

        navigate('/verifyOTP');
      }, [2000]);
    } else {
      setTimeout(() => {
        dispatch(clearSuccessCondition());

        navigate('/home');
      }, [2000]);
    }
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
    }, [3000]);
  }
};

export default signIn;
