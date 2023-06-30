/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import DashBoard from '../pages/DashBoard';

describe('DashBoard TESTS', () => {
  it('Should render DashBoard', () => {
    render(
      <Router>
        <Provider store={store}>
          <DashBoard />
        </Provider>
      </Router>
    );
    const dashBoard = screen.getByTestId('DashBoard');
    expect(dashBoard).toBeInTheDocument();
  });

  // test('should handle click events and change the active menu', () => {
  //   const { getByText, queryByText } = render(
  //     <Router>
  //       <Provider store={store}>
  //         <DashBoard />
  //       </Provider>
  //     </Router>,
  //   );
  //   const dashboardMenu = getByText('DashBoard');
  //   const usersMenu = getByText('Users', { exact: false });
  //   const merchantMenu = getByText('Merchants');
  //   const customersMenu = getByText('Customers');
  //   const chartsMenu = getByText('Chats');
  //   const ordersMenu = getByText('Orders');

  //   fireEvent.click(usersMenu);

  //   expect(queryByText('DashBoard')).toBeInTheDocument();
  //   expect(queryByText('Merchants')).toBeInTheDocument();
  //   expect(queryByText('Customers')).toBeInTheDocument();
  //   expect(queryByText('Chats')).toBeInTheDocument();
  //   expect(queryByText('Orders')).toBeInTheDocument();

  //   fireEvent.click(dashboardMenu);
  //   expect(queryByText('DashBoard')).toBeInTheDocument();
  //   expect(queryByText('Merchants')).toBeInTheDocument();
  //   expect(queryByText('Customers')).toBeInTheDocument();
  //   expect(queryByText('Chats')).toBeInTheDocument();
  //   expect(queryByText('Orders')).toBeInTheDocument();

  //   fireEvent.click(merchantMenu);
  //   expect(queryByText('DashBoard')).toBeInTheDocument();
  //   expect(queryByText('Merchants')).toBeInTheDocument();
  //   expect(queryByText('Customers')).toBeInTheDocument();
  //   expect(queryByText('Chats')).toBeInTheDocument();
  //   expect(queryByText('Orders')).toBeInTheDocument();

  //   fireEvent.click(customersMenu);
  //   expect(queryByText('DashBoard')).toBeInTheDocument();
  //   expect(queryByText('Merchants')).toBeInTheDocument();
  //   expect(queryByText('Chats')).toBeInTheDocument();
  //   expect(queryByText('Orders')).toBeInTheDocument();

  //   fireEvent.click(chartsMenu);
  //   expect(queryByText('DashBoard')).toBeInTheDocument();
  //   expect(queryByText('Merchants')).toBeInTheDocument();
  //   expect(queryByText('Chats')).toBeInTheDocument();
  //   expect(queryByText('Orders')).toBeInTheDocument();

  //   fireEvent.click(ordersMenu);
  //   expect(queryByText('DashBoard')).toBeInTheDocument();
  //   expect(queryByText('Merchants')).toBeInTheDocument();
  //   expect(queryByText('Chats')).toBeInTheDocument();
  // });
});
