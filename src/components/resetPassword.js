/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import resetPassword from '../redux/actions/ResetPassword';
import { setEmail } from '../redux/slices/resetPasswordSlice';

import signIn from '../redux/actions/Login';

import '../css/AuthStyles/Auth.css';
// import Validation from "./Validation";
import { ValidateEmail } from './Validation';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [emailData, setEmailData] = useState({ email: '' });
  const [email, setEmail] = useState('');

  const {
    successCondition, userInfo, error, pending,
  } = useSelector(
    (state) => state.resetPassword,
  );

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleValidationEmail = (e) => {
    setErrors(ValidateEmail(emailData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(emailData, dispatch);
  };

  return (
    <div className="authForm" data-testid="Resetpasswordform">
      <div className="authFormLeft">
        <h1>{isSignUp ? 'Welcome Back' : 'Create Account'}</h1>
        <button onClick={() => navigate('/authentication')}>
          {isResetPassword ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
      <div className="authFormRight">
        <h1>Reset Password</h1>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={emailData.email}
            onChange={handleChange}
            onKeyUp={handleValidationEmail}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '10px' }}>{errors.email}</p>
          )}
          <span className="pending">{pending ? 'loading...' : null}</span>
          {successCondition && (
            <span className="successDisplay">{userInfo}</span>
          )}
          {error.condition && (
            <span className="errorDisplay">{error.message}</span>
          )}
          <button className="authButton" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
