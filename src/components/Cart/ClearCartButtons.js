/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch } from 'react-redux';
import clearCart from '../../redux/actions/Cart/ClearCartItemAction';

const ClearCartButtons = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <button
      data-testid="clear-button"
      onClick={handleClearCart}
      className="clear-button"
    >
      Clear Cart
    </button>
  );
};

export default ClearCartButtons;
