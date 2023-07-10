import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/our-logo.png';

const EmptyCollectionMessage = () => (
  <div className="message">
    Your collection is empty
    <br />
    <br />
    <img className="logo-image2" src={Logo} alt="" width="100px" />
    <NavLink to="/addProduct" style={{ color: 'blue', marginTop: '20px' }}>
      Create a new product
    </NavLink>
  </div>
);

export default EmptyCollectionMessage;
