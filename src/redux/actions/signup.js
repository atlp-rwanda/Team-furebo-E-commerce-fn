import axios from 'axios';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/signupSlice';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5002/api',
});

export const signUp = async (authData, dispatch, setAuthData) => {
  dispatch(updateStart());
  try {
    const res = await API.post('/register', authData);
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

export const VerifyEmail = async (setValidUrl, params, dispatch) => {
  dispatch(updateStart());
  try {
    const { data } = await API.get(`/${params.id}/verify/${params.token}`);
    dispatch(updateSuccess(data));
    setValidUrl(true);

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [10000]);
  } catch (error) {
    setValidUrl(false);

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
