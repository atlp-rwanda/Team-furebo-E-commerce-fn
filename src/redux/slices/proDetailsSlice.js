import { createSlice } from '@reduxjs/toolkit';

export const singleProductsSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    singleProductInfo: [],
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateStart: state => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.singleProductInfo = action.payload;
      state.error.condition = false;
      // localStorage.setItem('singleProduct', JSON.stringify(action.payload));
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
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} = singleProductsSlice.actions;
export default singleProductsSlice.reducer;
