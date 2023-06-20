import axios from 'axios';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

export const fetchUserProfile = async () => {
  try {
    const authToken = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(authToken)}`,
      },
    };

    const response = await API.get('/get-user', config);

    const { firstName, lastName, email } = response.data;

    return { firstName, lastName, email };
  } catch (error) {
    throw new Error('Failed to fetch user profile.');
  }
};

export const updateUserProfile = async (firstName, lastName, email) => {
  try {
    const authToken = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(authToken)}`,
      },
    };

    const fullname = `${firstName} ${lastName}`;

    await API.put('/update-user', { fullname, email }, config);

    return true;
  } catch (error) {
    throw new Error('Failed to update user information.');
  }
};
