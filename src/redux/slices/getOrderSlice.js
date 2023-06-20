import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'getOrder',
  initialState: {
    orderInfo: [],
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.orderInfo = action.payload;
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
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
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} = orderSlice.actions;
export default orderSlice.reducer;
