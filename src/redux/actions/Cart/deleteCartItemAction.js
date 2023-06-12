import axios from 'axios';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  const authToken = localStorage.getItem('currentUser');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken).token}`;
  }
  return req;
});

const deleteCartItemAction = async (itemId) => {
  try {
    await API.delete(`/delete-item-in-cart/${itemId}`);
  } catch (error) {
    console.error('Error deleting cart item:', error);
    throw new Error('Error deleting cart item');
  }
};
export default deleteCartItemAction;
