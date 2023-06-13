/* eslint-disable linebreak-style */
import { toast } from 'react-toastify';
import api from '../../../utils/api';
import fetchWishlist from './ViewWishListAction';
import { fetchWishlistSuccess } from '../../slices/Wishlist/ViewWishlistSlice';

const clearWishlistAction = () => async dispatch => {
  try {
    const response = await api.delete('/wishlist');
    dispatch(fetchWishlistSuccess([]));

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
    dispatch(fetchWishlist());
  } catch (error) {
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

export default clearWishlistAction;
