/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsItem = ({ item }) => (
  <li key={item.id} data-testid="search-item" className="wishlist-item">
    <div className="wishlist-item-image">
      <img src={item.image} alt={item.name} />
    </div>
    <div className="wishlist-item-details">
      <div className="wishlist-item-info wishlist-item-name-cathegory-field">
        <span className="wishlist-item-value product-name">
          {item.name} - {item.category}
        </span>
      </div>

      <div className="wishlist-item-info wishlist-item-price-field">
        <div className="wishlist-item-value">
          <span>${item.price}</span>
        </div>
      </div>

      <div className="wishlist-item-info wishlist-item-stock-field">
        <div className="wishlist-item-label">
          <p>Stock</p>
        </div>
        <div className="wishlist-item-value">
          <span>{item.quantity}</span>
        </div>
      </div>

      <div className="wishlist-item-info wishlist-item-post-date-field ">
        <div className="wishlist-item-label">
          <p>Posted</p>
        </div>
        <span>{item.createdAt}</span>
      </div>
      <div className="check-delete-conner">
        <div className="browse-same-product">
          <Link to={`/productDetails/${item.productId}`}>
            <button className="check-more-product">
              Check more products like this one
            </button>
          </Link>
        </div>
      </div>
    </div>
  </li>
);

export default SearchResultsItem;
