/* eslint-disable linebreak-style */
import axios from 'axios';
import FetchCartItemsAction from './FetchCartItemsAction';

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

const updateCartItemAction = async (itemId, quantity, totalPrice) => {
  try {
    await API.patch(`/updateShoppingCart/${itemId}`, { quantity, totalPrice });
    const updatedCartItems = await FetchCartItemsAction();
    return updatedCartItems;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw new Error('Error updating cart item');
  }
};

export default updateCartItemAction;
