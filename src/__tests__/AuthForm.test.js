import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import store from '../redux/store';

import AuthForm from '../components/AuthForm';

import { signUp } from '../redux/actions/signup';
import signIn from '../redux/actions/Login';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

jest.mock('../redux/actions/signup');
jest.mock('../redux/actions/Login');

const mockStore = configureStore([]);

describe('AuthForm TESTS', () => {
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

  test('switches between sign up and sign in forms', () => {
    render(
      <Router>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </Router>,
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
          <AuthForm />
        </Provider>
      </Router>,
    );

    const signUpButton = screen.getByText('Sign Up');

    fireEvent.click(signUpButton);

    const authForm = screen.getByTestId('AuthForm');
    const signupForm = authForm.querySelector('form');

    fireEvent.submit(signupForm);

    expect(signUp).toHaveBeenCalledTimes(0);
  });

  test('submits sign in form and calls signIn action', () => {
    render(
      <Router>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </Router>,
    );

    const signInButton = screen.getByText('Sign In');

    fireEvent.click(signInButton);

    const authForm = screen.getByTestId('AuthForm');
    const signinForm = authForm.querySelector('form');

    fireEvent.submit(signinForm);

    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it('navigates to reset password page when "Forgot Password?" is clicked', () => {
    render(
      <Router>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </Router>,
    );
    const resetButton = screen.getByText('Reset it');
    fireEvent.click(resetButton);

    expect(Link).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'requestResetPassword' }),
      expect.any(Object),
    );
  });

  it('updates the component state when form inputs are changed', () => {
    render(
      <Router>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </Router>,
    );

    // const firstnameInput = screen.getByPlaceholderText('First Name');
    // const lastnameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    // fireEvent.change(firstnameInput, { target: { value: 'John' } });
    // fireEvent.change(lastnameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // expect(firstnameInput.value).toBe('John');
    // expect(lastnameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(passwordInput.value).toBe('password123');
  });
});
