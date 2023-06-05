/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../../slices/markNotificationsSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use(req => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('token')
    )}`;
  }
  return req;
});

export const markNotifications = async (notId, data, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await API.post(`/singleNotification/${notId}`, data);

    dispatch(updateSuccess(res.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [2000]);
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

export const markAllNotifications = async (data, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await API.post('/allNotifications', data);

    dispatch(updateSuccess(res.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [2000]);
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
