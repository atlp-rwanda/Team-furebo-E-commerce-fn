/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clearing: false,
  error: null,
};

const clearWishlistSlice = createSlice({
  name: 'clearWishlist',
  initialState,
  reducers: {
    clearWishlistStart: state => {
      state.clearing = true;
      state.error = null;
    },
    clearWishlistSuccess: state => {
      state.clearing = false;
    },
    clearWishlistFailure: (state, action) => {
      state.clearing = false;
      state.error = action.payload;
    },
  },
});

export const {
  clearWishlistStart,
  clearWishlistSuccess,
  clearWishlistFailure,
} = clearWishlistSlice.actions;

export default clearWishlistSlice.reducer;
