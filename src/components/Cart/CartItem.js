/* eslint-disable linebreak-style */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity } from '../../redux/actions/Cart/UpdateCartItemAction';
import ShowUpdateCartButton from './ShowUpdateCartButton';
import DeleteCartButtons from './DeleteCartButtons';
import GoToItemDetails from './GoToItemDetails';
import CartItemFields from './CartItemFields';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [updating, setUpdating] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleIncrease = () => {
    setUpdating(true);
    const updatedQuantity = item.quantity + 1;
    const updatedTotalPrice = item.price * updatedQuantity;
    dispatch(
      updateCartItemQuantity(
        item.id,
        updatedQuantity,
        updatedTotalPrice,
        setShowButtons
      )
    ).then(() => setUpdating(false));
  };

  const handleDecrease = () => {
    setUpdating(true);
    const updatedQuantity = item.quantity - 1;
    const updatedTotalPrice = item.price * updatedQuantity;
    dispatch(
      updateCartItemQuantity(
        item.id,
        updatedQuantity,
        updatedTotalPrice,
        setShowButtons
      )
    ).then(() => setUpdating(false));
  };

  return (
    <div data-testid="cart-item" className="cart-item">
      <div
        key={item.id}
        className="cart-item-container"
        data-testid="cart-item-container"
      >
        <div className="cart-item-details" data-testid="cart-item-details">
          <div className="cart-item-image">
            <img src={item.image} alt={item.name} className="item-image" />
          </div>
          <CartItemFields item={item} />
        </div>

        <div
          data-testid="btn-cart-item-actions"
          className="btn-cart-item-actions"
        >
          <DeleteCartButtons cartItemId={item.id} />
          {updating ? (
            <span className="updating-loader" data-testid="updating-loader">
              Updating ...
            </span>
          ) : (
            <GoToItemDetails item={item} />
          )}
          <ShowUpdateCartButton
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={item.quantity}
            setShowButtons={setShowButtons}
            showButtons={showButtons}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
