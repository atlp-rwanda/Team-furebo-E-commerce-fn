import React from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import '../../css/profile/Edit-basicInfo.css';

const EditUserBasicInfo = ({
  firstName,
  lastName,
  email,
  message,
  isSuccess,
  handleSubmit,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
}) => (
  <div data-testid="editBasic" className="user-profile-container">
    <h1 className="acc-info-title">Edit Account Information</h1>
    <form onSubmit={handleSubmit}>
      {message && <Message message={message} isSuccess={isSuccess} />}
      <div className="edit-user-profile">
        <div className="user-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className="pagination-buttons">
        <button className="btn btn-submit" type="submit">
          UPDATE
        </button>
      </div>
    </form>
    <Link to="/view-basic" className="update-basic-user-info">
      Back
    </Link>
  </div>
);

export default EditUserBasicInfo;
