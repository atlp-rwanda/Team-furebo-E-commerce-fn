/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SuccessImage from '../assets/images/success.png';
import { VerifyEmail } from '../redux/actions/signup';

import '../Styles/AuthStyles/Auth.css';

const EmailVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [validUrl, setValidUrl] = useState(false);

  const { pending } = useSelector((state) => state.user);

  useEffect(() => {
    VerifyEmail(setValidUrl, params, dispatch);
  }, [params]);

  return (
    <>
      {validUrl ? (
        <div className="verifyPage">
          <img src={SuccessImage} alt="successImage" className="successImage" />
          <h1>Email verified successfully</h1>
          <Link to="/authentication">
            <button className="verifySignInBtn">Sign In</button>
          </Link>
        </div>
      ) : (
        <Fragment className="center">
          {pending ? <span>loading....</span> : <h1>404 Not Found</h1>}
        </Fragment>
      )}
    </>
  );
};

export default EmailVerify;
