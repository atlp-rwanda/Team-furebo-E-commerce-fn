/* eslint-disable linebreak-style */
// slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isExpired: false,
  loading: false,
  error: null,
};

const ChangePasswordAtGivenTimeSlice = createSlice({
  name: 'changePasswordAtGivenTime',
  initialState,
  reducers: {
    fetchChangePasswordAtGivenTimeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchChangePasswordAtGivenTimeSuccess: (state, action) => {
      state.loading = false;
      state.isExpired = action.payload;
    },
    fetchChangePasswordAtGivenTimeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchChangePasswordAtGivenTimeStart,
  fetchChangePasswordAtGivenTimeSuccess,
  fetchChangePasswordAtGivenTimeFailure,
} = ChangePasswordAtGivenTimeSlice.actions;

export default ChangePasswordAtGivenTimeSlice.reducer;
