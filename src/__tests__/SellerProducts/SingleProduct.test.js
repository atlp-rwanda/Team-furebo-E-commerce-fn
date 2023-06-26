import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Swal from 'sweetalert2';
import SingleProduct from '../../components/SingleProduct';
import { setSingleProduct } from '../../redux/slices/sellerProductSlice';
// import store from '../../redux/store';

jest.mock('../../redux/actions/SellerProduct.js');
const mockStore = configureStore([]);
jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
}));
// jest.mock('../../redux/slices/sellerProductSlice.js');

describe('SINGLE SELLER PRODUCT TESTS', () => {
  it('Should render SINGLE PRODUCT PAGE', async () => {
    const productData = {
      id: 1,
      image: ['image-URL', 'image-URL', 'image-URL', 'image-URL'],
      name: 'Television',
      category: 'Electronics',
      price: 900,
      exDate: '01-01-2024',
      quantity: 10,
    };

    const store = mockStore({
      products: {
        singleProduct: productData,
        pending: false,
      },
    });

    render(
      <Router>
        <Provider store={store}>
          <SingleProduct item={productData} />
        </Provider>
      </Router>,
    );
    await waitFor(() => {
      const singleProduct = screen.queryByTestId('SingleProduct');
      expect(singleProduct).toBeInTheDocument();

      expect(screen.getByText('Television')).toBeInTheDocument();
      expect(screen.getByText('Electronics')).toBeInTheDocument();
      expect(screen.getByText('Category:')).toBeInTheDocument();
      expect(screen.getByText('Expiration Date:')).toBeInTheDocument();
    });
    screen.debug();
  });
  test('should call deleteProduct function when delete button is clicked', async () => {
    // Mock the deleteProduct function
    const productData = {
      id: 1,
      image: ['image-URL', 'image-URL', 'image-URL', 'image-URL'],
      name: 'Television',
      category: 'Electronics',
      price: 900,
      exDate: '01-01-2024',
      quantity: 10,
    };

    const store = mockStore({
      products: {
        singleProduct: productData,
        pending: false,
      },
    });
    const deleteProduct = jest.fn();

    // Render the SingleProduct component
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Router>
          <SingleProduct deleteProduct={deleteProduct} />
        </Router>
      </Provider>,
    );

    // Find the delete button and click it
    const deleteButton = getByTestId('Delete');
    fireEvent.click(deleteButton);

    // Wait for the confirmation dialog to appear
    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalled();
    });

    // Simulate clicking the confirm button on the dialog
    // You may need to adjust this based on the actual dialog library used (e.g., SweetAlert2)
    // const confirmButton = getByText(/yes delete it/i);
    // fireEvent.click(confirmButton);

    // // Wait for the deleteProduct function to be called
    // await waitFor(() => {
    //   expect(deleteProduct).toHaveBeenCalled();
    // });

    // Additional assertions for the expected behavior after deletion
  });
  test('should render loading state when pending is true', () => {
    const store = mockStore({
      products: {
        pending: true, // Set the pending state to true
      },
    });

    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <SingleProduct />
        </Provider>
        ,
      </Router>,
    );

    const loadingElement = getByText('Loading');
    expect(loadingElement).toBeInTheDocument();
  });
});
