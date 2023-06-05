<<<<<<< HEAD
import api from '../../../utils/api';
=======
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use(req => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken)}`;
  }
  return req;
});
>>>>>>> da0141d (feat: Admin disable account)

const fetchNotifications = async () => {
  try {
    const response = await api.get('/get-notification');
    return response.data;
  } catch (error) {
    console.error('Error fetching notification data:', error);
    throw new Error('Error fetching notification data');
  }
};

export default fetchNotifications;
