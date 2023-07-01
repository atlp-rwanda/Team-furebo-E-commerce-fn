// slice

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  updateBasicInfoItem: [],
  loading: false,
  error: null,
};

const updateUserBasicInfoSlice = createSlice({
  name: 'updateBasicInfo',
  initialState,
  reducers: {
    updateUserBasicInfoStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserBasicInfoSuccess: (state, action) => {
      state.loading = false;
      state.updateBasicInfoItem = action.payload;
    },
    updateUserBasicInfoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateUserBasicInfoStart,
  updateUserBasicInfoSuccess,
  updateUserBasicInfoFailure,
} = updateUserBasicInfoSlice.actions;

export default updateUserBasicInfoSlice.reducer;