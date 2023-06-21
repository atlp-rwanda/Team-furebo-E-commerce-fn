/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import { toast } from 'react-toastify';
import api from '../../../utils/api';
import {
  deleteItemInWishlistStart,
  deleteItemInWishlistSuccess,
  deleteItemInWishlistFailure,
} from '../../slices/Wishlist/DeleteItemInWishListSlice';
import fetchWishlist from './ViewWishListAction';

const deleteItemInWishlistAction = itemId => async dispatch => {
  console.log(itemId);
  try {
    dispatch(deleteItemInWishlistStart());
    const response = await api.delete(`/wishlist/${itemId}`);
    dispatch(fetchWishlist());
    dispatch(deleteItemInWishlistSuccess());

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
    console.log('Error deleting item from wishlist:', error);
    dispatch(deleteItemInWishlistFailure(error.message));

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

export default deleteItemInWishlistAction;
