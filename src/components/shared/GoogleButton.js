import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/AuthStyles/Auth.css';
import googleIcon from '../../assets/images/googleIcon.svg';

const backendURL = 'http://localhost:3000';

export default function GoogleButton() {
  return (
    <div data-testid="googleButton">
      <Link to={`${backendURL}/auth/google`}>
        <div className="google-btn">
          <img className="google-image" src={googleIcon} alt="google_icon" />
          <h6>Sign in with Google</h6>
        </div>
      </Link>
    </div>
  );
}
