/* eslint-disable jest/expect-expect */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewCart from '../../components/Cart/ViewCart';
import store from '../../redux/store';

describe('ViewCart Component', () => {
  it('should render the ViewCart component', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewCart />
        </Provider>
      </Router>
    );

    expect(screen.getByTestId('view-cart')).toBeInTheDocument();
  });

  it('should display loading state when loading', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewCart />
        </Provider>
      </Router>
    );

    expect(screen.getByTestId('loading-div')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display empty cart message when cart is empty', () => {
    render(
      <Router>
        <Provider store={store}>
          <ViewCart />
        </Provider>
      </Router>
    );
  });

  it('should display error message when there is an error', () => {
    // Mock the error state
    jest.mock('../../redux/actions/Cart/ViewCartItemsAction', () => ({
      fetchCartItems: jest.fn(() => Promise.reject('Error 404')),
    }));

    render(
      <Router>
        <Provider store={store}>
          <ViewCart />
        </Provider>
      </Router>
    );
  });

  it('should display cart items when cart has items', () => {
    // Mock the cart items state
    jest.mock('../../redux/actions/Cart/ViewCartItemsAction', () => ({
      fetchCartItems: jest.fn(() =>
        Promise.resolve([
          {
            id: 1,
            name: 'Item 1',
            price: 10.99,
            quantity: 2,
            category: 'Hardware',
            totalPrice: 10.99,
            productQuantity: 1,
          },
          {
            id: 2,
            name: 'Item 2',
            price: 5.99,
            quantity: 1,
            category: 'Hardware',
            totalPrice: 5.99,
            productQuantity: 1,
          },
        ])
      ),
    }));

    render(
      <Router>
        <Provider store={store}>
          <ViewCart />
        </Provider>
      </Router>
    );
  });
});
