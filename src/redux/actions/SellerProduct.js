import axios from 'axios';
import { toast } from 'react-toastify';
import {
  deleteStart, deleteSuccess, deleteError, updateStart,
  updateSuccess, updateError, updateSellerProducts, updatePending,
} from '../slices/sellerProductSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('token'))
    }`;
    return req;
  }
  toast.warning('Please login', { theme: 'colored' });
  return req;
});

export const getSellersProducts = async (page, size, dispatch) => {
  dispatch(updatePending(true));
  try {
    const response = await API.get(`/sellerCollection?size=${size}&page=${page}`);
    dispatch(updateSellerProducts(response.data.data.items));
    dispatch(updatePending(false));
    console.log('sellersProducts', response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Get Single Product
export const getSingleProduct = async (productId) => {
  try {
    const response = await API.get(`/getProduct/${productId}`);
    console.log('singleProducts', response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Delete Single product

export const deleteProduct = async (product, dispatch, navigate) => {
  dispatch(deleteStart());
  try {
    const response = await API.delete(`/deleteProduct/${product.id}`);
    dispatch(deleteSuccess(response.message));
    toast.success('Product deleted successfully', { theme: 'colored' });
    navigate('/sellerProducts');
  } catch (error) {
    if (error.message) {
      dispatch(deleteError(error.message));
    }
    const errorMessage = `Sorry Product was not deleted, due to this Error: ${error.message}`;
    toast.error(errorMessage, { theme: 'colored' });
  }
};

// Update Single product

export const updateProduct = async (newProduct, dispatch, navigate) => {
  dispatch(updateStart());
  console.log('action', newProduct);
  try {
    const response = await API.patch(`/updateProduct/${newProduct.id}`, newProduct);
    dispatch(updateSuccess(response.message));
    console.log('message', response, response.data.message);
    const successMessage = `${response.data.message}`;
    toast.success(successMessage, { theme: 'colored' });
    navigate(`/sellerProducts/${newProduct.id}`);
  } catch (error) {
    if (error.message) {
      dispatch(updateError(error.message));
    }
    const errorMessage = `Sorry Product was not updated, due to this Error: ${error.message}`;
    toast.error(errorMessage, { theme: 'colored' });
  }
};
