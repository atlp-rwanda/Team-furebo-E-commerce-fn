/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
// DeleteItemInWishlistButton.js
// DeleteItemInWishlistButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { AiTwotoneDelete } from 'react-icons/ai';
import deleteItemInWishlistAction from '../../redux/actions/Wishlist/DeleteItemInWishListAction';

const DeleteItemInWishlistButton = ({ itemId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItemInWishlistAction(itemId));
  };

  return (
    <div data-testid="wishlist-item-buttons" className="wishlist-item-buttons">
      <AiTwotoneDelete
        className="remove-button delete-button"
        onClick={handleDelete}
      />
    </div>
  );
};

export default DeleteItemInWishlistButton;
