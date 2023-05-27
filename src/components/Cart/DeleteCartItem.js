/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { MdDelete } from 'react-icons/md';

const DeleteCartItem = ({ item, deleteItem }) => (
  <button
    data-testid="btn-delete-id"
    className="btn btn-danger delete-cart-item"
    onClick={() => deleteItem(item.id)}
  >
    <MdDelete />
  </button>
);

export default DeleteCartItem;
