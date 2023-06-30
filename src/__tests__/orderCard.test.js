import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { AllOrders, updateOrderStatus } from '../redux/actions/trackOrders/orderStatus';
import OrderCard from '../components/AdminRegister/OrderCard';

// Mock the AllOrders and updateOrderStatus actions
jest.mock('../redux/actions/trackOrders/orderStatus', () => ({
  AllOrders: jest.fn().mockResolvedValue({
    data: {
      orders: [
        { id: 1, userId: 'user1', status: 'Pending' },
        { id: 2, userId: 'user2', status: 'Paid' },
      ],
    },
  }),
  updateOrderStatus: jest.fn().mockResolvedValue(true),
}));

describe('OrderCard', () => {
  test('should render the order card', async () => {
    const data = { id: 1, userId: 'user1', status: 'Pending' };
    const handleOrders = jest.fn();

    const { getByText, getByTestId } = render(
      <Router>
        <Provider store={store}>
          <OrderCard data={data} handleOrders={handleOrders} />
        </Provider>
      </Router>,
    );

    expect(getByText('User: user1')).toBeInTheDocument();
    expect(getByText('Order: 1')).toBeInTheDocument();
    expect(getByText('status: Pending')).toBeInTheDocument();
    expect(getByTestId('OrderCard')).toBeInTheDocument();
  });

  test('should open the update status popup', async () => {
    const data = { id: 1, userId: 'user1', status: 'Pending' };
    const handleOrders = jest.fn();

    const { getByText, getByTestId } = render(
        <Router>
        <Provider store={store}>
          <OrderCard data={data} handleOrders={handleOrders} />
        </Provider>
      </Router>,
    );

    fireEvent.click(getByText('Update status'));

    await waitFor(() => getByTestId('popUp'));

    expect(getByTestId('popUp')).toBeInTheDocument();
  });

//   test('should update the order status', async () => {
//     const data = { id: 1, userId: 'user1', status: 'Pending' };
//     const handleOrders = jest.fn();

//     const { getByText, getByTestId } = render(
//         <Router>
//         <Provider store={store}>
//           <OrderCard data={data} handleOrders={handleOrders} />
//         </Provider>
//       </Router>,
//     );

//     fireEvent.click(getByText('Update status'));

//     await waitFor(() => getByTestId('popUp'));

//     fireEvent.click(getByText('Update'));

//     await waitFor(() => expect(updateOrderStatus).toHaveBeenCalledTimes(1));
//     expect(handleOrders).toHaveBeenCalledTimes(1);
//     expect(getByText('Update status')).toBeInTheDocument();
//     expect(getByTestId('popUp')).not.toBeInTheDocument();
//   });
});
