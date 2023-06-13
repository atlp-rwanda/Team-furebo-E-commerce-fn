/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [],
  loading: false,
  error: null,
};

const viewWishlistSlice = createSlice({
  name: 'viewWishlist',
  initialState,
  reducers: {
    fetchWishlistStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchWishlistSuccess: (state, action) => {
      state.loading = false;
      state.wishlistItems = action.payload;
    },
    fetchWishlistFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWishlistStart,
  fetchWishlistSuccess,
  fetchWishlistFailure,
} = viewWishlistSlice.actions;

export default viewWishlistSlice.reducer;
