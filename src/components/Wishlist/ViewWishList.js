/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchWishlistAction from '../../redux/actions/Wishlist/ViewWishListAction';
import '../../css/wishlist/wishlist.css';
import WishlistHeader from './WishlistHeader';
import EmptyWishlistMessage from './EmptyWishlistMessage';
import WishlistItem from './WishlistItem';

const selectWishlistItems = state => state.viewWishlist.wishlistItems;
const selectLoading = state => state.viewWishlist.loading;
const selectError = state => state.viewWishlist.error;

const ViewWishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchWishlistAction());
  }, [dispatch]);

  return (
    <div data-testid="view-wishlist" className="view-wishlist">
      <WishlistHeader hasItems={wishlistItems.length > 0} />
      {loading ? (
        <div className="loading-div">
          <p className="leading-text">Loading...</p>
        </div>
      ) : error ? (
        error.includes('404') ? (
          <EmptyWishlistMessage />
        ) : (
          <p>Error: {error}</p>
        )
      ) : wishlistItems.length === 0 ? (
        <EmptyWishlistMessage />
      ) : (
        <ul className="wishlist-items">
          {wishlistItems.map(item => (
            <WishlistItem item={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewWishlist;
