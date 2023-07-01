import axios from 'axios';
import { toast } from 'react-toastify';
import {
  rateProductStart,
  rateProductSuccess,
  rateError,
  clearError,
  clearSuccessCondition,
} from '../slices/rateProductSlice';

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

const rateProducts = async (newRate, productId, dispatch) => {
  try {
    const res = await API.post(`/addProductFeedback/${productId}`, newRate);
    console.log(res);
    dispatch(rateProductSuccess(res.data));
    toast.success(res.data.message);
    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [60000]);
    setTimeout(() => {
      window.location.reload();
    }, [2000]);
  } catch (error) {
    if (!error.response) {
      dispatch(rateError(error.message));
      toast.error(error.message);
    } else if (!error.response.message) {
      dispatch(rateError(error.response.data));
      toast.error(error.response.data.message);
    } else {
      dispatch(rateError(error.response.data.message));
      toast.error(error.response.data.message);
    }
    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
  }
};
export default rateProducts;
