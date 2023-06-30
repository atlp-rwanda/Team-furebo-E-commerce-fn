import axios from 'axios';
import { toast } from 'react-toastify';

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

export const SendQueries = async (data, dispatch) => {
  try {
    const res = await API.post('/sendQuery', data);
    toast.success(res.data.message)
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const AllQueries = async () => {
  try {
    const res = await API.get('/getAllQueries');
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
