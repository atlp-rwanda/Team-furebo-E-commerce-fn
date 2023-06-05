/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { toast } from 'react-toastify';
import api from '../../../utils/api';
import {
  adduserEssentialInfoItemsStart,
  adduserEssentialInfoItemsSuccess,
  adduserEssentialInfoItemsFailure,
} from '../../slices/UserProfile/AddUserEssentialInfoSlice';

<<<<<<< HEAD
export const addEssentialInfo = (formData) => async (dispatch) => {
=======
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use(req => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken)}`;
  }
  return req;
});

const AddUserEssentialInfoAction = async formData => {
>>>>>>> da0141d (feat: Admin disable account)
  try {
    dispatch(adduserEssentialInfoItemsStart());
    const response = await api.post('/post-user-profile', formData);
    dispatch(adduserEssentialInfoItemsSuccess(response.data));
    toast.success(response.data.message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  } catch (error) {
    dispatch(adduserEssentialInfoItemsFailure(error.message));
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.error('An error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  }
};
