import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import newPasswordAction from '../redux/actions/NewPassword';
import signIn from '../redux/actions/Login';

import '../css/AuthStyles/Auth.css';
// import Validation from "./Validation";
import { ValidateNewPassword } from './Validation';

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const [authData, setAuthData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [newPassword, setNewPassword] = useState('');
  const { successCondition, userInfo, error, pending } = useSelector(
    state => state.newPassword
  );

  const handleChange = e => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleValidationPassword = e => {
    e.preventDefault();

    setErrors(ValidateNewPassword(authData));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      // Display error message or take appropriate action
      toast.error('Please resolve the form errors', { theme: 'colored' });
      return;
    }
    await newPasswordAction(authData, dispatch, params, () => {
      toast.success('Password was successfully reset, Please login', {
        theme: 'colored',
      });
      setTimeout(() => {
        navigate('/authentication');
      }, 2000);
    });
  };

  return (
    <div className="authForm" data-testid="Newpasswordform">
      <div className="authFormLeft">
        <h1>{isSignUp ? 'Welcome Back' : 'Create Account'}</h1>
        <button onClick={() => navigate('/authentication')}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
      <div className="authFormRight">
        <h1>{isSignUp ? 'Create Account' : 'Enter Your New Password'}</h1>
        <form>
          <input
            name="newPassword"
            type="password"
            placeholder="New Password"
            value={authData.newPassword}
            onChange={handleChange}
            onKeyUp={handleValidationPassword}
          />
          {errors.newPassword && (
            <p style={{ color: 'red', fontSize: '10px' }}>
              {errors.newPassword}
            </p>
          )}
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={authData.confirmPassword}
            onChange={handleChange}
            onKeyUp={handleValidationPassword}
          />
          {errors.confirmPassword && (
            <p style={{ color: 'red', fontSize: '10px' }}>
              {errors.confirmPassword}
            </p>
          )}
          {errors.matchPassword && (
            <p style={{ color: 'red', fontSize: '12px' }}>
              {errors.matchPassword}
            </p>
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

export default NewPasswordForm;
