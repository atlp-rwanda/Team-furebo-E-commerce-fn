/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

import api from '../../../utils/api';
import {
  fetchWishlistStart,
  fetchWishlistSuccess,
  fetchWishlistFailure,
} from '../../slices/Wishlist/ViewWishlistSlice';

const fetchWishlistAction = () => async dispatch => {
  dispatch(fetchWishlistStart());

  try {
    const response = await api.get('/wishlist');
    const wishlistItems = response.data;
    dispatch(fetchWishlistSuccess(wishlistItems));
  } catch (error) {
    dispatch(fetchWishlistFailure(error.message));
  }
};

export default fetchWishlistAction;
