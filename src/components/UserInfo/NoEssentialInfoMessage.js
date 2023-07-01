/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/UserProfile/NoEssentialInfoMessage.css';
import { FaUserPlus } from 'react-icons/fa';

const NoEssentialInfoMessage = () => (
  <div className="no-essential-enfo-message-div">
    <FaUserPlus className="user-icon" />
    <p>You haven't added your Essential Information yet.</p>
    <Link to="/add-essential" data-testid="no-essential-enfo-message" className="no-essential-enfo-message">
      Add your essential Information
    </Link>
  </div>
);

export default NoEssentialInfoMessage;
