/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clearing: false,
  error: null,
};

const clearCartItemSlice = createSlice({
  name: 'clearCartItem',
  initialState,
  reducers: {
    clearCartStart: state => {
      state.clearing = true;
      state.error = null;
    },
    clearCartSuccess: state => {
      state.clearing = false;
      state.error = null;
    },
    clearCartFailure: (state, action) => {
      state.clearing = false;
      state.error = action.payload;
    },
  },
});

export const { clearCartStart, clearCartSuccess, clearCartFailure } =
  clearCartItemSlice.actions;

export default clearCartItemSlice.reducer;
