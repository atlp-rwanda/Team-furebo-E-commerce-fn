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
