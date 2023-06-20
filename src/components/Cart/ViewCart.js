/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React, { useState } from 'react';
import ViewCartFields from './ViewCartFields';
import CartSummary from './CartSummary';

const ViewCart = ({
  profileData, deleteItem, updateItem, clearCart,
}) => {
  const [showQuantityEdit, setShowQuantityEdit] = useState({});

  const handleIncrement = (itemId) => {
    const item = profileData.find((item) => item.id === itemId);
    const updatedQuantity = item.quantity + 1;
    const updatedTotalPrice = item.price * updatedQuantity;
    updateItem(itemId, updatedQuantity, updatedTotalPrice);
  };

  const handleDecrement = (itemId) => {
    const item = profileData.find((item) => item.id === itemId);
    const updatedQuantity = item.quantity - 1;
    const updatedTotalPrice = item.price * updatedQuantity;

    if (updatedQuantity === 0) {
      deleteItem(itemId);
    } else {
      updateItem(itemId, updatedQuantity, updatedTotalPrice);
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  const toggleQuantityEdit = (itemId) => {
    setShowQuantityEdit((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div data-testid="view-cart-id" className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
      </div>
      <div className="cart-items" data-testid="cart-items-id">
        <div className="cart-items-details">
          {profileData.map((item) => (
            <ViewCartFields
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateItem={updateItem}
              showQuantityEdit={showQuantityEdit[item.id]}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              toggleQuantityEdit={toggleQuantityEdit}
              quantity={item.quantity}
            />
          ))}
        </div>
        <CartSummary
          profileData={profileData}
          handleClearCart={handleClearCart}
        />
      </div>
    </div>
  );
};

export default ViewCart;
