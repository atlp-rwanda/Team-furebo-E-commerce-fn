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
  baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('currentUser')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('currentUser')).token
    }`;
  }
  return req;
});

export const markNotifications = async (notId, data, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await API.post(`/singleNotification/${notId}`, data);
    console.log(res);

    dispatch(updateSuccess(res.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [2000]);
  } catch (error) {
    console.log(error);
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
    console.log(res);

    dispatch(updateSuccess(res.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [2000]);
  } catch (error) {
    console.log(error);
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
