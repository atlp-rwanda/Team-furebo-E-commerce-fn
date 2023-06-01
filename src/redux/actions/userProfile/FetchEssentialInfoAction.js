/* eslint-disable linebreak-style */
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5002/api',
});

API.interceptors.request.use(req => {
  const authToken = localStorage.getItem('currentUser');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken).token}`;
  }
  return req;
});

const FetchEssentialInfo = async () => {
  try {
    const response = await API.get('/get-user-profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    throw new Error('Error fetching profile data');
  }
};

export default FetchEssentialInfo;
