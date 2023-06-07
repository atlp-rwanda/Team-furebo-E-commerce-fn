import axios from 'axios';
import { toast } from 'react-toastify';
import {
  requestPasswordReset,
  requestPasswordResetSuccess,
  requestPasswordResetFailure,
  clearError,
  clearSuccessCondition,
} from '../slices/resetPasswordSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

const resetPassword = async (emailData, dispatch) => {
  dispatch(requestPasswordReset());
  try {
    console.log(emailData);
    const res = await API.post('/requestPasswordReset', emailData);
    dispatch(requestPasswordResetSuccess(res.data.message));
    toast.success('Email sent, check your inbox and follow the link', {
      theme: 'colored',
    });
    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [60000]);
  } catch (error) {
    console.log(error); // Log the error for debugging

    // Dispatch the requestPasswordResetFailure action with an appropriate error message
    dispatch(
      requestPasswordResetFailure(
        'An error occurred during the password reset request.'
      )
    );

    if (error.response.data.message) {
      dispatch(requestPasswordResetFailure(error.response.data.message));
      toast.error(error.response.data.message, { theme: 'colored' });
    } else {
      dispatch(requestPasswordResetFailure(error.response.data));
      toast.error(error.response.message, { theme: 'colored' });
    }

    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
  }
};

export default resetPassword;
