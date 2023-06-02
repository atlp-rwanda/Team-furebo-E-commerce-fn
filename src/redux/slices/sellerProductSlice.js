import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    userInfo: null,
    successCondition: false,
<<<<<<< HEAD
<<<<<<< HEAD
    sellerProducts: [],
    singleProduct: null,
    updateProduct: null,
=======
    products: null,
    sellerProducts: [],
    singleProduct: null,
>>>>>>> 15c6b94 (feat: seller delete product functionality)
=======
    sellerProducts: [],
    singleProduct: null,
    updateProduct: null,
>>>>>>> 25c6dfb (feat: seller update product functionality)
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
<<<<<<< HEAD
=======
>>>>>>> 25c6dfb (feat: seller update product functionality)
      const productId = action.payload;
      const oneProduct = state.sellerProducts.find((product) => product.id === productId);

      if (oneProduct) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 25c6dfb (feat: seller update product functionality)
        };
      } catch (err) {
        return {
          ...state,
          error: err,
        };
      }
    },
<<<<<<< HEAD
<<<<<<< HEAD

    // Delete product

=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
=======

    // Delete product

>>>>>>> 25c6dfb (feat: seller update product functionality)
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
<<<<<<< HEAD
=======
>>>>>>> 25c6dfb (feat: seller update product functionality)

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
<<<<<<< HEAD
=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
=======
>>>>>>> 25c6dfb (feat: seller update product functionality)
  },
});

export const {
<<<<<<< HEAD
<<<<<<< HEAD
  setSingleProduct, deleteStart, deleteSuccess, deleteError,
  setUpdateProduct, updateStart, updateSuccess, updateError,
  updateSingleProduct, updateSellerProducts,
=======
  setSingleProduct, deleteStart, deleteSuccess, deleteError, updateSellerProducts,
>>>>>>> 15c6b94 (feat: seller delete product functionality)
=======
  setSingleProduct, deleteStart, deleteSuccess, deleteError,
  setUpdateProduct, updateStart, updateSuccess, updateError,
  updateSingleProduct, updateSellerProducts,
>>>>>>> 25c6dfb (feat: seller update product functionality)
} = productSlice.actions;
export default productSlice.reducer;
