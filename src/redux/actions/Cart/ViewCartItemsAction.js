/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import api from '../../../utils/api';
import {
  fetchCartItemsStart,
  fetchCartItemsSuccess,
  fetchCartItemsFailure,
} from '../../slices/Cart/ViewCartItemsSlice';

export const fetchCartItems = () => async (dispatch) => {
  dispatch(fetchCartItemsStart());

  try {
    const response = await api.get('/view-cart-items');
    const cartItems = response.data;
    dispatch(fetchCartItemsSuccess(cartItems));
  } catch (error) {
    dispatch(fetchCartItemsFailure(error.message));
  }
};
