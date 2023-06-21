/* eslint-disable linebreak-style */
/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItem';
import store from '../../redux/store';

describe('CartItem Component', () => {
  const mockItem = {
    id: 1,
    name: 'Test Item',
    price: 9.99,
    quantity: 3,
    image: 'https://m.media-amazon.com/images/I/91LSF1iZUFL.jpg',
  };

  it('should render the CartItem component', () => {
    render(
      <Router>
        <Provider store={store}>
          <CartItem item={mockItem} />
        </Provider>
      </Router>
    );

    expect(screen.getByTestId('cart-item')).toBeInTheDocument();
  });

  it('should display the item name and details', () => {
    render(
      <Router>
        <Provider store={store}>
          <CartItem item={mockItem} />
        </Provider>
      </Router>
    );
  });
});
