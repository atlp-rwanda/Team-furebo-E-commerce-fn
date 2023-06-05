import { createSlice } from '@reduxjs/toolkit';

export const disableAccountSlice = createSlice({
  name: 'disableAccount',
  initialState: {
    userStatus: JSON.parse(localStorage.getItem('currentUserStatus')),
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateStart: state => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.userStatus = action.payload;
      localStorage.setItem('currentUserStatus', JSON.stringify(action.payload));
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
    clearError: state => {
      state.error.condition = false;
      state.error.message = '';
    },
    clearSuccessCondition: state => {
      state.successCondition = false;
    },
  },
});

export const {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} = disableAccountSlice.actions;
export default disableAccountSlice.reducer;
