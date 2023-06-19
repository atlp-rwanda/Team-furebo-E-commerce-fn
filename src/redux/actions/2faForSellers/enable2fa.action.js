import axios from 'axios';
import { toast } from 'react-toastify';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('token'))
    }`;
  }
  return req;
});

const enable2FAForMerchants = async (navigate) => {
  try {
    const response = await API.post('/2fa/enable2faForMerchant');
    if (response.data.message) {
      toast.success(response.data.message);
      setTimeout(() => {
        navigate('/Authentication');
      }, [7000]);
    }
  } catch (error) {
    if (error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error(error.response.data.msg);
    }
  }
};

export default enable2FAForMerchants;
