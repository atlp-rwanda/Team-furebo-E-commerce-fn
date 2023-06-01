import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../../components/UserInfo/Message';
import {
  fetchUserProfile,
  updateUserProfile,
} from '../../redux/actions/userProfile/EditUserEssentialInfoAction';
import '../../css/profile/Edit-EssentialInfo.css';
import EditUserEssentialInfo from '../../components/UserInfo/EditUserEssentialInfo';

const EditUserEssentialInfoPage = () => {
  const [userProfile, setUserProfile] = useState({
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
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const fetchedUserProfile = await fetchUserProfile();

      setUserProfile(fetchedUserProfile);
    } catch (error) {
      // Handle error
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserProfile(prevUserProfile => ({
      ...prevUserProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await updateUserProfile(userProfile);

      setMessage('User profile updated successfully!');
      setIsSuccess(true);

      setTimeout(() => {
        navigate('/view-essential');
      }, 2000);
    } catch (error) {
      setMessage('Failed to update user profile.');
      setIsSuccess(false);
    }
  };

  return (
    <div data-testid="editEssentialPage" className="user-essential-info-container">
      <h1 className="acc-info-title">Edit Account's Essential Information</h1>
      <form onSubmit={handleSubmit}>
        {message && <Message message={message} isSuccess={isSuccess} />}
        <EditUserEssentialInfo
          gender={userProfile.gender}
          birthdate={userProfile.birthdate}
          preferredLanguage={userProfile.preferredLanguage}
          preferredCurrency={userProfile.preferredCurrency}
          homeAddress={userProfile.homeAddress}
          street={userProfile.street}
          city={userProfile.city}
          country={userProfile.country}
          poBoxNumber={userProfile.poBoxNumber}
          zipCode={userProfile.zipCode}
          phoneNumber={userProfile.phoneNumber}
          profileImage={userProfile.profileImage}
          onChange={handleChange}
        />
        <button className="btn btn-submit" type="submit">
          UPDATE
        </button>
      </form>
      <Link to="/view-essential" className="update-essential-user-info">
        Back
      </Link>
    </div>
  );
};

export default EditUserEssentialInfoPage;
