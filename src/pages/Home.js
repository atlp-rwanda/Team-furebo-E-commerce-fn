/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import Category from '../components/Category';
import { categoryProducts, Latestproducts } from '../constants/Constant';

import image from '../assets/images/splash-2-lg-256.dfb8ea.png';
import '../css/HomeStyles/Home.css';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Home = () => (
  <motion.div
    className="homePage"
    data-testid="Home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="main">
      <div className="mainLeft">
        <p className="welcome">Welcome to Team-furebo-E-commerce</p>
        <h1>
          <span>Best E-commerce solutions 3</span> To Boost your brand name and
          sales
        </h1>
        <p className="description">
          Team-Furebo-E-commerce is your one-stop online shop.
          Find everything you need, from fashion to electronics,
          in one convenient place. Enjoy easy and secure shopping,
          fast shipping, and great deals. Welcome to Team-Furebo-E-commerce,
          where shopping is made simple.
        </p>
        <motion.button whileHover={{ scale: 1.1 }} type="button">
          Get Now
        </motion.button>
      </div>
      <div className="mainRight">
        <img src={image} alt="/" />
      </div>
    </div>
    <div className="categorySection">
      <div className="cotegoryHeader">
        <h1>Browse Our Categories</h1>
        <p>Discover a wide range of products to suit your needs,
          from fashion and electronics to home decor and more.
          Shop with ease at Team-Furebo-E-commerce.
        </p>
      </div>
      <div className="cotegoryBody">
        {categoryProducts.map((cat) => (
          <Category key={cat.id} data={cat} />
        ))}
      </div>
    </div>
    <div className="latestProducts">
      <div className="latestProductHeader">
        <h1>Latest Products</h1>
        <hr />
      </div>
      <div className="latestProductsBody">
        {Latestproducts.map((pr) => (
          <ProductCard key={pr.id} data={pr} />
        ))}
      </div>
    </div>
    <div className="footer">
      <Footer />
    </div>
  </motion.div>
);

Category.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    category: PropTypes.string,
  }),
};

export default Home;
