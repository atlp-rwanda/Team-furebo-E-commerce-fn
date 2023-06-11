import { createSlice } from '@reduxjs/toolkit';

export const allProductsSlice = createSlice({
  name: 'product',
  initialState: {
    productsInfo: JSON.parse(localStorage.getItem('availableProducts')),
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
      state.productsInfo = action.payload;
      localStorage.setItem('availableProducts', JSON.stringify(action.payload));
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
} = allProductsSlice.actions;
export default allProductsSlice.reducer;
