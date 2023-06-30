import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { SearchOrderStatus } from '../../redux/actions/trackOrders/orderStatus';
import OrderDetails from '../../components/TrackOrders/orderDetails';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

// Mock the SearchOrderStatus action
jest.mock('../../redux/actions/trackOrders/orderStatus', () => ({
  SearchOrderStatus: jest.fn().mockResolvedValue({
    data: {
      data: {
        products: [
          { productId: 1, quantity: 2, price: 10 },
          { productId: 2, quantity: 1, price: 15 },
        ],
        paymentMethod: 'Credit Card',
        deliveryAddress: {
          country: 'Country',
          city: 'City',
          street: 'Street',
          zipCode: '12345',
        },
      },
    },
  }),
}));

describe('OrderDetails', () => {
//   test('should render the order details', async () => {
//     useParams.mockReturnValue({ id: '123' });

//     const { getByText } = render(
//       <Router>
//         <OrderDetails />
//       </Router>,
//     );

//     await waitFor(() => getByText('Order Details'));

//     expect(getByText('Order Details')).toBeInTheDocument();
//     expect(getByText('Order items')).toBeInTheDocument();
//     expect(getByText('Payment Method')).toBeInTheDocument();
//     expect(getByText('Delivery Address')).toBeInTheDocument();
//     expect(getByText('1')).toBeInTheDocument();
//     expect(getByText('2')).toBeInTheDocument();
//     expect(getByText('Credit Card')).toBeInTheDocument();
//     expect(getByText('Country')).toBeInTheDocument();
//     expect(getByText('City')).toBeInTheDocument();
//     expect(getByText('Street')).toBeInTheDocument();
//     expect(getByText('12345')).toBeInTheDocument();
//   });

  test('should render "No order items" when there are no products', async () => {
    useParams.mockReturnValue({ id: '123' });
    SearchOrderStatus.mockResolvedValue({
      data: {
        data: {
          products: [],
          paymentMethod: 'Credit Card',
          deliveryAddress: {
            country: 'Country',
            city: 'City',
            street: 'Street',
            zipCode: '12345',
          },
        },
      },
    });

    const { getByText } = render(
      <Router>
        <OrderDetails />
      </Router>,
    );

    await waitFor(() => getByText('Order Details'));

    expect(getByText('Order Details')).toBeInTheDocument();
    expect(getByText('Order items')).toBeInTheDocument();
    expect(getByText('No order items')).toBeInTheDocument();
    expect(getByText('Payment Method')).toBeInTheDocument();
    expect(getByText('Delivery Address')).toBeInTheDocument();
    expect(getByText('Credit Card')).toBeInTheDocument();
    expect(getByText('Country')).toBeInTheDocument();
    expect(getByText('City')).toBeInTheDocument();
    expect(getByText('Street')).toBeInTheDocument();
    expect(getByText('12345')).toBeInTheDocument();
  });
});
