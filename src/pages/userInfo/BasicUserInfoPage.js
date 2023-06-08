/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import {
  fetchUserBasicProfile,
  fetchUserProfileImage,
} from '../../redux/actions/userProfile/FetchBasicInfoAction';
import ViewUserBasicInfo from '../../components/UserInfo/ViewUserBasicInfo';

const BasicUserInfoPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await fetchUserBasicProfile();
        setProfileData(profileData);

        const profileImageData = await fetchUserProfileImage();
        setProfileImage(profileImageData);

        setLoading(false);
      } catch (error) {
        setError('Error fetching profile data');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div className="page-in-loading">Wait...</div>;
  }

  return (
    <div data-testid="view-basic-page">
      <ViewUserBasicInfo
        profileData={profileData}
        profileImage={profileImage}
      />
    </div>
  );
};

export default BasicUserInfoPage;
