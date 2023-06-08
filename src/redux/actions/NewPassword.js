import axios from 'axios';
import {
  newPasswordReset,
  newPasswordResetSuccess,
  newPasswordResetFailure,
  clearError,
  clearSuccessCondition,
} from '../slices/newPasswordSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

const newPasswordAction = async (authData, dispatch, params, onSuccess) => {
  dispatch(newPasswordReset());
  try {
    const res = await API.post(`/reset-password/${params.id}`, authData);

    dispatch(newPasswordResetSuccess(res.data.message));

    onSuccess();

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [50000]);
  } catch (error) {
    if (error.response.message) {
      dispatch(newPasswordResetFailure(error.response.message));
    } else {
      dispatch(newPasswordResetFailure(error.response.data));
    }

    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
  }
};

export default newPasswordAction;
