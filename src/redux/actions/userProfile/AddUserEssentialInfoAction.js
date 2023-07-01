/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { toast } from 'react-toastify';
import api from '../../../utils/api';
import {
  adduserEssentialInfoItemsStart,
  adduserEssentialInfoItemsSuccess,
  adduserEssentialInfoItemsFailure,
} from '../../slices/UserProfile/AddUserEssentialInfoSlice';

export const addEssentialInfo = (formData) => async (dispatch) => {
  try {
    dispatch(adduserEssentialInfoItemsStart());
    const response = await api.post('/post-user-profile', formData);
    dispatch(adduserEssentialInfoItemsSuccess(response.data));
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
    window.location.reload();
  } catch (error) {
    dispatch(adduserEssentialInfoItemsFailure(error.message));
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
