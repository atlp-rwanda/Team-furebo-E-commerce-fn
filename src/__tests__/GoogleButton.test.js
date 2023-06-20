import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import GoogleButton from '../components/shared/GoogleButton';

describe('GoogleButton tests', () => {
  it('Should render the google button', () => {
    render(
      <Router>
        <Provider store={store}>
          <GoogleButton />
        </Provider>
      </Router>
    );
    const googleButton = screen.getByTestId('googleButton');
    expect(googleButton).toBeInTheDocument();
  });
});
