import axios from 'axios';
import { toast } from 'react-toastify';
import {
  deleteStart, deleteSuccess, deleteError, updateStart, updateSuccess, updateError,
} from '../slices/sellerProductSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))
      }`;
    return req;
  }
  toast.warning('Please login', { theme: 'colored' });
  return req;
});

export const getSellersProducts = async () => {
  try {
    const response = await API.get('/sellerCollection');
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
    // dispatch(deleteSuccess(response.message));
    console.log('singleProducts', response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Delete Single product

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))
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

// Update Single product

API.interceptors.request.use((req) => {
  const authToken = localStorage.getItem('currentUser');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken).token}`;
  }
  return req;
});

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
    console.log(error);
    dispatch(updateError(error.message));
    const errorMessage = `Sorry Product was not updated, due to this Error: ${error.message}`;
    toast.error(errorMessage, { theme: 'colored' });
  }
};
