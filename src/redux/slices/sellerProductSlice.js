import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    userInfo: null,
    successCondition: false,
    products: null,
    sellerProducts: [],
    singleProduct: null,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateSellerProducts(state, action) {
      return {
        ...state,
        sellerProducts: action.payload,
      };
    },

    setSingleProduct(state, action) {
      try {
        const oneProduct = state.sellerProducts.find((product) => product.id === action.payload);
        return {
          ...state,
          singleProduct: oneProduct,
        };
      } catch (err) {
        return {
          ...state,
          error: err,
        };
      }
    },
    deleteStart: (state) => {
      state.pending = true;
    },
    deleteSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.userInfo = action.payload;
    },
    deleteError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
  },
});

export const {
  setSingleProduct, deleteStart, deleteSuccess, deleteError, updateSellerProducts,
} = productSlice.actions;
export default productSlice.reducer;
