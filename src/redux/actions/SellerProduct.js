import axios from 'axios';
import { toast } from 'react-toastify';
import {
  deleteStart, deleteSuccess, deleteError,
} from '../slices/sellerProductSlice';

// const API = axios.create({ baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api' });

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

// Get Seller's Products Collection

// Get all products

API.interceptors.request.use(req => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('token'))
    }`;
  }
  return req;
});

export const getSellersProducts = async () => {
  try {
    const response = await API.get('/sellerCollection');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Delete Single product

API.interceptors.request.use(req => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('token'))
    }`;
  }
  return req;
});

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
