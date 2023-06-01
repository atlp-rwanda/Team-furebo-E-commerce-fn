/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
// addUserEssentialInfoAction.js

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

const AddUserEssentialInfoAction = async formData => {
  try {
    const response = await API.post('/post-user-profile', formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user profile.');
  }
};

export default AddUserEssentialInfoAction;
