/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import api from '../../../utils/api';
import {
  updateUserEssentialInfoStart,
  updateUserEssentialInfoSuccess,
  updateUserEssentialInfoFailure,
} from '../../slices/UserProfile/UpdateUserEssentialInfoSlice';

export const updateUserEssentialInfoAction = (updatedInfo) => async (dispatch) => {
  dispatch(updateUserEssentialInfoStart());

  try {
    // Make the API call to update the user's essential information
    const response = await api.put('/update-user-profile', updatedInfo);

    // Dispatch the success action with the updated information
    dispatch(updateUserEssentialInfoSuccess(response.data));
  } catch (error) {
    // Dispatch the failure action with the error message
    dispatch(updateUserEssentialInfoFailure(error.message));
  }
};
