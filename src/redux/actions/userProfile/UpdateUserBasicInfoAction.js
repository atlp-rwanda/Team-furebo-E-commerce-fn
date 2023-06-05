// userProfile/UpdateUserBasicInfoAction.js

import api from '../../../utils/api';
import {
  updateUserBasicInfoStart,
  updateUserBasicInfoSuccess,
  updateUserBasicInfoFailure,
} from '../../slices/UserProfile/UpdateUserBasicInfoSlice';

export const updateUserBasicInfoAction = (updatedInfo) => async (dispatch) => {
  dispatch(updateUserBasicInfoStart());

  try {
    // Make the API call to update the user's basic information
    const response = await api.put('/update-user', updatedInfo);

    // Dispatch the success action with the updated information
    dispatch(updateUserBasicInfoSuccess(response.data));
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch(updateUserBasicInfoFailure(error.message));
  }
};
