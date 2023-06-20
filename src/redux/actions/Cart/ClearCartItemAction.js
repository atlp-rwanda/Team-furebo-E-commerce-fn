/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { toast } from 'react-toastify';
import api from '../../../utils/api';
import { fetchCartItems } from './ViewCartItemsAction';
import { fetchCartItemsSuccess } from '../../slices/Cart/ViewCartItemsSlice';

const clearCartAction = () => async (dispatch) => {
  try {
    const response = await api.delete('/clear-cart');
    dispatch(fetchCartItemsSuccess([]));

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
    dispatch(fetchCartItems());
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

export default clearCartAction;
