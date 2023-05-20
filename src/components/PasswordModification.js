import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModifyPassword from '../redux/actions/updatePassword';
import { validateUpdatePassword } from './Validation';
import '../css/PasswordModification/PasswordModification.css';
import '../css/AuthStyles/Auth.css';

const PasswordModification = () => {
  const [errors, setErrors] = useState({});
  const [authData, setAuthData] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleValidatePassword = e => {
    e.preventDefault();
    setErrors(validateUpdatePassword(authData));
  };

  const handleChange = e => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const { successCondition, userInfo, error, pending } = useSelector(
    state => state.updatePassword
  );
  useEffect(() => {
    if (successCondition) {
      navigate('/');
    }
  }, [successCondition, navigate]);
  const handleSubmit = e => {
    e.preventDefault();
    ModifyPassword(authData, params, dispatch);
    setAuthData({
      currentPassword: '',
      newPassword: '',
    });
  };

  return (
    <div className="password-container" data-testid="PasswordModification">
      <div className="passwordForm">
        <div className="passwordFormLeft" />
        <div className="passwordFormRight">
          <h1>Change your Password</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="currentPassword"
              type="password"
              placeholder="Old Password"
              value={authData.currentPassword}
              onChange={handleChange}
              onKeyUp={handleValidatePassword}
            />
            {errors.oldpassword && (
              <p
                style={{ color: 'red', fontSize: '10px' }}
                data-testid="error-messages"
              >
                {errors.currentPassword}
              </p>
            )}
            <input
              name="newPassword"
              type="password"
              placeholder="New Password"
              value={authData.newPassword}
              onChange={handleChange}
              onKeyUp={handleValidatePassword}
            />
            {errors.newpassword && (
              <p style={{ color: 'red', fontSize: '10px' }}>
                {errors.newPassword}
              </p>
            )}
            <span className="pending">{pending ? 'loading...' : null}</span>
            {successCondition && (
              <span className="successDisplay">{userInfo.message}</span>
            )}
            {error.condition && (
              <span className="errorDisplay">{error.message}</span>
            )}
            <button type="submit">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordModification;
