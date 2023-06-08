import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/UserInfo/Message';
import AddUserEssentialInfoForm from '../../components/UserInfo/AddUserEssentialInfoForm';
import AddUserEssentialInfoAction from '../../redux/actions/userProfile/AddUserEssentialInfoAction';

const AddUserEssentialInfoPage = () => {
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gender: '',
    birthdate: '',
    preferredLanguage: '',
    preferredCurrency: '',
    homeAddress: '',
    street: '',
    city: '',
    country: '',
    poBoxNumber: '',
    zipCode: '',
    phoneNumber: '',
    profileImage: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await AddUserEssentialInfoAction(formData);
      setMessage('User profile updated successfully!');
      setIsSuccess(true);

      setTimeout(() => {
        navigate('/view-essential');
      }, 2000);

      setFormData({
        gender: '',
        birthdate: '',
        preferredLanguage: '',
        preferredCurrency: '',
        homeAddress: '',
        street: '',
        city: '',
        country: '',
        poBoxNumber: '',
        zipCode: '',
        phoneNumber: '',
        profileImage: '',
      });
    } catch (error) {
      setMessage('Failed to update user profile.');
      setIsSuccess(false);
    }
  };

  return (
    <div
      className="user-essential-info-container"
      data-testid="add-essential-page"
    >
      <h1 className="acc-info-title">Add User Essential Information</h1>
      {message && <Message message={message} isSuccess={isSuccess} />}

      <AddUserEssentialInfoForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddUserEssentialInfoPage;
