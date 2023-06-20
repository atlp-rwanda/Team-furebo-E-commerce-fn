/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
// addUserEssentialInfoAction.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use((req) => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken)}`;
  }
  return req;
});

const AddUserEssentialInfoAction = async (formData) => {
  try {
    const response = await API.post('/post-user-profile', formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user profile.');
  }
};

export default AddUserEssentialInfoAction;
