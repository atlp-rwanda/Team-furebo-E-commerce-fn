import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    userInfo: null,
    successCondition: false,
    sellerProducts: [],
    singleProduct: null,
    updateProduct: null,
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
        pending: false,
      };
    },
    updatePending(state, action) {
      return {
        ...state,
        pending: action.payload,
      };
    },

    setSingleProduct(state, action) {
      const productId = action.payload;
      const oneProduct = state.sellerProducts.find((product) => product.id === productId);

      if (oneProduct) {
        return {
          ...state,
          singleProduct: oneProduct,
          error: {
            condition: false,
            message: '',
          },
        };
      }
      return {
        ...state,
        error: {
          condition: true,
          message: `Product with ID ${productId} not found.`,
        },
      };
    },
    updateSingleProduct(state, action) {
      return {
        ...state,
        singleProduct: action.payload,
      };
    },
    setUpdateProduct(state, action) {
      return {
        ...state,
        updateProduct: action.payload,
      };
    },

    // Delete product

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

    // Update product

    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
  },
});

export const {
  setSingleProduct, deleteStart, deleteSuccess, deleteError,
  setUpdateProduct, updateStart, updateSuccess, updateError,
  updateSingleProduct, updateSellerProducts, updatePending,
} = productSlice.actions;
export default productSlice.reducer;
