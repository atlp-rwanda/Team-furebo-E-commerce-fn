import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const viewCartItemsSlice = createSlice({
  name: 'viewCartItems',
  initialState,
  reducers: {
    fetchCartItemsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCartItemsSuccess: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload;
    },
    fetchCartItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCartItemsStart,
  fetchCartItemsSuccess,
  fetchCartItemsFailure,
} = viewCartItemsSlice.actions;

export default viewCartItemsSlice.reducer;
