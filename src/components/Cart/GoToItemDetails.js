/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const GoToItemDetails = ({ item }) => (
  <div data-testid="browse-same-product" className="browse-same-product">
    <Link to={`/productDetails/${item.productId}`}>
      <button className="check-more-product">Check more details</button>
    </Link>
  </div>
);

export default GoToItemDetails;
