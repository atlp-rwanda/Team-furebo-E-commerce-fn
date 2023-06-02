import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    userInfo: null,
    successCondition: false,
<<<<<<< HEAD
    sellerProducts: [],
    singleProduct: null,
    updateProduct: null,
=======
    products: null,
    sellerProducts: [],
    singleProduct: null,
>>>>>>> 15c6b94 (feat: seller delete product functionality)
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
<<<<<<< HEAD
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
      try {
        const oneProduct = action.payload;
        console.log('splice', oneProduct, action.payload);
        return {
          ...state,
          updateProduct: oneProduct,
=======
      try {
        const oneProduct = state.sellerProducts.find((product) => product.id === action.payload);
        return {
          ...state,
          singleProduct: oneProduct,
>>>>>>> 15c6b94 (feat: seller delete product functionality)
        };
      } catch (err) {
        return {
          ...state,
          error: err,
        };
      }
    },
<<<<<<< HEAD

    // Delete product

=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
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
<<<<<<< HEAD

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
=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
  },
});

export const {
<<<<<<< HEAD
  setSingleProduct, deleteStart, deleteSuccess, deleteError,
  setUpdateProduct, updateStart, updateSuccess, updateError,
  updateSingleProduct, updateSellerProducts,
=======
  setSingleProduct, deleteStart, deleteSuccess, deleteError, updateSellerProducts,
>>>>>>> 15c6b94 (feat: seller delete product functionality)
} = productSlice.actions;
export default productSlice.reducer;
