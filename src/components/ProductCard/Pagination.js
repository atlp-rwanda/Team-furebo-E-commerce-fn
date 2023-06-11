/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import '../../css/ProductStyles/Products.css';
import { Link, useNavigate } from 'react-router-dom';
import fetchAllProducts from '../../redux/actions/FetchProduct';

const Paginate = ({ page, size, setProducts }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [numberOfPages, setNumberOfPages] = useState(1);
  useEffect(() => {
    const getAllProducts = async () => {
      if (page) {
        const allProducts = await fetchAllProducts(page, size, dispatch);
        setProducts(allProducts?.items);
        setNumberOfPages(allProducts?.totalPages);
      }

    //   setItems(allProducts.items);
    };

    getAllProducts();
  }, [page]);

  const handlePageClick = (event) => {
    navigate(`/products?page=${event.selected + 1}&size=${8}`);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={numberOfPages}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={2}
      containerClassName="pagination"
      pageClassName="pagination-item"
      pageLinkClassName="pagination-link"
      previousClassName="pagination-item"
      previousLinkClassName="pagination-link"
      nextClassName="pagination-item"
      nextLinkClassName="pagination-link"
      activeClassName="active"
    />
  );
};

export default Paginate;
