import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    shppingCart: JSON.parse(localStorage.getItem('shoppingCart')),
    successCondition: false,
    cartpending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateStart: (state) => {
      state.cartpending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.cartpending = false;
      state.shppingCart = action.payload;
      localStorage.setItem('shoppingCart', JSON.stringify(action.payload));
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.cartpending = false;
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
} = cartSlice.actions;
export default cartSlice.reducer;
