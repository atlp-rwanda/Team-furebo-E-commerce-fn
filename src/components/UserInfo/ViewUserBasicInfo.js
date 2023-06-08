/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/profile/View-Basic-info.css';
import { SlCalender } from 'react-icons/sl';
import { FiEdit } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';
import PlaceholderImage from '../../assets/images/Placeholder.png';
import ChangePasswordAtTimeGiven from './ChangePasswordAtTimeGiven';

const ViewUserBasicInfo = ({ profileData, profileImage }) => (
  <div data-testid="viewBasic" className="user-profile-container">
    <ChangePasswordAtTimeGiven />
    {/* <Navigator /> */}

    {profileData && (
      <div className="">
        <h1 className="acc-info-title">Account's Basic Information</h1>
        <div className="view-user-profile">
          <div className="user-profile-image-container">
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
              <div className="Joined-field">
                <SlCalender id="calender-icon" />
                <label htmlFor="createdAt">Joined on</label>
                <span id="createdAt">{profileData.createdAt}</span>
              </div>
            </div>
            <div className="edit-message">
              <Link to="/update-basic" className="Edit-basic-user-info">
                Edit profile
                <FiEdit id="edit-icon" />
              </Link>
              <FaEnvelope id="envelop-icon" />
            </div>
          </div>
          <hr />
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
          </div>
        </div>

        {profileImage ? (
          <Link to="/view-essential" className="update-essential-user-info">
            View your essential information
          </Link>
        ) : (
          <Link to="/add-essential" className="update-essential-user-info">
            Add your essential information
          </Link>
        )}
        {/*
        <Link to="/update-basic" className="update-basic-user-info">
          Update your basic information
        </Link> */}
      </div>
    )}
  </div>
);

export default ViewUserBasicInfo;
