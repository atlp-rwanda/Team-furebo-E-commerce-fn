/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Cart/empty-cart-message.css';

const EmptyCartMessage = () => (
  <div data-testid="empty-cart-message-id" className="empty-cart-message">
    <h2 className="empty-cart-message-title">Your cart is empty</h2>
    <p className="empty-cart-message-text">
      You have no items in your cart. Please add items to your cart to continue
      shopping.
    </p>
    <Link to="/" className="empty-cart-message-link">
      Browse Products
    </Link>
  </div>
);

export default EmptyCartMessage;
