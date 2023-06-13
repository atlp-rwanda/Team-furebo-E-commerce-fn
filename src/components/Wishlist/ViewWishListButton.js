/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import fetchWishlistAction from '../../redux/actions/Wishlist/ViewWishListAction';

const ViewWishlistButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchWishlistAction());
  };

  return (
    <div data-testid="view-wishlist-button">
      <Link
        to="/view-wishlist"
        data-testid="view-wishlist-link"
        onClick={handleClick}
      >
        <FcLike />
      </Link>
    </div>
  );
};

export default ViewWishlistButton;
