/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import axios from 'axios';
import {
  searchStart,
  searchSuccess,
  searchError,
  clearError,
  clearSuccessCondition,
} from '../../slices/searchProductslice';

// const API = axios.create({
//   baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
// });

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))
    }`;
  }
  return req;
});

const searchProduct = async ( name, category, minPrice, maxPrice, dispatch) => {

  const params = {}

  if(name) {
    params.name = name
  }

  if(category) {
    params.category = category
  }

  if(minPrice) {
    params.minPrice = minPrice
  }

  if(maxPrice) {
    params.maxPrice = maxPrice
  }

  if(Object.keys(params).length > 0) {
    dispatch(searchStart());
    try {
  
      // const res = await API.get("/search", { params });
  
      const res = await API.get("/search", {params})
  
      dispatch(searchSuccess(res.data));
  
      dispatch(clearSuccessCondition());
  
      console.log(res.data.data)
  
      return res.data.data;
  
    } catch (error) {
      if (!error.res) {
        dispatch(searchError(error.message));
      } else if (!error.res.data.message) {
        dispatch(searchError(error.res.data));
      } else {
        dispatch(searchError(error.res.data.message));
      }
  
      setTimeout(() => {
        dispatch(clearError());
      }, [6000]);
    }
  
  }

};
  
export default searchProduct;