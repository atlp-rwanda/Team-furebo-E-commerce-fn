/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CartItemFields = ({ item }) => {
  return (
    <div data-testid="cart-item-info" className="cart-item-info">
      <div className="cart-item-field">
        <span className="cart-item-value name-value" data-testid="name-value">
          {item.name}-{item.category}
        </span>
      </div>

      <div className="price-quantity-fields">
        <div className="cart-item-field quantity-field">
          <span
            className="cart-item-value quanty-value"
            data-testid="quanty-value"
          >
            {item.quantity}
          </span>
        </div>
        <span className="equal">=</span>
        <div className="cart-item-field item-price-field">
          <span
            className="cart-item-value price-value"
            data-testid="price-value"
          >
            ${item.price}
          </span>
        </div>
      </div>
      <div className="cart-item-field in-stock-field">
        <label htmlFor="stock" className="in-stock-label">
          In Stock
        </label>
        <span
          className="in-stock-value in-stock-value"
          data-testid="in-stock-value"
        >
          {item.productQuantity}
        </span>
      </div>
      <div className="cart-item-field cart-total-price-field">
        <label htmlFor="total-price" className="cart-item-label">
          Total
        </label>
        <span
          className="cart-item-value total-price-value"
          data-testid="total-price-value"
        >
          ${item.totalPrice}
        </span>
      </div>
    </div>
  );
};

export default CartItemFields;
