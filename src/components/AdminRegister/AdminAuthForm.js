/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminSignUp from '../../redux/actions/AdminSignup';
import '../../css/AuthStyles/Auth.css';

const AdminAuthForm = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);
  const [adminError, setAdminError] = useState(null);
  const [authData, setAuthData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    adminCode: '',
  });

  const {
    successCondition, userInfo, error, pending,
  } = useSelector(
    (state) => state.user,
  );

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AdminSignUp(authData, dispatch, setAuthData);
  };

  return (
    <div className="authForm" data-testid="AdminAuthForm">
      <div className="authFormLeft">
        <h1>{isSignUp ? 'Welcome Back' : 'Create Account'}</h1>
        <Link to="/authentication">
          <button>Sign In</button>
        </Link>
      </div>
      <div className="authFormRight">
        <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
        <form>
          {isSignUp && (
            <>
              <input
                name="firstname"
                type="text"
                placeholder="First Name"
                value={authData.firstname}
                onChange={handleChange}
              />
              <input
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={authData.lastname}
                onChange={handleChange}
              />
            </>
          )}
          <input
            name="email"
            type="email"
            placeholder="Emai"
            value={authData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={authData.password}
            onChange={handleChange}
          />
          <input
            name="adminCode"
            type="number"
            placeholder="AdminCode"
            value={authData.adminCode}
            onChange={handleChange}
          />
          <span className="pending">{pending ? 'loading...' : null}</span>
          {successCondition && (
            <span className="successDisplay">{userInfo.message}</span>
          )}
          {error.condition && (
            <span className="errorDisplay">{error.message}</span>
          )}
          {adminError !== null && (
            <span className="errorDisplay">{adminError}</span>
          )}
          <button className="authButton" onClick={handleSubmit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          {isSignUp && (
            <Link to="/authentication">
              <span>register as user</span>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminAuthForm;
