import axios from 'axios';
import {
  addProduct,
  addProductSuccess,
  addError,
  clearError,
  clearSuccessCondition,
} from '../slices/addProductSlice';

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

const AddProducts = async (newProduct, dispatch) => {
  dispatch(addProduct());
  try {
    const res = await API.post('/addProduct', newProduct);
    dispatch(addProductSuccess(res.data));

    setTimeout(() => {
      dispatch(clearSuccessCondition());
    }, [60000]);
  } catch (error) {
    if (error.response.data.message) {
      dispatch(addError(error.response.data.message));
    } else {
      dispatch(addError(error.response.data));
    }
    setTimeout(() => {
      dispatch(clearError());
    }, [10000]);
  }
};
export default AddProducts;
