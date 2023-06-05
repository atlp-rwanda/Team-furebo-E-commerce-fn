/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ cartTotalPrice, itemCounts }) => (
  <div data-testid="the-cart-summary" className="the-cart-summary">
    <div className="cart-summary">
      <div className="cart-summary-header">
        <span className="cart-summary-title">Cart summary</span>
      </div>
      <hr />
      <div className="cart-item-field">
        <label htmlFor="itemCounts">Items: </label>
        <span id="itemCounts">{itemCounts}</span>
      </div>
      <hr />
      <div className="cart-item-field">
        <label htmlFor="cartTotalPrice">Total: </label>
        <span id="cartTotalPrice">${cartTotalPrice.toFixed(2)}</span>
      </div>
<<<<<<< HEAD
=======
      <hr />
      {/* <button className="btn-place-order">Place Order</button> */}
>>>>>>> da0141d (feat: Admin disable account)
      <Link to="/checkout">
        <button className="btn-place-order">Checkout</button>
      </Link>
    </div>
  </div>
);

export default CartSummary;
