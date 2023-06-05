import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/signupSlice';
import updatePasswordSlice from './slices/updatePassword';
import userRolesSlice from './slices/userRolesSlice';
import allUsersSlice from './slices/usersSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    updatePassword: updatePasswordSlice,
    userRole: userRolesSlice,
    allUsers: allUsersSlice,
  },
});

export default store;
