import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/signupSlice';
import updatePasswordSlice from './slices/updatePassword';
import userRolesSlice from './slices/userRolesSlice';
import allUsersSlice from './slices/usersSlice';
import disableAccountSlice from './slices/disableAccountSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    updatePassword: updatePasswordSlice,
    userRole: userRolesSlice,
    allUsers: allUsersSlice,
    disableAccount: disableAccountSlice,
  },
});

export default store;
