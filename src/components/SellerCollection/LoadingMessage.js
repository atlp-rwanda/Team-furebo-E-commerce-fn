import React from 'react';
import Logo from '../../assets/images/our-logo.png';

const LoadingMessage = () => (
  <div className="message">
    Retreiving Items
    <span className="animate-bounce">{'  '}</span>
    <img className="logo-image2" src={Logo} alt="" width="100px" />
    <br />
  </div>
);

export default LoadingMessage;
