import axios from 'axios';

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

export const FetchChats = async () => {
  try {
    const response = await API.get('/allChat');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching notification data:', error);
    throw new Error('Error fetching notification data');
  }
};

export const SendMessage = async (message, sender) => {
  try {
    const response = await API.post('/chat', { message, sender });
    return response.data;
  } catch (error) {
    console.error('Error sending Messages:', error);
    throw new Error('Error sending Messages');
  }
};
