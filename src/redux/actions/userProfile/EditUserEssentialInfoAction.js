/* eslint-disable no-useless-catch */
/* eslint-disable linebreak-style */
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5002/api',
});

export const fetchUserProfile = async () => {
  try {
    const authToken = localStorage.getItem('currentUser');
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(authToken).token}`,
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

export const updateUserProfile = async updatedProfile => {
  try {
    const authToken = localStorage.getItem('currentUser');
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(authToken).token}`,
      },
    };

    await API.put('update-user-profile', updatedProfile, config);
  } catch (error) {
    // Handle error
    throw error;
  }
};
