/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */

import React from 'react';
import { BiEdit } from 'react-icons/bi';
import DeleteCartItem from './DeleteCartItem';

const UpdateCart = ({
  item,
  deleteItem,
  showQuantityEdit,
  handleDecrement,
  handleIncrement,
  toggleQuantityEdit,
}) => (
  <div className="cart-item-actions" data-testid="update-cart-id">
    <DeleteCartItem item={item} deleteItem={deleteItem} />
    {showQuantityEdit && (
      <div
        className="update-cart-quantity"
        data-testid="update-cart-quantity-id"
      >
        <button
          data-testid="btn-minus-id"
          className="btn-quantity-decrement update-sign minus"
          onClick={() => handleDecrement(item.id)}
        >
          -
        </button>
        <input className="cart-quantity" type="number" value={item.quantity} />
        <button
          data-testid="btn-plus-id"
          className="btn-quantity-increment update-sign plus"
          onClick={() => handleIncrement(item.id)}
        >
          +
        </button>
      </div>
    )}
    <button
      data-testid="icon-edit-id"
      className="bi-edit-icon"
      onClick={() => toggleQuantityEdit(item.id)}
    >
      <BiEdit />
    </button>
  </div>
);

export default UpdateCart;
