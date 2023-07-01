import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import getSingleProducts from '../redux/actions/proDetails';
import '../css/proDetailsStyles/productDetails.css';
import getRecommandedProducts from '../redux/actions/fetchRecom';
import addToCart from '../redux/actions/shoppingCart';
import AddToWishListButton from '../components/Wishlist/AddToWishlistButton';
import IsInWishlistButton from '../components/Wishlist/IsInWishlistButton';
import Rate from '../components/Rate/index';
import FetchProductFeedback from '../redux/actions/fetchProductFeedback';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = useParams().id;

  const { singleProductInfo, pending, error } = useSelector(
    state => state.singleProduct
  );

  const { recomProduct } = useSelector(state => state.recomProducts);
  const { wishlistItems } = useSelector(state => state.viewWishlist);
  const { feedbackStatus } = useSelector(state => state.getRateFeedback);

  const isItemInWIshlist = wishlistItems.filter(
    item => item.productId == productId
  );

  const { category } = singleProductInfo;

  const { successCondition, productsInfo, cartpending } = useSelector(
    state => state.cart
  );

  useEffect(() => {
    getSingleProducts(productId, dispatch);
  }, [productId]);

  useEffect(() => {
    FetchProductFeedback(productId, dispatch);
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

  const feedbackPerPage = 2;
  const indexOfLastFeedback = currentPage * feedbackPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbackPerPage;
  const displayedFeedbacks = feedbackStatus?.Feedback?.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  const goToPage = page => {
    setCurrentPage(page);
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
                {singleProductInfo &&
                  singleProductInfo.image &&
                  singleProductInfo.image[0] && (
                    <img
                      className="detailImage"
                      src={singleProductInfo.image[0]}
                      alt="images"
                    />
                  )}
              </div>
              <div className="detailsInfo">
                <h1 className="detailsName">
                  Name: <span>{singleProductInfo.name}</span>
                </h1>
                <h1 className="detailsCategory">
                  Category: <span>{singleProductInfo.category}</span>
                </h1>
                <h1 className="detailsCategory">
                  Average Rating: <span>{singleProductInfo.averageRating}</span>
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
            <Rate productId={productId} />
            <div className="feedback-container">
              <h1 className="feedback-heading">Rate and review</h1>
              {displayedFeedbacks?.map((rate, index) => (
                <div className="feedback-card" key={index}>
                  <div className="left-container">
                    <span className="rateFullname">{rate.fullname}</span>
                  </div>
                  <div className="right-container">
                    <span className="ratingStars">
                      {[...Array(5)].map((_, index) => {
                        const rating = Math.floor(rate.rating);
                        const isHalf =
                          singleProductInfo.rating % 1 !== 0 &&
                          index === rating;
                        const isFilled = index < rating;

                        if (isHalf) {
                          return (
                            <FaStarHalfAlt key={index} className="starIcon" />
                          );
                        }
                        if (isFilled) {
                          return <FaStar key={index} className="starIcon" />;
                        }
                        return <FaRegStar key={index} className="starIcon" />;
                      })}
                    </span>
                    <span className="rateReview">{rate.review}</span>
                    <span>
                      {moment(rate.createdAt).format('YYYY/DD/MM, HH:mm')}
                    </span>
                  </div>
                </div>
              ))}
              {/* Pagination */}
              <div className="pagination">
                {feedbackStatus?.Feedback?.length > feedbackPerPage && (
                  <ul>
                    {Array.from(
                      {
                        length: Math.ceil(
                          feedbackStatus.Feedback.length / feedbackPerPage
                        ),
                      },
                      (_, index) => (
                        <li
                          key={index}
                          className={currentPage === index + 1 ? 'active' : ''}
                          onClick={() => goToPage(index + 1)}
                        >
                          {index + 1}
                        </li>
                      )
                    )}
                  </ul>
                )}
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
                        {product && product.image && product.image[0] && (
                          <img src={product.image[0]} alt="images" />
                        )}
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
