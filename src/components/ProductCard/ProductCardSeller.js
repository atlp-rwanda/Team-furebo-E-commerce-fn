/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';
// import { FaStar } from 'react-icons/fa';

const ProductCard = ({ data, onClick }) => {
  const firstImage = data?.image?.[0];
  console.log('data', data);
  return (
    <button className="latestProductCard" data-testid="ProductCardSeller" onClick={onClick}>
      <div className="productImage">
        <img src={firstImage} alt="/" />
      </div>
      <span className="price" style={{ marginBottom: '-30px', fontSize: '18px' }}>
        {data?.category}
      </span>
      <div>
        <h1 style={{ marginBottom: '-20px' }}>{data?.name}</h1>
      </div>
      <div>
        <span className="price" style={{ marginBottom: '-30px', fontSize: '18px' }}>
          $
          {data?.price}
        </span>
      </div>
      <div>
        <button onClick={onClick}>
          VIEW
          <BsArrowRight />
        </button>
      </div>
      <div className="rating">
        {/* {[...Array(data.rating)].map((index) => (
        <FaStar id={index + 1} key={index + 2} />
      ))} */}
      </div>
    </button>
  );
};
ProductCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
