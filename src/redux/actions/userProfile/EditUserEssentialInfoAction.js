/* eslint-disable no-useless-catch */
/* eslint-disable linebreak-style */
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

    const response = await API.get('get-user-profile', config);

    const {
      gender,
      birthdate,
      preferredLanguage,
      preferredCurrency,
      homeAddress,
      street,
      city,
      country,
      poBoxNumber,
      zipCode,
      phoneNumber,
      profileImage,
    } = response.data;

    return {
      gender,
      birthdate,
      preferredLanguage,
      preferredCurrency,
      homeAddress,
      street,
      city,
      country,
      poBoxNumber,
      zipCode,
      phoneNumber,
      profileImage,
    };
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const updateUserProfile = async (updatedProfile) => {
  try {
    const authToken = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(authToken)}`,
      },
    };

    await API.put('update-user-profile', updatedProfile, config);
  } catch (error) {
    // Handle error
    throw error;
  }
};
