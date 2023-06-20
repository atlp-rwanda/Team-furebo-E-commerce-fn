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
} from '../../slices/paymentSlice';
import { fetchCartItemsSuccess } from '../../slices/Cart/ViewCartItemsSlice';
import { fetchCartItems } from '../Cart/ViewCartItemsAction';
import getOrder from '../checkout/GetOrder';

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

const makePayment = async (cardData, orderId, navigate, dispatch) => {
  const data = {
    card: {
      number: cardData.CardNo,
      exp_month: Number(cardData.ExpMonth),
      exp_year: Number(cardData.ExpYear),
      cvc: cardData.cvc,
    },
  };
  dispatch(updateStart());
  try {
    const res = await API.post(`/payment/${orderId}`, data);
    dispatch(fetchCartItemsSuccess([]));

    dispatch(fetchCartItems(dispatch));

    await getOrder(dispatch);

    dispatch(updateSuccess(res.data));

    toast.success(res.data.message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    setTimeout(() => {
      navigate('/paymentSuccessful');
      dispatch(clearSuccessCondition());
    }, [3000]);
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

export default makePayment;
