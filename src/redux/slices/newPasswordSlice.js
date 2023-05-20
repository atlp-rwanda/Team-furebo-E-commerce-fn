import { createSlice } from '@reduxjs/toolkit';

const newPasswordSlice = createSlice({
  name: 'newPassword',
  initialState: {
    newPassword: '',
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    newPasswordReset: (state) => {
      state.pending = true;
    },
    newPasswordResetSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.userInfo = action.payload;
    },
    newPasswordResetFailure: (state, action) => {
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
  setPassword,
  newPasswordReset,
  newPasswordResetSuccess,
  newPasswordResetFailure,
  clearError,
  clearSuccessCondition,
} = newPasswordSlice.actions;

export default newPasswordSlice.reducer;
