import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const updateCartItemSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItemQuantityStart: state => {
      state.loading = true;
      state.error = null;
    },
    updateCartItemQuantitySuccess: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
    },
    updateCartItemQuantityFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateCartItemQuantityStart,
  updateCartItemQuantitySuccess,
  updateCartItemQuantityFailure,
} = updateCartItemSlice.actions;

export default updateCartItemSlice.reducer;
