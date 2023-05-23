import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/profile/View-Basic-info.css';
import Navigator from './Navigator';
import PlaceholderImage from '../../assets/images/Placeholder.png';

const ViewUserBasicInfo = ({ profileData, profileImage }) => (
  <div data-testid="viewBasic" className="user-profile-container">
    <Navigator />

    {profileData && (
      <div className="">
        <h1 className="acc-info-title">Account's Basic Information</h1>
        <div className="view-user-profile">
          <div className="user-profile-image">
            <div className="user-field user-image">
              <img
                id="profileImage"
                src={
                  profileImage ? profileImage.profileImage : PlaceholderImage
                }
                alt="Profile Image"
                className="profile-image"
              />
            </div>
          </div>
          <div className="user-profile-info">
            <div className="user-field">
              <label htmlFor="firstName">First Name</label>
              <span id="firstName">{profileData.firstName}</span>
            </div>
            <div className="user-field">
              <label htmlFor="lastName">Last Name</label>
              <span id="lastName">{profileData.lastName}</span>
            </div>
            <div className="user-field">
              <label htmlFor="email">Email</label>
              <span id="email">{profileData.email}</span>
            </div>
            <div className="user-field">
              <label htmlFor="createdAt">Joined on</label>
              <span id="createdAt">{profileData.createdAt}</span>
            </div>
          </div>
        </div>
        <Link to="/update-basic" className="update-basic-user-info">
          Update your basic information
        </Link>
      </div>
    )}
  </div>
);

export default ViewUserBasicInfo;
