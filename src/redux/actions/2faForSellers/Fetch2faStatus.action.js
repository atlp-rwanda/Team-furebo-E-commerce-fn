import axios from 'axios';

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

const Fetch2FaStatus = async () => {
  try {
    const response = await API.get('/get-user');
    return response.data;
  } catch (error) {
    console.error('Error fetching 2fa status:', error);
    throw new Error('Error fetching 2fa status');
  }
};

export default Fetch2FaStatus;
