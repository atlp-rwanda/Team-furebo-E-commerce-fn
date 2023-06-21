/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch } from 'react-redux';
import clearWishlistAction from '../../redux/actions/Wishlist/ClearWishListAction';

const ClearWishlistButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearWishlistAction());
  };

  return (
    <button
      data-testid="clear-wishlist-button"
      className="clear-wishlist-button clear-button"
      onClick={handleClear}
    >
      Clear
    </button>
  );
};

export default ClearWishlistButton;
