/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminSignUp from '../../redux/actions/AdminSignup';

const AdminAuthForm = () => {
  const AdminCode = '5020';
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [adminError, setAdminError] = useState(null);
  const [authData, setAuthData] = useState({
    firstname: '', lastname: '', email: '', password: '',
  });

  const [adminCode, setAdminCode] = useState({ code: '' });

  const {
    successCondition, userInfo, error, pending,
  } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (adminCode.code === AdminCode) {
      AdminSignUp(authData, dispatch);
    } else {
      setAdminError('You are not allowed to register as admin');

      setTimeout(() => {
        setAdminError(null);
      }, [2000]);
    }
  };

  //   const checkPermission = (e) => {
  //     e.preventDefault();

  //     if (authData.code === AdminCode) {
  //     //   handleSubmit();
  //       console.log('access granted');
  //     } else {
  //       console.log('You are not allowed to register as admin');
  //     }
  //   };

  return (
    <div className="authForm" data-testid="AdminAuthForm">
      <div className="authFormLeft">
        <h1>{isSignUp ? 'Welcome Back' : 'Create Accout'}</h1>
        <button onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? 'Sign In' : 'Sign Up'}</button>
      </div>
      <div className="authFormRight">
        <h1>{isSignUp ? 'Create Accout' : 'Welcome Back'}</h1>
        <form>
          {isSignUp && (
            <>
              <input name="firstname" type="text" placeholder="First Name" value={authData.firstname} onChange={handleChange} />
              <input name="lastname" type="text" placeholder="Last Name" value={authData.lastname} onChange={handleChange} />
            </>
          )}
          <input name="email" type="email" placeholder="Emai" value={authData.email} onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" value={authData.password} onChange={handleChange} />
          <input name="code" type="number" placeholder="AdminCode" value={adminCode.code} onChange={(e) => setAdminCode({ ...adminCode, code: e.target.value })} />
          <span className="pending">{pending ? 'loading...' : null}</span>
          {successCondition && <span className="successDisplay">{userInfo.message}</span>}
          {error.condition && <span className="errorDisplay">{error.message}</span>}
          {adminError !== null && <span className="errorDisplay">{adminError}</span>}
          <button onClick={handleSubmit}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          {isSignUp && <Link to="/authentication"><span>register as user</span></Link>}
        </form>
      </div>
    </div>
  );
};

export default AdminAuthForm;
