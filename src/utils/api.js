/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
// import axios from 'axios';

import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
// });

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

api.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('token'),
    )}`;
  }
  return req;
});

export default api;
