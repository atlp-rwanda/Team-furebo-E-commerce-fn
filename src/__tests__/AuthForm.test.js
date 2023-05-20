import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import store from '../redux/store';
import AuthForm from '../components/AuthForm';
import { signUp } from '../redux/actions/signup';
import signIn from '../redux/actions/Login';

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
      </Router>
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
          <AuthForm />
        </Provider>
      </Router>
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
      </Router>
    );
    const signInButton = screen.getByText('Sign In');
    fireEvent.click(signInButton);
    const authForm = screen.getByTestId('AuthForm');
    const signinForm = authForm.querySelector('form');
    fireEvent.submit(signinForm);
    expect(signIn).toHaveBeenCalledTimes(1);
  });
  test('should update authData when input values change', () => {
    render(
      <Router>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </Router>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, {
      target: { name: 'email', value: 'johndoe@example.com' },
    });
    fireEvent.change(passwordInput, {
      target: { name: 'password', value: 'password123' },
    });

    expect(emailInput.value).toBe('johndoe@example.com');
    expect(passwordInput.value).toBe('password123');
  });
});
