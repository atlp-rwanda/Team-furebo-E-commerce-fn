/* eslint-disable linebreak-style */
// slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userBasicInfo: {},
  loading: false,
  error: null,
};

const FetchUserBasicInfoSlice = createSlice({
  name: 'basicInfo',
  initialState,
  reducers: {
    fetchUserBasicInfoStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserBasicInfoSuccess: (state, action) => {
      state.loading = false;
      state.userBasicInfo = action.payload;
    },
    fetchUserBasicInfoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserBasicInfoStart,
  fetchUserBasicInfoSuccess,
  fetchUserBasicInfoFailure,
} = FetchUserBasicInfoSlice.actions;

export default FetchUserBasicInfoSlice.reducer;
