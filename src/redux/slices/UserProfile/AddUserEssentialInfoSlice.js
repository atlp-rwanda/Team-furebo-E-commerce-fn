/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addUserEssentialInfoSlice: [],
  loading: false,
  error: null,
};

const addUserEssentialInfoSlice = createSlice({
  name: 'AddUserEssentialInfo',
  initialState,
  reducers: {
    adduserEssentialInfoItemsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    adduserEssentialInfoItemsSuccess: (state, action) => {
      state.loading = false;
      state.addUserEssentialInfoSlice = action.payload;
    },
    adduserEssentialInfoItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  adduserEssentialInfoItemsStart,
  adduserEssentialInfoItemsSuccess,
  adduserEssentialInfoItemsFailure,
} = addUserEssentialInfoSlice.actions;

export default addUserEssentialInfoSlice.reducer;
