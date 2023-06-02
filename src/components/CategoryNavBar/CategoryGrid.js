/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Category from '../Category';
// import { Latestproducts } from '../constants/Constant';
import Logo from '../../assets/images/our-logo.png';

// import '../css/HomeStyles/Home.css';
import '../../css/ProducutGridStyles/ProductGrid.css';
import ProductCard from '../ProductCard/ProductCardSeller';
import Footer from '../Footer';
// import { setSingleProduct } from '../redux/slices/sellerProductSlice';
import { getRecommandedProducts } from '../../redux/actions/fetchRecom';

const CategoryGrid = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const navigate = useNavigate();
  const { category } = useParams();
  console.log('category', category);
  const { recomProduct } = useSelector((state) => state.recomProducts);
  console.log('recomProduct', recomProduct);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const sellerProductsResponse = await getRecommandedProducts(category, dispatch);
        const categoryProductsData = sellerProductsResponse;
        setCategoryProducts(categoryProductsData);
        // setSelleProducts(sellerProductsData);
        // dispatch({ type: 'products/updateSellerProducts', payload: sellerProductsData });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Category dataGrid:', error);
        setError(error);
        setLoading(false);
      }
    };
    getProducts(category);
  }, []);

  console.log('categoryProductsData', categoryProducts);

  useEffect(() => {
    if (category) {
      getRecommandedProducts(category, dispatch);
    }
  }, []);

  // const handleClick = (productId) => {
  //   dispatch(setSingleProduct(productId));
  // };

  if (loading) {
    return (
      <div className="message">
        Retrieving Items
        <span className="animate-bounce">
          {'  '}
          ...
        </span>
        <img className="logo-image2" src={Logo} alt="" width="100px" />
        <br />
      </div>
    );
  }
  if (!recomProduct) {
    return (
      <div className="message">
        This collection is empty
        {' '}
        <br />
        {' '}
        <br />
        <img className="logo-image2" src={Logo} alt="" width="100px" />
        <NavLink to="/addProduct" style={{ color: 'blue', marginTop: '20px' }}>
          Create a new product
        </NavLink>
      </div>

    );
  }
  if (error) {
    return (
      <div className="message">
        Sorry something went wrong with the server:
        {' '}
        <br />
        {' '}
        {error.message}
      </div>
    );
  }

  return (
    <div className="homePage" data-testid="CategoryGrid">
      <div className="latestProducts">
        <div className="latestProductHeader">
          <h1>Shop</h1>
          {recomProduct && (
          <h1 className="quantity">
            Category:
            {' '}
            {category}
          </h1>
          )}
          <hr />
        </div>
        <div className="latestProductsBody">
          {recomProduct.map((pr) => (
            <NavLink key={pr.id} to={`/productDetails/${pr.id}`} className="card-styles">
              <ProductCard key={pr.id} data={pr} />
            </NavLink>
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

Category.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    category: PropTypes.string,
  }),
};

export default CategoryGrid;
