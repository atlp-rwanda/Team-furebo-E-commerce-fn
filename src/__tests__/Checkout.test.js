import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Checkout from '../pages/Checkout';

describe('Checkout TESTS', () => {
  it('Should render Checkout', () => {
    render(
      <Router>
        <Provider store={store}>
          <Checkout />
        </Provider>
      </Router>
    );
    const checkout = screen.getByTestId('checkout');
    expect(checkout).toBeInTheDocument();
  });
});
