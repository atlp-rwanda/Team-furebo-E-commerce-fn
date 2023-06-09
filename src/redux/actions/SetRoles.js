/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/userRolesSlice';

import fetchUsers from './GetUsers';

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

const SetRoles = async (updatedData, userId, dispatch, handleUsers) => {
  dispatch(updateStart());
  try {
    const res = await API.patch(`/updateRole/${userId}`, updatedData);

    // fetchUsers(dispatch);

    dispatch(updateSuccess(res.data));

    setTimeout(() => {
      window.location.reload();
    }, [2000]);

    handleUsers();

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

export default SetRoles;
