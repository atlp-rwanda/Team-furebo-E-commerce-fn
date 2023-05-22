import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import AuthForm from '../components/AuthForm';

describe('AuthForm TESTS', () => {
  it('Should render AuthForm', () => {
    render(
      <Router>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </Router>,
    );
    const authForm = screen.getByTestId('AuthForm');
    expect(authForm).toBeInTheDocument();
  });
});
