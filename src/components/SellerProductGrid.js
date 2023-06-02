/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Category from './Category';
import { Latestproducts } from '../constants/Constant';
import Logo from '../assets/images/our-logo.png';

// import '../css/HomeStyles/Home.css';
import '../css/ProducutGridStyles/ProductGrid.css';
import ProductCard from './ProductCard/ProductCardSeller';
import Footer from './Footer';
import { setSingleProduct } from '../redux/slices/sellerProductSlice';
import { getSellersProducts } from '../redux/actions/SellerProduct';

const ProductGrid = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sellerProducts, setSelleProducts] = useState(null);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const sellerProductsResponse = await getSellersProducts();
        const sellerProductsData = sellerProductsResponse.data.items;
        setSelleProducts(sellerProductsData);
        dispatch({ type: 'products/updateSellerProducts', payload: sellerProductsData });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile dataGrid:', error);
        setError(error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleClick = (productId) => {
    dispatch(setSingleProduct(productId));
  };

  if (loading) {
    return (
      <div className="message">
        Retriving Items
        <span className="animate-bounce">
          {'  '}
          ...
        </span>
        <img className="logo-image2" src={Logo} alt="" width="100px" />
        <br />
      </div>
    );
  }
  if (!sellerProducts) {
    return (
      <div className="message">
        Your collection is empty
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
    <div className="homePage" data-testid="SellerProductGrid">
      <div className="latestProducts">
        <div className="latestProductHeader">
          <h1>Seller's Collection</h1>
          <hr />
        </div>
        <div className="latestProductsBody">
          {sellerProducts.map((pr) => (
            <NavLink key={pr.id} to={`/sellerProducts/${pr.id}`} className="card-styles">
              <ProductCard key={pr.id} data={pr} onClick={() => handleClick(pr.id)} />
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

export default ProductGrid;
