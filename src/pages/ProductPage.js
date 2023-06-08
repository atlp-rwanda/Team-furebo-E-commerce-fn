/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';
import { Latestproducts } from '../constants/Constant';
import fetchAllProducts from '../redux/actions/FetchProduct';
import Paginate from '../components/ProductCard/Pagination';
import Footer from '../components/Footer';
import '../css/ProductStyles/Products.css';
// import '../css/FooterStyles/Footer.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const page = query.get('page') || 1;
  const size = query.get('size') || 8;

  const {
    successCondition, productsInfo, error, pending,
  } = useSelector(
    (state) => state.product,
  );

  return (
    <div className="productsPage" data-testid="product-card">
      <h1>PRODUCTS</h1>
      <hr />
      {pending ? (
        <div elevation={6} className="circularProgress">
          <div>loading....</div>
        </div>
      ) : !pending && products?.length === 0 ? (
        <div>No Products</div>
      ) : (
        <div className="productContainer">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <Paginate page={page} size={size} setProducts={setProducts} />
      {/* <Footer /> */}
    </div>
  );
};

export default ProductPage;
