import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Auth from '../pages/Auth';

describe('Auth TESTS', () => {
  it('Should render Auth', () => {
    render(
      <Router>
        <Provider store={store}>
          <Auth />
        </Provider>
      </Router>
    );
    const auth = screen.getByTestId('Auth');
    expect(auth).toBeInTheDocument();
  });
});
