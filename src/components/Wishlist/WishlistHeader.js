/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
// import { useDispatch } from 'react-redux';
import ClearWishlistButton from './ClearWishListButton';
import '../../css/in-view-page-header.css';

const WishlistHeader = ({ hasItems }) => {
  // const dispatch = useDispatch();
  return (
    <>
      <div
        data-testid="in-view-page-wishlist-header"
        className="in-view-page-header"
      >
        <h2>YOUR WISHLIST</h2>
        {hasItems && <ClearWishlistButton />}
      </div>
      <hr />
    </>
  );
};

export default WishlistHeader;
