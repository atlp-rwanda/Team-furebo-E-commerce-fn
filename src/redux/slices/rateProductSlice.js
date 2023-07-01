import { createSlice } from '@reduxjs/toolkit';

export const rateProductSlice = createSlice({
  name: 'rateProduct',
  initialState: {
    rateInfo: null,
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    rateProductStart: state => {
      state.pending = true;
    },
    rateProductSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.rateInfo = action.payload;
    },
    rateError: (state, action) => {
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
  rateProductStart,
  rateProductSuccess,
  rateError,
  clearError,
  clearSuccessCondition,
} = rateProductSlice.actions;
export default rateProductSlice.reducer;
