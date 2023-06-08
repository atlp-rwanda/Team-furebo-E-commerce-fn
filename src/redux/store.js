import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/signupSlice';
import updatePasswordSlice from './slices/updatePassword';
import userRolesSlice from './slices/userRolesSlice';
import allUsersSlice from './slices/usersSlice';
import resetPasswordSlice from './slices/resetPasswordSlice';
import newPasswordSlice from './slices/newPasswordSlice';
import markNotificationsSlice from './slices/markNotificationsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    updatePassword: updatePasswordSlice,
    userRole: userRolesSlice,
    allUsers: allUsersSlice,
    resetPassword: resetPasswordSlice,
    newPassword: newPasswordSlice,
    markNotifications: markNotificationsSlice,
  },
});

export default store;
