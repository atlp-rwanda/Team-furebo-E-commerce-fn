import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import ProductPage from '../pages/ProductPage';

describe('productPage TESTS', () => {
  it('Should render productPage', () => {
    render(
      <Router>
        <Provider store={store}>
          <ProductPage />
        </Provider>
      </Router>,
    );
    const productPage = screen.getByTestId('product-card');
    expect(productPage).toBeInTheDocument();
  });
});
