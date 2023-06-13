/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { toast } from 'react-toastify';

import api from '../../../utils/api';
import {
  deleteItemInCartStart,
  deleteItemInCartSuccess,
  deleteItemInCartFailure,
} from '../../slices/Cart/DeleteCartItemSlice';
import { fetchCartItems } from './ViewCartItemsAction';

const deleteCartItemAction = (cartItemId) => async (dispatch) => {
  try {
    dispatch(deleteItemInCartStart());
    const response = await api.delete(`/delete-item-in-cart/${cartItemId}`);
    dispatch(fetchCartItems());
    dispatch(deleteItemInCartSuccess());
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
    dispatch(deleteItemInCartFailure(error.message));
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
  }
};

export default deleteCartItemAction;
