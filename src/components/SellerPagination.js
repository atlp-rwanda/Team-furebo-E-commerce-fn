import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { getSellersProducts } from '../redux/actions/SellerProduct';
import Logo from '../assets/images/our-logo.png';

const SellerPaginate = ({ page, size, setSellerProducts, setTotalItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [numberOfPages, setNumberOfPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      if (page) {
        try {
          const sellerProductsData = await getSellersProducts(page, size, dispatch);
          console.log('paginate', sellerProductsData);
          setSellerProducts(sellerProductsData?.data.items);
          setTotalItems(sellerProductsData?.data.totalItems);
          // dispatch({ type: 'products/updateSellerProducts', payload: sellerProductsData.data.items });
          setNumberOfPages(sellerProductsData?.data.totalPages);
        } catch (error) {
          console.error('Error fetching seller products:', error);
        // Handle error here
        }
      }
    };

    //   setItems(allProducts.items);

    fetchProducts();
  }, [page]);

//   if (!localStorage.getItem('token')) {
//     navigate('/Authentication');
//     return (
//       <div className="justify center text-3xl">
//         Access Denied
//         <span className="animate-bounce">
//           {'  '}
//           ...
//         </span>
//         <img className="logo-image" src={Logo} alt="" width="100px" />
//         <br />
//       </div>
//     );
//   }

  const handlePageClick = (event) => {
    navigate(`/sellerProducts?page=${event.selected + 1}&size=${8}`);
  };

  return (
    <ReactPaginate
      data-testid="paginate-component"
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
      previousClassName="pagination-previous"
      previousLinkClassName="pagination-link"
      nextClassName="pagination-next"
      nextLinkClassName="pagination-link"
      activeClassName="active"
    />
  );
};

export default SellerPaginate;
