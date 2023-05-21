import React from "react";
import { Link } from "react-router-dom";
// import "../../scss/login.scss";
import googleIcon from "../../assets/images/googleIcon.svg";

export default function GoogleButton() {
  return (
    <div>
      <Link to={`${process.env.BACKEND_URL}/google/callback`}>
        <div className="google-btn">
          <img className="google-image" src={googleIcon} alt="google_icon" />
          <h6>Sign in with Google</h6>
        </div>
      </Link>
    </div>
  );
}