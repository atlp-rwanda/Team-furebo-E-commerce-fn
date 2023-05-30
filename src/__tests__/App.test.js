import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';

import store from '../redux/store';

jest.mock('../css/navbar/navbar.css', () => {});

describe('App', () => {
  it('renders without errors', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // Check if Navbar component is rendered
    const navbar = screen.getByTestId('App');
    expect(navbar).toBeInTheDocument();
  });
});
