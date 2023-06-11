import axios from 'axios';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use(req => {
  const authToken = localStorage.getItem('currentUser');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken).token}`;
  }
  return req;
});

const clearCartAction = async () => {
  try {
    await API.delete('/clear-cart');
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw new Error('Error clearing cart');
  }
};

export default clearCartAction;
