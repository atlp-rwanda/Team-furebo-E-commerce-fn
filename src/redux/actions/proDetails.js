/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/proDetailsSlice';

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

const getSingleProducts = async (productId, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await API.get(`/getProduct/${productId}`);

    dispatch(updateSuccess(res.data.data));

    dispatch(clearSuccessCondition());
    // return res.data.data;
  } catch (error) {
    if (!error.response) {
      dispatch(updateError(error.message));
    } else if (!error.response.data.message) {
      dispatch(updateError(error.response.data));
    } else {
      dispatch(updateError(error.response.data.message));
    }

    // setTimeout(() => {
    //   dispatch(clearError());
    // }, [6000]);
  }
};

export default getSingleProducts;
