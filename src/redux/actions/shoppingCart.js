/* eslint-disable no-unused-vars */
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/shoppingCartSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('currentUser')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('currentUser')).token
    }`;
  }
  return req;
});

const addToCart = async (quantity, productId, dispatch, setShowPopUp) => {
  const data = {
    quantity,
    productId,
  };
  dispatch(updateStart());
  try {
    const res = await API.post('/addItemToCart', data);

    dispatch(updateSuccess(res.data));

    setShowPopUp(false);

    toast.success(res.data.message, {
      position: 'top-right',
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [6000]);
  } catch (error) {
    if (!error.response) {
      dispatch(updateError(error.message));
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else if (!error.response.data.message) {
      dispatch(updateError(error.response.data));
      toast.error(error.response.data, {
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
      dispatch(updateError(error.response.data.message));
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
    }

    setTimeout(() => {
      dispatch(clearError());
    }, [6000]);
  }
};

export default addToCart;
