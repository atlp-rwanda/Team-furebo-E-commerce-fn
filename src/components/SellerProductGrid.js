/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  NavLink, useNavigate, useParams, useLocation,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import SellerPaginate from './SellerPagination';
import Category from './Category';
import { Latestproducts } from '../constants/Constant';
import Logo from '../assets/images/our-logo.png';
import LoadingMessage from './SellerCollection/LoadingMessage';
import EmptyCollectionMessage from './SellerCollection/EmptyCollectionMessage';
// import '../css/HomeStyles/Home.css';
import '../css/ProducutGridStyles/ProductGrid.css';
import ProductCard from './ProductCard/ProductCardSeller';
import Footer from './Footer';
import { setSingleProduct } from '../redux/slices/sellerProductSlice';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProductGrid = () => {
  const [error, setError] = useState(null);
  const [sellerProducts, setSellerProducts] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('page') || 1;
  const size = query.get('size') || 8;

  const {
    pending,
  } = useSelector((state) => state.products);
  console.log('pending', pending);

  const handleClick = (productId) => {
    dispatch(setSingleProduct(productId));
  };

  if (!localStorage.getItem('token')) {
    toast.warning('Please login', { theme: 'colored' });
    navigate('/Authentication');
    return null;
  }
  console.log('Grid', sellerProducts);

  // if (!localStorage.getItem('token')) {
  //   navigate('/Authentication');
  //   toast.warning('Please login', { theme: 'colored' });
  //   return (
  //     <div className="justify center text-3xl">
  //       Access Denied
  //       <span className="animate-bounce">
  //         {'  '}
  //         ...
  //       </span>
  //       <img className="logo-image" src={Logo} alt="" width="100px" />
  //       <br />
  //     </div>
  //   );
  // }

  // if (!sellerProducts) {
  //   return (
  //     <div className="message">
  //       Your collection is empty
  //       {' '}
  //       <br />
  //       {' '}
  //       <br />
  //       <img className="logo-image2" src={Logo} alt="" width="100px" />
  //       <NavLink to="/addProduct" style={{ color: 'blue', marginTop: '20px' }}>
  //         Create a new product
  //       </NavLink>
  //     </div>

  //   );
  // }

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
          {sellerProducts && (
          <h1 className="quantity">
            Items:
            {' '}
            {totalItems}
          </h1>
          )}
          <hr />
        </div>
        { pending ? (<LoadingMessage />)
          : !sellerProducts ? (<EmptyCollectionMessage />) : (
            <div className="latestProductsBody">
              {sellerProducts?.map((pr) => (
                <NavLink key={pr.id} to={`/sellerProducts/${pr.id}`} className="card-styles">
                  <ProductCard key={pr.id} data={pr} onClick={() => handleClick(pr.id)} />
                </NavLink>
              ))}
            </div>
          )}

      </div>
      <SellerPaginate page={page} size={size} setTotalItems={setTotalItems} setSellerProducts={setSellerProducts} data-testid="paginate-component" />
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
