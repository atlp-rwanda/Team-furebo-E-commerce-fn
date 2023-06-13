/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { toast } from 'react-toastify';
import api from '../../../utils/api';
import fetchWishlistAction from './ViewWishListAction';

const addToWishlistAction = productId => async dispatch => {
  try {
    const response = await api.post(`/wishlist/${productId}`);
    dispatch(fetchWishlistAction());

    const { data } = response;

    dispatch({
      type: 'wishlist/addToWishlist',
      payload: data,
    });

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
    console.log('Error:', error);

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

export default addToWishlistAction;
