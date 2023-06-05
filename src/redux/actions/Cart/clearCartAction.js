/* eslint-disable no-unused-vars */
import axios from 'axios';
import FetchCartItemsAction from './FetchCartItemsAction';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../../slices/fetchCartItemsSlice';

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

const clearCartAction = async dispatch => {
  try {
    await API.delete('/clear-cart');
    dispatch(updateSuccess([]));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [100]);
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw new Error('Error clearing cart');
  }
};

export default clearCartAction;
