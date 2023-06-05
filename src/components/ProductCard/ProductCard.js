/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '../../redux/actions/shoppingCart';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
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
          <Link to={`/productDetails/${product.id}`}>
            <button>View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
