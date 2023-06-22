/* eslint-disable no-unused-vars */
import axios from 'axios';
import { toast} from 'react-toastify';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5002/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))
    }`;
  }
  return req;
});

export const SearchOrderStatus = async (OrderId, dispatch) => {
  try {
    const res = await API.get(`/orderStatus/${OrderId}`, dispatch);
    console.log(res)
  } catch (error) {
    console.error('Yikes');
  }
};

export const updateOrderStatus = async (orderId, data, dispatch) => {
    try {
      const res = await API.patch(`/updateOrderStatus/${orderId}`, data);
      toast.success(res.data.message);
      return res;
    } catch (error) {
      toast.error(error.message)
      console.error(error.message);
    }
};

export const BuyersOrders = async (data, dispatch) => {

  try {
    const res = await API.get('/buyerOrders');
    console.log(res)
  } catch (error) {
    console.error(error.message);
  }
};
export const AllOrders = async () => {

    try {
      const res = await API.get('/getAllOrders');
      return res;
    } catch (error) {
      console.error(error.message);
    }
  };
