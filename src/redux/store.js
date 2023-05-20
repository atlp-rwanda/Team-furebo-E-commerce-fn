import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/signupSlice';
import updatePasswordSlice from './slices/updatePassword';

const store = configureStore({
  reducer: {
    user: userSlice,
    updatePassword: updatePasswordSlice,
  },
});

export default store;
