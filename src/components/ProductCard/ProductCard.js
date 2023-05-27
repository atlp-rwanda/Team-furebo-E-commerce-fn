/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '../../redux/actions/shoppingCart';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showPopUp, setShowPopUp] = useState(false);
  const [quantity, setQuantity] = useState('');

  const { successCondition, productsInfo, error, pending } = useSelector(
    state => state.cart
  );
  return (
    <div className="productCrd" data-testid="ProductCard">
      <div className="images">
        <img src={product.image[1]} alt="images" />
      </div>
      <div className="CardDesc">
        <div className="cardHeader">
          <p className="category">{product.category}</p>
          <p>{product.name}</p>
        </div>
        <div className="cardHeader2">
          <p className="price">{product.price}$</p>
          <button onClick={() => setShowPopUp(true)}>add to cart</button>
        </div>
      </div>
      {showPopUp && (
        <div className="popUp">
          {pending ? (
            <div className="loading">
              <div>loading....</div>
            </div>
          ) : (
            <div className="popUpChild">
              <span className="span" onClick={() => setShowPopUp(false)}>
                X
              </span>
              <h2>choose quantity</h2>
              <h2>
                available quantity
                <span>{product.quantity}</span>
              </h2>
              <input
                name="quantity"
                type="number"
                placeholder="number only"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
              <button
                onClick={() => {
                  addToCart(quantity, product.id, dispatch, setShowPopUp);
                }}
              >
                add
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
