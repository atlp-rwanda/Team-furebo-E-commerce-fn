/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/usersSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use(req => {
  if (localStorage.getItem('currentUser')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('currentUser')).token
    }`;
  }
  return req;
});

const fetchUsers = async dispatch => {
  dispatch(updateStart());
  try {
    const res = await API.get('/fetchUsers');
    console.log(res);

    dispatch(updateSuccess(res.data));

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

export default fetchUsers;
