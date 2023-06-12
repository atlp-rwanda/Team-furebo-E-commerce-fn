/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import getSingleProducts from '../redux/actions/proDetails';
import '../css/proDetailsStyles/productDetails.css';
import getRecommandedProducts from '../redux/actions/fetchRecom';
import addToCart from '../redux/actions/shoppingCart';
import AddToWishListButton from '../components/Wishlist/AddToWishlistButton';
import IsInWishlistButton from '../components/Wishlist/IsInWishlistButton';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = useParams().id;

  const { singleProductInfo, pending, error } = useSelector(
    state => state.singleProduct
  );
  const { recomProduct } = useSelector(state => state.recomProducts);

  const { wishlistItems } = useSelector(state => state.viewWishlist);
  console.log(wishlistItems, 'All');

  const isItemInWIshlist = wishlistItems.filter(
    item => item.productId == productId
  );
  console.log(isItemInWIshlist, 'Single');

  const { category } = singleProductInfo;

  const { successCondition, productsInfo, cartpending } = useSelector(
    state => state.cart
  );

  useEffect(() => {
    getSingleProducts(productId, dispatch);
  }, [productId]);

  useEffect(() => {
    if (singleProductInfo) {
      getRecommandedProducts(category, dispatch);
    }
  }, [singleProductInfo]);

  const recommendedProducts = recomProduct?.filter(
    ({ id }) => id !== singleProductInfo.id
  );

  const openProduct = id => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <div className="overContainer" data-testid="product-detals">
      {pending ? (
        <div className="loadingContainer">loading...</div>
      ) : error.condition ? (
        <div className="Error">
          <span>Error:</span> {error.message}
        </div>
      ) : (
        <div className="detailContainer">
          <div className="overDetailContainer">
            <div className="detailsCard">
              <div className="detailsImg">
                <img src={singleProductInfo.image} alt="images" />
              </div>
              <div className="detailsInfo">
                <h1 className="detailsName">
                  Name: <span>{singleProductInfo.name}</span>
                </h1>
                <h1 className="detailsCategory">
                  Category: <span>{singleProductInfo.category}</span>
                </h1>
                <h1 className="detailsPrice">
                  Unit Price: $ {singleProductInfo.price}
                </h1>
                <h1 className="detailsQuantity">
                  Quantity: {singleProductInfo.quantity} Unities
                </h1>
                <h1 className="detailsStatus">
                  Status: {singleProductInfo.status}
                </h1>
                <h1 className="detailsDate">
                  CreatedAt: {moment(singleProductInfo.createdAt).calendar()}
                </h1>
                <h1 className="detailsExDate">
                  ExpiredAt: {moment(singleProductInfo.exDate).calendar()}
                </h1>
                <div className="product-details-buttons">
                  <div className="detailsButtons">
                    <button onClick={() => setShowPopUp(true)}>
                      Add To Cart
                    </button>
                  </div>
                  <div className="add-cart-wishlist-buttons">
                    {isItemInWIshlist.length === 0 ? (
                      <AddToWishListButton productId={productId} />
                    ) : (
                      <IsInWishlistButton productId={productId} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {recommendedProducts.length && (
              <div className="recomandations">
                <h1>You might also like</h1>
                <hr />
                <div className="recommendedProducts">
                  {recommendedProducts?.map(product => (
                    <div
                      key={product.id}
                      className="recommendedProductsCard"
                      onClick={() => openProduct(product.id)}
                    >
                      <div className="recommendedImg">
                        <img src={product.image} alt="images" />
                      </div>
                      <div className="recommendetionDetails">
                        <h1 className="name">{product.name}</h1>
                        <h1>cat: {product.category}</h1>
                        <h1>${product.price}</h1>
                        <h1>{product.status}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {showPopUp && (
            <div className="popUp">
              {cartpending ? (
                <div className="loading">
                  <div>loading....</div>
                </div>
              ) : (
                <div className="popUpChild">
                  <span className="span" onClick={() => setShowPopUp(false)}>
                    <RxCross1 />
                  </span>
                  <h2>please choose quantity</h2>
                  <h2>
                    available quantity
                    <span>{singleProductInfo.quantity}</span>
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
                      addToCart(
                        quantity,
                        singleProductInfo.id,
                        dispatch,
                        setShowPopUp
                      );
                    }}
                  >
                    add
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
