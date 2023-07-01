/* eslint-disable linebreak-style */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userEssentialInfo: {},
  loading: false,
  error: null,
};

const FetchUserEssentialInfoSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    fetchUserEssentialInfoStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserEssentialInfoSuccess: (state, action) => {
      state.loading = false;
      state.userEssentialInfo = action.payload;
    },
    fetchUserEssentialInfoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserEssentialInfoStart,
  fetchUserEssentialInfoSuccess,
  fetchUserEssentialInfoFailure,
} = FetchUserEssentialInfoSlice.actions;

export default FetchUserEssentialInfoSlice.reducer;
