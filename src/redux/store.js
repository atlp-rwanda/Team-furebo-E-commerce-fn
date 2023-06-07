import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/signupSlice';
import updatePasswordSlice from './slices/updatePassword';
import userRolesSlice from './slices/userRolesSlice';
import allUsersSlice from './slices/usersSlice';
import resetPasswordSlice from './slices/resetPasswordSlice';
import newPasswordSlice from './slices/newPasswordSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    updatePassword: updatePasswordSlice,
    userRole: userRolesSlice,
    allUsers: allUsersSlice,
    resetPassword: resetPasswordSlice,
    newPassword: newPasswordSlice,
  },
});

export default store;
