/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
// import { useDispatch } from 'react-redux';
import '../../css/in-view-page-header.css';

const SearchResultsHeader = ({ hasItems }) => {
  // const dispatch = useDispatch();
  return (
    <>
      <div
        data-testid="in-view-page-search-header"
        className="in-view-page-header"
      >
        <h2>Search Results</h2>
        {/* {hasItems && <ClearWishlistButton />} */}
      </div>
      <hr />
    </>
  );
};

export default SearchResultsHeader;
