/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../css/none-item-page-styles.css';

const EmptyCartMessage = () => (
  <div
    data-testid="none-item-page-container"
    className="none-item-page-container"
  >
    <BsCart4 />
    <p className="none-item-message">You do not have items in your Cart.</p>
    <Link to="/products">
      <button className="btn-browse-product">Browse Products</button>
    </Link>
  </div>
);

export default EmptyCartMessage;
