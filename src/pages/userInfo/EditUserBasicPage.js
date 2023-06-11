import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditUserBasicInfo from '../../components/UserInfo/EditUserBasicInfo ';
import {
  fetchUserProfile,
  updateUserProfile,
} from '../../redux/actions/userProfile/EditUserBasicInfoAction';
import '../../css/profile/Edit-basicInfo.css';
import { act } from 'react-dom/test-utils';

const EditUserBasicPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { firstName, lastName, email } = await fetchUserProfile();

      act(() => {
        setFirstName(firstName);
      });
      act(() => {
        setLastName(lastName);
      });
      act(() => {
        setEmail(email);
      });
    } catch (error) {
      // Handle error
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updateUserProfile(firstName, lastName, email);

      setMessage('User information updated successfully!');
      setIsSuccess(true);

      setTimeout(() => {
        navigate('/view-basic');
      }, 2000);
    } catch (error) {
      setMessage('Failed to update user information.');
      setIsSuccess(false);
    }
  };

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  return (
    <div data-testid="editBasicPage">
      <EditUserBasicInfo
        firstName={firstName}
        lastName={lastName}
        email={email}
        message={message}
        isSuccess={isSuccess}
        handleSubmit={handleSubmit}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
      />
    </div>
  );
};

export default EditUserBasicPage;
