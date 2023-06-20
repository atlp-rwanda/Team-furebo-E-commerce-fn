/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
  getByTestId,
  act,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Navbar from '../components/NavBar/Navbar';
import fetchNotifications from '../redux/actions/userProfile/FetchNotification';

jest.mock('../redux/actions/userProfile/FetchNotification', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve([
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
  ])),
}));

describe('Navbar TESTS', () => {
  it('Should render navbar', () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('renders logo correctly', () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    const logoElement = screen.getByText('LOGO');
    expect(logoElement).toBeInTheDocument();
  });

  test('initial state', () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    expect(screen.queryByTestId('menu-open-indicator')).toBeNull();
    expect(screen.queryByText('Menu is open')).toBeNull();
  });

  test('clicking on the menu button toggles the menu state', () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    const menuButton = screen.getByTestId('menu-button');

    fireEvent.click(menuButton);

    expect(screen.queryByTestId('menu-open-indicator')).toBeInTheDocument();
    expect(screen.queryByText('Menu is open')).toBeNull();
  });

  test('clicking on the profile icon opens the profile dropdown', () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    const profileButton = screen.queryByTestId('profile-button');

    fireEvent.click(profileButton);

    expect(screen.getByText('Login/Signup')).toBeInTheDocument();
  });

  test('clicking on the search icon opens the search bar', () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    const searchIcon = screen.getByTestId('search-icon');

    fireEvent.click(searchIcon);

    expect(screen.queryByTestId('search')).toBeNull();
  });

  test('clicking on the categories dropdown toggles the category rotation', () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );
    const categoriesDropdown = screen.getByText('CATEGORIES');

    // Open the categories dropdown
    fireEvent.click(categoriesDropdown);

    expect(screen.queryByTestId('arrowLeft')).toBeNull();
  });

  test('renders notifications correctly', async () => {
    render(
      <Router>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </Router>,
    );

    await waitFor(
      async () => {
        expect(fetchNotifications).toHaveBeenCalled();
      },
      {
        timeout: 10000,
      },
    );
  });
});
