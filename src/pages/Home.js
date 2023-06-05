/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import Category from '../components/Category';
import { categoryProducts, Latestproducts } from '../constants/Constant';

import image from '../assets/images/splash-2-lg-256.dfb8ea.png';
import '../css/HomeStyles/Home.css';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Home = () => (
  <div className="homePage" data-testid="Home">
    <div className="main">
      <div className="mainLeft">
        <h1>
          <span>Best E-commerce solutions 3</span>
          {' '}
          to Boost your brand name and
          sales
        </h1>
        <p>
          Ipsum esse cillum eu eu occaecat. Veniam consequat deserunt non ipsum
          reprehenderit officia. Voluptate sint culpa velit nostrud adipisicing
          deserunt nisi cillum irure reprehenderit.
        </p>
        <button>Get Now</button>
      </div>
      <div className="mainRight">
        <img src={image} alt="/" />
      </div>
    </div>
    <div className="categorySection">
      <div className="cotegoryHeader">
        <h1>CATEGORY PRODUCTS</h1>
        <p>Voluptate excepteur minim quis incididunt mollit non.</p>
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
  </div>
);

Category.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    category: PropTypes.string,
  }),
};

export default Home;
