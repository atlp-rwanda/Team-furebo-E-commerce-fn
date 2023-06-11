import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import ProductPage from '../pages/ProductPage';

describe('Auth TESTS', () => {
  it('Should render Auth', () => {
    render(
      <Router>
        <Provider store={store}>
          <ProductPage />
        </Provider>
      </Router>,
    );
    const auth = screen.getByTestId('product-card');
    expect(auth).toBeInTheDocument();
  });
});
