/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-undef */

import { toast } from 'react-toastify';
import api from '../../../utils/api';
import {
  updateCartItemQuantityStart,
  updateCartItemQuantitySuccess,
  updateCartItemQuantityFailure,
} from '../../slices/Cart/UpdateCartItemSlice';
import { fetchCartItems } from './ViewCartItemsAction';

<<<<<<< HEAD
export const updateCartItemQuantity = (itemId, quantity, totalPrice, setShowButtons) => async (dispatch) => {
=======
API.interceptors.request.use(req => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken)}`;
  }
  return req;
});

const updateCartItemAction = async (itemId, quantity, totalPrice, dispatch) => {
>>>>>>> da0141d (feat: Admin disable account)
  try {
    dispatch(updateCartItemQuantityStart());
    const response = await api.put(`/updateShoppingCart/${itemId}`, { quantity, totalPrice });
    await dispatch(fetchCartItems());
    dispatch(updateCartItemQuantitySuccess());
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
    setShowButtons(true);
  } catch (error) {
    dispatch(updateCartItemQuantityFailure(error.message));
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
