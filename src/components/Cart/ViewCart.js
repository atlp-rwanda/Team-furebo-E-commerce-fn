/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '../../redux/actions/Cart/ViewCartItemsAction';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import '../../css/Cart/view-cart-items.css';
import EmptyCartMessage from './EmptyCartMessage';
import CartSummary from './CartSummary';

<<<<<<< HEAD
const selectCartItems = (state) => state.viewCartItems.cartItems;
const selectLoading = (state) => state.viewCartItems.loading;
const selectError = (state) => state.viewCartItems.error;

const ViewCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const cartTotalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.totalPrice),
    0,
  );
  const itemCounts = cartItems.reduce(
    (count, item) => count + item.quantity,
    0,
  );

  return (
    <div data-testid="view-cart" className="view-cart">
      <CartHeader hasItems={cartItems.length > 0} />
      <div data-testid="cart-id" className="cart">
        <div data-testid="cart-cards-id" className="cart-cards">
          {loading ? (
            <div data-testid="loading-div" className="loading-div">
              <p className="leading-text">Loading...</p>
            </div>
          ) : error ? (
            error.includes('404') ? (
              <EmptyCartMessage />
            ) : (
              <p>Error: {error}</p>
            )
          ) : cartItems.length === 0 ? (
            <EmptyCartMessage />
          ) : (
            <div data-testid="cart-items" className="cart-items">
              {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          )}
=======
const ViewCart = ({ profileData, deleteItem, updateItem, clearCart }) => {
  const [showQuantityEdit, setShowQuantityEdit] = useState({});

  const handleIncrement = itemId => {
    const item = profileData.find(item => item.id === itemId);
    const updatedQuantity = item.quantity + 1;
    const updatedTotalPrice = item.price * updatedQuantity;
    updateItem(itemId, updatedQuantity, updatedTotalPrice);
  };

  const handleDecrement = itemId => {
    const item = profileData.find(item => item.id === itemId);
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

  const toggleQuantityEdit = itemId => {
    setShowQuantityEdit(prevState => ({
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
          {profileData.map(item => (
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
>>>>>>> da0141d (feat: Admin disable account)
        </div>
        {cartItems.length !== 0 && (
          <CartSummary
            cartTotalPrice={cartTotalPrice}
            itemCounts={itemCounts}
          />
        )}
      </div>
    </div>
  );
};

export default ViewCart;
