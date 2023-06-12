/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';

const UpdateCartButtons = ({ handleDecrease, handleIncrease, quantity }) => (
  <div data-testid="update-cart" className="update-cart-plus-minus">
    <button
      data-testid="btn-minus"
      onClick={handleDecrease}
      className="minus-btn update-btn"
    >
      -
    </button>
    <input
      data-testid="input-update-quantity"
      type="text"
      value={quantity}
      className="update-quntity-value"
    />
    <button
      data-testid="btn-plus"
      onClick={handleIncrease}
      className="plus-btn update-btn"
    >
      +
    </button>
  </div>
);

export default UpdateCartButtons;
