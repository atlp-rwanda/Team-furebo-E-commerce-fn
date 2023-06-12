/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */

import React from 'react';
import { useDispatch } from 'react-redux';
import addToWishlistAction from '../../redux/actions/Wishlist/AddToWishListAction';
import '../../css/wishlist/to-wishlist.css';

const AddToWishlistButton = ({ productId }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = async () => {
    await dispatch(addToWishlistAction(productId));
  };

  return (
    <div
      data-testid="add-to-wishlist-field to-wishlist"
      className="add-to-wishlist-field to-wishlist"
    >
      <button onClick={handleAddToWishlist}>Add to wishlist</button>
    </div>
  );
};

export default AddToWishlistButton;
