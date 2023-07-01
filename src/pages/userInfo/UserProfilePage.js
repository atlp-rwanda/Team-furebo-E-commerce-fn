/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';
import ViewUserBasicInfo from '../../components/UserInfo/ViewUserBasicInfo';
import ViewUserEssentialInfo from '../../components/UserInfo/ViewUserEssentialInfo';
import '../../css/UserProfile/UserProfile.css';
import '../../css/UserProfile/ChangePasswordAtTimeGiven.css';
import ChangePasswordAtTimeGiven from '../../components/UserInfo/ChangePasswordAtTimeGiven';

const UserProfilePage = () => (
  <>
    <div className="user-profile-info-header">
      <span className="user-profile-info-title ">Profile Information</span>
    </div>
    <div>
    <ChangePasswordAtTimeGiven />
    </div>
    <div className="view-basic-and-essential">

      <div className="basic-container">

        <div data-testid="view-basic-page">
          <ViewUserBasicInfo />
        </div>
        <div data-testid="view-essential-page">
          <ViewUserEssentialInfo />
        </div>
      </div>
    </div>

  </>
);

export default UserProfilePage;
