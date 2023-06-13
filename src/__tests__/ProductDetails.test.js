/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import ProductDetails from '../pages/ProductDetails';

describe('productDetails TESTS', () => {
  it('Should render productDetails', () => {
    render(
      <Router>
        <Provider store={store}>
          <ProductDetails />
        </Provider>
      </Router>,
    );
    const productDetails = screen.getByTestId('product-detals');
    expect(productDetails).toBeInTheDocument();
  });
});
