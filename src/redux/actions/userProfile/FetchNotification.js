import api from '../../../utils/api';

const fetchNotifications = async () => {
  try {
    const response = await api.get('/get-notification');
    return response.data;
  } catch (error) {
    console.error('Error fetching notification data:', error);
    throw new Error('Error fetching notification data');
  }
};

export default fetchNotifications;
