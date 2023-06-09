import { createSlice } from '@reduxjs/toolkit';

export const markNotificationsSlice = createSlice({
  name: 'markNotifications',
  initialState: {
    isRead: false,
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.isRead = action.payload;
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
    clearError: (state) => {
      state.error.condition = false;
    },
    clearSuccessCondition: (state) => {
      state.successCondition = false;
    },
  },
});

export const {
  updateStart, updateSuccess, updateError, clearError, clearSuccessCondition,
} = markNotificationsSlice.actions;
export default markNotificationsSlice.reducer;
