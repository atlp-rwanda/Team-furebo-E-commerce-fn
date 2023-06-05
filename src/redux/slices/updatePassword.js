import { createSlice } from '@reduxjs/toolkit';

export const updatePasswordSlice = createSlice({
  name: 'updatePassword',
  initialState: {
    userInfo: null,
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updatePassword: state => {
      state.pending = true;
    },
    updatePasswordSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
    clearError: state => {
      state.error.condition = false;
    },
    clearSuccessCondition: state => {
      state.successCondition = false;
    },
  },
});

export const {
  updatePassword,
  updatePasswordSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} = updatePasswordSlice.actions;
export default updatePasswordSlice.reducer;
