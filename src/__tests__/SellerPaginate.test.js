import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import SellerPaginate from '../components/SellerPagination';
import { getSellersProducts } from '../redux/actions/SellerProduct';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../redux/actions/SellerProduct', () => ({
  getSellersProducts: jest.fn(),
}));

describe('SellerPaginate', () => {
  let mockSetSellerProducts;
  let mockSetTotalItems;

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useNavigate.mockReturnValue(jest.fn());
    mockSetSellerProducts = jest.fn();
    mockSetTotalItems = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    render(
      <SellerPaginate
        page={1}
        size={8}
        setSellerProducts={mockSetSellerProducts}
        setTotalItems={mockSetTotalItems}
        data-testid="paginate-component"
      />,
    );

    const paginateBtnPrv = screen.getByLabelText(/previous page/i);
    expect(paginateBtnPrv).toBeInTheDocument();
    const paginateBtnNxt = screen.getByLabelText(/next page/i);
    expect(paginateBtnNxt).toBeInTheDocument();
    const paginateNum = screen.getByText('1');
    expect(paginateNum).toBeInTheDocument();
  });

//   it('fetches seller products on page change', () => {
//     const mockDispatch = jest.fn();
//     useDispatch.mockReturnValue(mockDispatch);

//     render(
//       <SellerPaginate
//         page={1}
//         size={8}
//         setSellerProducts={mockSetSellerProducts}
//         setTotalItems={mockSetTotalItems}
//         data-testid="paginate-component"
//       />,
//     );

//     const pageChangeEvent = { selected: 2 };
//     const expectedPage = 3;

//     const paginateComponent = screen.getByTestId('paginate-component');
//     paginateComponent.props.onPageChange(pageChangeEvent);

//     expect(mockDispatch).toHaveBeenCalledTimes(1);
//     expect(getSellersProducts).toHaveBeenCalledWith(expectedPage, 8, mockDispatch);
//   });

//   it('navigates to Authentication when token is not present', () => {
//     localStorage.removeItem('token');
//     const mockNavigate = jest.fn();
//     useNavigate.mockReturnValue(mockNavigate);

//     render(
//       <SellerPaginate
//         page={1}
//         size={8}
//         setSellerProducts={mockSetSellerProducts}
//         setTotalItems={mockSetTotalItems}
//       />,
//     );

//     const accessDeniedMessage = screen.getByText('Access Denied');
//     expect(accessDeniedMessage).toBeInTheDocument();
//     expect(mockNavigate).toHaveBeenCalledWith('/Authentication');
//   });
});
