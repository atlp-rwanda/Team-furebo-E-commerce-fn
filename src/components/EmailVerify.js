/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SuccessImage from '../assets/images/success.png';
import { VerifyEmail } from '../redux/actions/signup';

import '../css/AuthStyles/Auth.css';

const EmailVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [validUrl, setValidUrl] = useState(false);

  const { pending } = useSelector((state) => state.user);

  useEffect(() => {
    VerifyEmail(setValidUrl, params, dispatch);
  }, [params]);

  return (
    <div data-testid="EmailVerify">
      {validUrl ? (
        <div className="verifyPage">
          <img src={SuccessImage} alt="successImage" className="successImage" />
          <h1>Email verified successfully</h1>
          <Link to="/authentication">
            <button className="verifySignInBtn">Sign In</button>
          </Link>
        </div>
      ) : (
        <div className="center">
          {pending ? <span>loading....</span> : <h1>404 Not Found</h1>}
        </div>
      )}
    </div>
  );
};

export default EmailVerify;
