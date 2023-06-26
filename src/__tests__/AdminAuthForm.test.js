import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import store from '../redux/store';

import { signUp } from '../redux/actions/signup';
import signIn from '../redux/actions/Login';
import AdminAuthForm from '../components/AdminRegister/AdminAuthForm';

jest.mock('../redux/actions/signup');
jest.mock('../redux/actions/Login');

const mockStore = configureStore([]);

describe('AdminAuthForm TESTS', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      user: {
        successCondition: false,
        userInfo: null,
        error: {
          condition: false,
          message: '',
        },
        pending: false,
      },
    };

    store = mockStore(initialState);
  });

  it('Should render AdminAuthForm', () => {
    render(
      <Router>
        <Provider store={store}>
          <AdminAuthForm />
        </Provider>
      </Router>,
    );
    const adminAuthForm = screen.getByTestId('AdminAuthForm');
    expect(adminAuthForm).toBeInTheDocument();
  });

  test('switches between sign up and sign in forms', () => {
    render(
      <Router>
        <Provider store={store}>
          <AdminAuthForm />
        </Provider>
      </Router>
    );

    const switchButton = screen.getByText('Sign Up');

    fireEvent.click(switchButton);

    expect(screen.getByText('Sign In')).toBeInTheDocument();

    fireEvent.click(switchButton);

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('submits sign up form and calls signUp action', () => {
    render(
      <Router>
        <Provider store={store}>
          <AdminAuthForm />
        </Provider>
      </Router>
    );

    const signUpButton = screen.getByText('Sign Up');

    fireEvent.click(signUpButton);

    const authForm = screen.getByTestId('AdminAuthForm');
    const signupForm = authForm.querySelector('form');

    fireEvent.submit(signupForm);

    expect(signUp).toHaveBeenCalledTimes(0);
  });

  test('submits sign in form and calls signIn action', () => {
    render(
      <Router>
        <Provider store={store}>
          <AdminAuthForm />
        </Provider>
      </Router>
    );

    const signInButton = screen.getByText('Sign In');

    fireEvent.click(signInButton);

    const authForm = screen.getByTestId('AdminAuthForm');
    const signinForm = authForm.querySelector('form');

    fireEvent.submit(signinForm);

    expect(signIn).toHaveBeenCalledTimes(0);
  });
});
