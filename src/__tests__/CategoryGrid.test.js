import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getRecommandedProducts } from '../redux/actions/fetchRecom';
import CategoryGrid from '../components/CategoryNavBar/CategoryGrid';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/actions/fetchRecom', () => ({
  getRecommandedProducts: jest.fn(),
}));

describe('CategoryGrid', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      recomProduct: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ],
    });
    getRecommandedProducts.mockResolvedValue([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the loading state', () => {
    useSelector.mockReturnValue({ recomProduct: null });
    render(
      <BrowserRouter>
        <CategoryGrid />
      </BrowserRouter>,
    );

    const loadingMessage = screen.getByText('Retrieving Items');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders the empty collection message', async () => {
    useSelector.mockReturnValue({ recomProduct: null });
    render(
      <BrowserRouter>
        <CategoryGrid />
      </BrowserRouter>,
    );

    await waitFor(() => {
      const emptyMessage = screen.getByText('This collection is empty');
      expect(emptyMessage).toBeInTheDocument();
    });
  });

//   it('renders the error message', async () => {
//     const errorMessage = 'An error occurred.';
//     const dispatchMock = jest.fn();
//     getRecommandedProducts.mockRejectedValue(new Error(errorMessage));
//     render(
//       <BrowserRouter>
//         <CategoryGrid />
//       </BrowserRouter>,
//     );
//     await waitFor(() => {
//       expect(getRecommandedProducts).toHaveBeenCalledWith(
//         expect.toBeUndefined(),
//         dispatchMock,
//       );

//       const errorElement = screen.getByText(`Sorry something went wrong with the server:\n\n${errorMessage}`);
//       expect(errorElement).toBeInTheDocument();
//     });
//   });
  it('renders the product cards', async () => {
    render(
      <BrowserRouter>
        <CategoryGrid />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const productCards = screen.getAllByTestId('ProductCardSeller');
      expect(productCards).toHaveLength(2);
      const categoryGrid = screen.getByTestId('CategoryGrid');
      expect(categoryGrid).toBeInTheDocument();
    });
  });
});
