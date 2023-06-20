import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/profile/ChangePasswordAtTimeGiven.css';
import FetchToChangePasswordAtGivenTime from '../../redux/actions/userProfile/FetchToChangePasswordAtGivenTime';

const ChangePasswordAtTimeGiven = () => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await FetchToChangePasswordAtGivenTime();
        setIsExpired(profileData.isExpired);
      } catch (error) {
        console.error('Error fetching profile data', error);
      }
    };

    fetchProfileData();
  }, []);
  if (isExpired) {
    return (
      <div
        data-testid="ChangePasswordAtTimeGiven"
        className="password-expiration-message"
      >
        Your password has expired, Please{' '}
        <Link to="/changepassword">change your password</Link>.
      </div>
    );
  }

  return null;
};

export default ChangePasswordAtTimeGiven;
