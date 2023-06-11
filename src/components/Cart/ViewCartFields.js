/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */

import React from 'react';
import UpdateCart from './UpdateCart';

const ViewCartFields = ({
  item,
  deleteItem,
  updateItem,
  showQuantityEdit,
  handleIncrement,
  handleDecrement,
  toggleQuantityEdit,
}) => (
  <div key={item.id} className="cart-item" data-testid="view-cart-fields-id">
    <div className="cart-details-container">
      <div className="cart-item-image">
        <img
          id="productImage"
          src={item.image}
          alt="Product Image"
          className="product-image"
        />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-details">
          <div className="cart-item-field">
            <span id="name" className="product-name">
              {item.name}
            </span>
          </div>
          <div className="cart-item-field">
            <label htmlFor="totalPrice">Price </label>
            <span id="totalPrice">{item.totalPrice}</span>
          </div>
          <div className="cart-item-field">
            <label htmlFor="quantity">Quantity</label>
            <span id="quantity">{item.quantity}</span>
          </div>
          <div className="cart-item-field">
            <label htmlFor="price">Price</label>
            <span id="price">{item.price}</span>
          </div>
          <div className="cart-item-field">
            <label htmlFor="category">Category</label>
            <span id="category">{item.category}</span>
          </div>
          <div className="cart-item-field ">
            <label htmlFor="createdAt" />
            <span className="cart-created-at" id="createdAt">
              {item.createdAt}
            </span>
          </div>
        </div>
        <UpdateCart
          item={item}
          deleteItem={deleteItem}
          showQuantityEdit={showQuantityEdit}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          toggleQuantityEdit={toggleQuantityEdit}
        />
      </div>
    </div>
  </div>
);

export default ViewCartFields;
