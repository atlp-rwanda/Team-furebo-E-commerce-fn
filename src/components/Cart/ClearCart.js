/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */

import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ClearCart = ({ handleClearCart }) => (
  <div className="clear-cart-corner">
    <button className="clear-cart clear" onClick={handleClearCart}>
      Clear cart
      <AiFillDelete className="clear-icon clear" />
    </button>
  </div>
);

export default ClearCart;
