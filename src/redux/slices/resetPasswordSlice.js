import { createSlice } from '@reduxjs/toolkit';

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState: {
    email: '',
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
    userInfo: null,
  },
  reducers: {
    requestPasswordReset: (state) => {
      state.pending = true;
    },
    requestPasswordResetSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.userInfo = action.payload;
    },
    requestPasswordResetFailure: (state, action) => {
      state.pending = false;
      state.error.condition = true;
      state.error.message = action.payload;
    },
    clearError: (state) => {
      state.error.condition = false;
    },
    clearSuccessCondition: (state) => {
      state.successCondition = false;
    },
  },
});

export const {
  setEmail,
  requestPasswordReset,
  requestPasswordResetSuccess,
  requestPasswordResetFailure,
  clearError,
  clearSuccessCondition,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
