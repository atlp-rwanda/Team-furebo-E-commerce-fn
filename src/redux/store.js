import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/signupSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
