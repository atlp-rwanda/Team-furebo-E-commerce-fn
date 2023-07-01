/* eslint-disable no-unused-vars */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/fetchProductFeedbackSlice';

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

const FetchProductFeedback = async (productId, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await API.get(`/getProductFeedback/${productId}`);
    dispatch(updateSuccess(res.data));
    toast.success(res.data.message);
    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [60000]);
  } catch (error) {
    if (error.response.data.message) {
      dispatch(updateError(error.response.data.message));
      toast.error(error.response.data.message);
    } else {
      dispatch(updateError(error.response.data));
      toast.error(error.response.data.message);
    }
    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
  }
};
export default FetchProductFeedback;
