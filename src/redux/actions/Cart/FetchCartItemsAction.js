/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import axios from 'axios';
import { toast } from 'react-toastify';
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

API.interceptors.request.use((req) => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken)}`;
  }
  return req;
});

const FetchCartItemsAction = async (dispatch) => {
  dispatch(updateStart());
  try {
    const response = await API.get('/view-cart-items');
    console.log(response.data, 'cartItems');
    dispatch(updateSuccess(response.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [100]);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    throw new Error('Error fetching profile data');
  }
};

export default FetchCartItemsAction;
