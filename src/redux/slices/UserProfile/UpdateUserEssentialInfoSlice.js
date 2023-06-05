/* eslint-disable linebreak-style */
// updateUserEssentialInfoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  updateEssentialInfoItem: [],
  loading: false,
  error: null,
};

const updateUserEssentialInfoSlice = createSlice({
  name: 'updateEssentialInfo',
  initialState,
  reducers: {
    updateUserEssentialInfoStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserEssentialInfoSuccess: (state, action) => {
      state.loading = false;
      state.updateEssentialInfoItem = action.payload;
    },
    updateUserEssentialInfoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateUserEssentialInfoStart,
  updateUserEssentialInfoSuccess,
  updateUserEssentialInfoFailure,
} = updateUserEssentialInfoSlice.actions;

export default updateUserEssentialInfoSlice.reducer;
