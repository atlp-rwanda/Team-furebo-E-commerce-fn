/* eslint-disable linebreak-style */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleting: false,
  error: null,
};

const deleteItemInWishlistSlice = createSlice({
  name: 'deleteItemInWishlist',
  initialState,
  reducers: {
    deleteItemInWishlistStart: state => {
      state.deleting = true;
      state.error = null;
    },
    deleteItemInWishlistSuccess: state => {
      state.deleting = false;
      state.error = null;
    },
    deleteItemInWishlistFailure: (state, action) => {
      state.deleting = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteItemInWishlistStart,
  deleteItemInWishlistSuccess,
  deleteItemInWishlistFailure,
} = deleteItemInWishlistSlice.actions;

export default deleteItemInWishlistSlice.reducer;
