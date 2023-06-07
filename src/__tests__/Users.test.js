/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Users from '../components/AdminRegister/Users';

describe('Users TESTS', () => {
  it('Should render Users', () => {
    render(
      <Router>
        <Provider store={store}>
          <Users />
        </Provider>
      </Router>
    );
    const users = screen.getByTestId('Users');
    expect(users).toBeInTheDocument();
  });
});
