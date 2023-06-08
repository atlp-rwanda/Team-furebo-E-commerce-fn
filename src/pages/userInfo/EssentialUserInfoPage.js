import React, { useEffect, useState } from 'react';
import UserEssentialInfoView from '../../components/UserInfo/ViewUserEssentialInfo';
import FetchEssentialInfo from '../../redux/actions/userProfile/FetchEssentialInfoAction';

const EssentialUserInfoPage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await FetchEssentialInfo();
        setProfileData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div data-testid="view-essential-page">
      <UserEssentialInfoView profileData={profileData} />;
    </div>
  );
};

export default EssentialUserInfoPage;
