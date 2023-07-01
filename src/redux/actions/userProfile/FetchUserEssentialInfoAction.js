/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import api from '../../../utils/api';
import {
  fetchUserEssentialInfoStart,
  fetchUserEssentialInfoSuccess,
  fetchUserEssentialInfoFailure,
} from '../../slices/UserProfile/FetchUserEssentialInfoSlice';

export const fetchUserEssentialInfoAction = () => async (dispatch) => {
  dispatch(fetchUserEssentialInfoStart());

  try {
    const response = await api.get('/get-user-profile');
    const essentialInfo = response.data;
    dispatch(fetchUserEssentialInfoSuccess(essentialInfo));
  } catch (error) {
    dispatch(fetchUserEssentialInfoFailure(error.message));
  }
};
