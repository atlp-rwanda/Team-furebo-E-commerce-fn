/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewCartItemsPage from '../../pages/Cart/ViewCartItemsPage';
import FetchCartItemsAction from '../../redux/actions/Cart/FetchCartItemsAction';

jest.mock('../../redux/actions/Cart/FetchCartItemsAction');
jest.mock('../../redux/actions/Cart/deleteCartItemAction');
jest.mock('../../redux/actions/Cart/updateCartItemAction');
jest.mock('../../redux/actions/Cart/clearCartAction');

describe('ViewCartItemsPage', () => {
  beforeEach(() => {
    FetchCartItemsAction.mockResolvedValue([
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        quantity: 2,
        image:
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
        quantity: 3,
        image:
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      },
    ]);
  });
  it('should display cart items and allow interactions', async () => {
    render(
      <Router>
        <ViewCartItemsPage />
      </Router>
    );

    // Wait for cart items to load
    await waitFor(() => screen.getByTestId('view-cart-page-id'));

    // Assert that cart items are displayed
    expect(screen.getByTestId('cart-items-id')).toBeInTheDocument();

    // Simulate interactions
    const deleteButton = screen.getAllByTestId('btn-delete-id')[0];
    fireEvent.click(deleteButton);

    // Add more assertions as needed
  });

  it('should display an empty cart message', async () => {
    FetchCartItemsAction.mockResolvedValue([]);

    render(
      <Router>
        <ViewCartItemsPage />
      </Router>
    );

    // Wait for cart items to load
    await waitFor(() => screen.getByTestId('view-cart-page-id'));

    // Assert that empty cart message is displayed
    expect(screen.queryByTestId('cart-items-id')).not.toBeInTheDocument();
    expect(screen.getByTestId('empty-cart-message-id')).toBeInTheDocument();
  });
});
