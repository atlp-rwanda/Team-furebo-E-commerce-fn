import axios from 'axios';
import { toast } from 'react-toastify';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use(req => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('token')
    )}`;
  }
  return req;
});

const disable2FAForMerchants = async () => {
  try {
    const response = await API.post('/2fa/disable2faForMerchant');
    if (response.data.message) {
      toast.success(response.data.message);
    } else {
      toast.success(response.data.msg);
    }
  } catch (error) {
    if (error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error(error.response.data.msg);
    }
  }
};

export default disable2FAForMerchants;
