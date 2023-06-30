import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import ViewBuyersOrders from '../../components/TrackOrders/buyerOrders';
import { BuyersOrders, SearchOrderStatus } from '../../redux/actions/trackOrders/orderStatus';

// Mock the Redux actions
jest.mock('../../redux/actions/trackOrders/orderStatus', () => ({
  BuyersOrders: jest.fn().mockResolvedValue({
    data: {
      orders: [
        {
          id: 1,
          createdAt: '2023-06-30',
          products: [],
          totalPrice: 100,
          status: 'Pending',
        },
      ],
    },
  }),
  SearchOrderStatus: jest.fn().mockResolvedValue({
    data: {
      id: 1,
      createdAt: '2023-06-30',
      products: [],
      totalPrice: 100,
      status: 'Delivered',
    },
  }),
}));

describe('ViewBuyersOrders', () => {
  test('should render the order history page with orders', async () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <ViewBuyersOrders />
        </Provider>
      </Router>,
    );

    // Wait for the orders to be loaded
    await waitFor(() => getByText('Order History'));

    expect(getByText('Order History')).toBeInTheDocument();
    expect(getByText('ORDER ID')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Items')).toBeInTheDocument();
    expect(getByText('Total amount')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Action')).toBeInTheDocument();
    expect(getByText('View Details')).toBeInTheDocument();
  });

//   test('should search and display the found order', async () => {
//     const { getByText, getByPlaceholderText } = render(
//       <Router>
//         <Provider store={store}>
//           <ViewBuyersOrders />
//         </Provider>
//       </Router>,
//     );

//     // Wait for the orders to be loaded
//     await waitFor(() => getByText('Order History'));

//     const searchInput = getByPlaceholderText('search order by id');
//     const searchButton = getByText('Search');

//     // Type the order ID in the search input
//     fireEvent.change(searchInput, { target: { value: '123' } });

//     // Click the search button
//     fireEvent.click(searchButton);

//     // Wait for the search result to be displayed
//     await waitFor(() => getByText('View Details'));

//     expect(getByText('Order History')).toBeInTheDocument();
//     expect(getByText('ORDER ID')).toBeInTheDocument();
//     expect(getByText('Date')).toBeInTheDocument();
//     expect(getByText('Items')).toBeInTheDocument();
//     expect(getByText('Total amount')).toBeInTheDocument();
//     expect(getByText('Status')).toBeInTheDocument();
//     expect(getByText('Action')).toBeInTheDocument();
//     expect(getByText('View Details')).toBeInTheDocument();
//   });
});
