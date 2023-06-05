/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
// action
import api from '../../../utils/api';
import {
  fetchChangePasswordAtGivenTimeStart,
  fetchChangePasswordAtGivenTimeSuccess,
  fetchChangePasswordAtGivenTimeFailure,
} from '../../slices/UserProfile/ChangePasswordAtGivenTimeSlice';

export const fetchChangePasswordAtGivenTimeAction = () => async (dispatch) => {
  dispatch(fetchChangePasswordAtGivenTimeStart());

  try {
    const response = await api.get('/get-user');
    const { isExpired } = response.data;
    console.log(isExpired, 'Is Expired');
    dispatch(fetchChangePasswordAtGivenTimeSuccess(isExpired));
  } catch (error) {
    dispatch(fetchChangePasswordAtGivenTimeFailure(error.message));
  }
};
