import axios from 'axios';
import {
  updateStart, updateSuccess, updateError, clearError, clearSuccessCondition,
} from '../slices/signupSlice';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signUp = async (authData, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await API.post('/register', authData);
    dispatch(updateSuccess(res.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [60000]);
  } catch (error) {
    if (error.response.data.message) {
      dispatch(updateError(error.response.data.message));
    } else {
      dispatch(updateError(error.response.data));
    }

    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
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

    if (error.response.data.message) {
      dispatch(updateError(error.response.data.message));
    } else {
      dispatch(updateError(error.response.data));
    }

    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
  }
};
