/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { FcTodoList } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import '../../css/none-item-page-styles.css';

const NoResultsMessage = () => (
  <div
    data-testid="none-item-page-container"
    className="none-item-page-container"
  >
    <FcTodoList />
    <p className="none-item-message">No match found!</p>
    <Link to="/products">
      <button className="btn-browse-product">Browse Products</button>
    </Link>
  </div>
);

export default NoResultsMessage;
