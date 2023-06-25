import axios from 'axios';
import { toast } from 'react-toastify';
import { updateSuccess } from '../../slices/signupSlice';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))
      }`;
  }
  return req;
});

const verifyOTPCode = async (code, dispatch, navigate) => {
  try {
    const response = await API.post('/2fa/verify', { code });
    response.data.token = JSON.parse(localStorage.getItem('token'));
    dispatch(updateSuccess(response.data));
    toast.success(response.data.message);
    setTimeout(() => {
      navigate('/home');
    }, [7000]);
  } catch (error) {
    if (error.response.data.message) {
      toast.error(error.response.data.message);
    }
    toast.error(error.response.data.msg);
  }
};

export default verifyOTPCode;
