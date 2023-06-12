/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCartItems } from '../../redux/actions/Cart/ViewCartItemsAction';

const ViewCartButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCartItems());
  };

  return (
    <div data-testid="view-cart-button">
      <Link to="/view-cart" onClick={handleClick}>
        View Cart
      </Link>
    </div>
  );
};

export default ViewCartButton;
