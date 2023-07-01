/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
// action
import api from '../../../utils/api';
import {
  fetchUserBasicInfoStart,
  fetchUserBasicInfoSuccess,
  fetchUserBasicInfoFailure,
} from '../../slices/UserProfile/FetchUserBasicInfoSlice';

export const fetchUserBasicInfoAction = () => async (dispatch) => {
  dispatch(fetchUserBasicInfoStart());

  try {
    const response = await api.get('/get-user');
    const basicInfo = response.data;
    dispatch(fetchUserBasicInfoSuccess(basicInfo));
  } catch (error) {
    dispatch(fetchUserBasicInfoFailure(error.message));
  }
};
