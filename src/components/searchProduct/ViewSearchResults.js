/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import searchProduct from '../../redux/actions/searchProduct/SearchProduct';
import '../../css/wishlist/wishlist.css';
import SearchResultsHeader from './SearchResultsHeader';
import NoResultsMessage from './NoResultsMessage';
import SearchResultsItem from './SearchResultsItem';
import Filter from './filter';
// import { searchName } from './searchInput';
import ProductCard from '../ProductCard';
import { HiAdjustments } from "react-icons/hi";

const selectSearchResults = state => state.searchProduct.searchResults;
const selectPending = state => state.searchProduct.pending;
const selectError = state => state.searchProduct.searchError;

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const ViewSearchResults = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const loading = useSelector(selectPending);
  const error = useSelector(selectError);

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  let viewProducts;
  if (Array.isArray(searchResults.data)) {
    viewProducts = searchResults.data.map((prod) => {
      return (
        <ul
          key={prod.id}
          className="wishlist-items"
        >
          <SearchResultsItem item={prod} key={prod.id} />
          {/* <ProductCard data={prod} key={prod.id} /> */}
        </ul>
      );
    });
  } else if (searchResults) {
    viewProducts = (
      <p>
        {searchResults.message ? (<NoResultsMessage />) : ""}
      </p>
    );
  }

  // useEffect(() => {
  //   dispatch(searchProduct());
  // }, [dispatch]);

  console.log(searchResults.data)

  return (
    // <div data-testid="view-wishlist" className="view-wishlist">
    //   <SearchResultsHeader hasItems={searchResults.data.length > 0} />
    //   {/* <Filter /> */}
    //   {loading ? (
    //     <div className="loading-div">
    //       <p className="leading-text">Loading...</p>
    //     </div>
    //   ) : error ? (
    //     error.includes('404') ? (
    //       <NoResultsMessage />
    //     ) : (
    //       <p>Error: {error}</p>
    //     )
    //   ) : searchResults.data.length === 0 ? (
    //     <NoResultsMessage />
    //   ) : (
    //     <ul className="wishlist-items">
    //       {searchResults.data.map(item => (
    //         <SearchResultsItem item={item} key={item.id} />
    //       ))}
    //     </ul>
    //   )}
    // </div>

  <div>
    <div data-testid="view-wishlist" className="">
      <SearchResultsHeader hasItems={searchResults.data.length > 0} />
      <div className={show ? 'dashBoardMenu' : 'dashBoardMenuSmall'}>
        <div className="Header">
          <span className={show ? 'show' : 'hidden'}>More filters</span>
          {' '}
          <HiAdjustments className="menu1" onClick={handleShow} />
        </div>
        <hr />
        <form className='search-filter-form'>
            <input 
              name ="category" 
              placeholder="Enter category Here" 
              id="search-category" 
              type="search" 
              onChange={handleCategoryChange} 
              data-testid="search-category-input" 
            />
            <input 
                name ="minPrice" 
                placeholder="Min Price" 
                id="search-minPrice" 
                type="number" 
                onChange={handlePriceChange}
                data-testid="search-minPrice-input" 
            />
            <input 
                name ="maxPrice" 
                placeholder="Max Price" 
                id="search-maxPrice"
                type="number" 
                onChange={handlePriceChange}
                data-testid="search-maxPrice-input" 
            />
            <input
              name= "submitButton"
              placeholder="submit"
              id="search-filter-submit"
              type="submit"
              onChange={handleFilterSubmit}
              data-testid="search-filter-submit"
            />
        </form>
        <div className="dashBoard-listing">
          <li onClick={handleDashboard}>
            <MdOutlineDashboard />
            {' '}
            <span className={show ? 'show' : 'hidden'}>DashBoard</span>
          </li>
          <li onClick={handleUsers}>
            <BsFillMenuAppFill />
            {' '}
            <span className={show ? 'show' : 'hidden'}>Users</span>
          </li>
          <li onClick={handleMerchant}>
            <AiOutlineUser />
            <span className={show ? 'show' : 'hidden'}>Merchants</span>
          </li>
          <li onClick={handleCustomers}>
            <AiOutlineUser />
            <span className={show ? 'show' : 'hidden'}>Customers</span>
          </li>
          <li onClick={handleCharts}>
            <BsChatSquare />
            <span className={show ? 'show' : 'hidden'}>Chats</span>
          </li>
          <li onClick={handleOrders}>
            <BsBorderStyle />
            <span className={show ? 'show' : 'hidden'}>Orders</span>
          </li>
        </div>
        <hr />
        <div className="settings">
          <p>
            <GiSettingsKnobs />
            <span className={show ? 'show' : 'hidden'}>settings</span>
          </p>
        </div>
        <div className="togleSidebar">
          <p>
            <BsLayoutSidebarInset />
            <span className={show ? 'show' : 'hidden'}>Toggle sidebar</span>
          </p>
        </div>
      </div>
      <Filter />
      <div className="">
        <div className="">
          {loading ? (
            <div className="loading-div">
              <p className="leading-text">Loading...</p>
            </div>
          ) : viewProducts}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ViewSearchResults;
