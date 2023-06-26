/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../../slices/getOrderSlice';

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

const getOrder = async (dispatch) => {
//   dispatch(updateStart());
  try {
    const res = await API.get('/getOrder');
    console.log(res.data.userOrder);

    dispatch(updateSuccess(res.data.userOrder));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [6000]);
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
    }, [6000]);
  }
};

export default getOrder;
