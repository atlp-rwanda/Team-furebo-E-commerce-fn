/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import ClearCart from './ClearCart';

const CartSummary = ({ profileData, handleClearCart }) => (
  <div className="the-cart-summary">
    <ClearCart handleClearCart={handleClearCart} />
    <div className="cart-summary">
      <div className="cart-summary-header">
        <span className="cart-summry-title">Cart summary</span>
      </div>
      <hr />
      <div className="cart-item-field">
        <label htmlFor="itemCounts">Items: </label>
        <span id="itemCounts">
          {profileData.length > 0 ? profileData[0].itemCounts : 0}
        </span>
      </div>
      <hr />
      <div className="cart-item-field">
        <label htmlFor="cartTotalPrice">Total: </label>
        <span id="cartTotalPrice">
          {profileData.length > 0 ? profileData[0].cartTotalPrice : 0}
        </span>
      </div>
      <hr />
      <button className="btn-place-order">Place Order</button>
    </div>
  </div>
);

export default CartSummary;
