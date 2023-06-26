import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   searchResults: [],
//   loading: false,
//   error: null,
// };

export const searchProductSlice = createSlice({
  name: 'searchProduct',
  // initialState,
  initialState: {
    searchResults: [],
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    searchStart: (state) => {
      state.pending = true;
    },
    searchSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.searchResults = action.payload;
    },
    searchError: (state, action) => {
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
  // reducers: {
  //   searchProductStart: state => {
  //     state.loading = true;
  //     state.error = null;
  //   },
  //   searchProductSuccess: (state, action) => {
  //     state.loading = false;
  //     state.searchResults = action.payload;
  //     localStorage.setItem('searchedProducts', JSON.stringify(action.payload));
  //   },
  //   searchProductFailure: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const {
  searchStart,
  searchSuccess,
  searchError,
  clearError,
  clearSuccessCondition,
} = searchProductSlice.actions;
export default searchProductSlice.reducer;

