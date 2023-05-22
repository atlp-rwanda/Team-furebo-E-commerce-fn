import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Navbar from '../components/Navbar';

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
});
