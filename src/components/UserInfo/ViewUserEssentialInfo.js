import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigator from './Navigator';
import '../../css/profile/View-Essential-info.css';

const API = axios.create({
  baseURL: 'https://team-furebo-e-commerce-bn.onrender.com/api',
});

API.interceptors.request.use(req => {
  const authToken = localStorage.getItem('currentUser');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken).token}`;
  }
  return req;
});

const ViewUserEssentialInfo = ({ profileData }) => (
  <div data-testid="viewEssential" className="user-essential-info-container">
    <Navigator />
    <h1 className="acc-info-title">Account's Essential Information</h1>
    <div className="user-essential-info">
      <div className="essential-info">
        <div className="user-field">
          <label htmlFor="gender">Gender</label>
          <span id="gender">{profileData?.gender || 'unknown'}</span>
        </div>
        <div className="user-field">
          <label htmlFor="birthdate">Birthdate</label>
          <span id="birthdate">{profileData?.birthdate || 'unknown'}</span>
        </div>
        <div className="user-field">
          <label htmlFor="preferredLanguage">Preferred Language</label>
          <span id="preferredLanguage">
            {profileData?.preferredLanguage || 'unknown'}
          </span>
        </div>
        <div className="user-field">
          <label htmlFor="preferredCurrency">Preferred Currency</label>
          <span id="preferredCurrency">
            {profileData?.preferredCurrency || 'unknown'}
          </span>
        </div>
        <div className="user-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <span id="phoneNumber">{profileData?.phoneNumber || 'unknown'}</span>
        </div>
      </div>

      <div className="home-address">
        <div className="user-field">
          <label htmlFor="street">Street</label>
          <span id="street">{profileData?.street || 'unknown'}</span>
        </div>
        <div className="user-field">
          <label htmlFor="city">City</label>
          <span id="city">{profileData?.city || 'unknown'}</span>
        </div>
        <div className="user-field">
          <label htmlFor="country">Country</label>
          <span id="country">{profileData?.country || 'unknown'}</span>
        </div>
        <div className="user-field">
          <label htmlFor="poBoxNumber">PO Box Number</label>
          <span id="poBoxNumber">{profileData?.poBoxNumber || 'unknown'}</span>
        </div>
        <div className="user-field">
          <label htmlFor="zipCode">Zip Code</label>
          <span id="zipCode">{profileData?.zipCode || 'unknown'}</span>
        </div>
      </div>
    </div>
    {profileData ? (
      <Link to="/update-essential" className="update-essential-user-info">
        Update your essential information
      </Link>
    ) : (
      <Link to="/add-essential" className="update-essential-user-info">
        Add your essential information
      </Link>
    )}
  </div>
);

export default ViewUserEssentialInfo;
