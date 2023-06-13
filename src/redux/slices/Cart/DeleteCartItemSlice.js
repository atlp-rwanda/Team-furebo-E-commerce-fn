/* eslint-disable linebreak-style */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleting: false,
  error: null,
};

const deleteItemInCartSlice = createSlice({
  name: 'deleteItemInCart',
  initialState,
  reducers: {
    deleteItemInCartStart: state => {
      state.deleting = true;
      state.error = null;
    },
    deleteItemInCartSuccess: state => {
      state.deleting = false;
      state.error = null;
    },
    deleteItemInCartFailure: (state, action) => {
      state.deleting = false;
      state.error = action.payload;
    },
  },
});

export const {
  deleteItemInCartStart,
  deleteItemInCartSuccess,
  deleteItemInCartFailure,
} = deleteItemInCartSlice.actions;

export default deleteItemInCartSlice.reducer;
