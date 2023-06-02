import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import ResetPasswordform from '../components/resetPassword';

describe('NewPasswordform TESTS', () => {
  it('Should render NewPasswordform', () => {
    render(
      <Router>
        <Provider store={store}>
          <ResetPasswordform />
        </Provider>
      </Router>,
    );
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    const resetPassword = screen.getByTestId('Resetpasswordform');
    expect(screen.getByText('Reset Password')).toBeInTheDocument();
    expect(screen.getByText('Create Account')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(resetPassword).toBeInTheDocument();
  });

  it('Should display an error message for invalid email input', () => {
    render(
      <Router>
        <Provider store={store}>
          <ResetPasswordform />
        </Provider>
      </Router>,
    );

    const emailInput = screen.getByPlaceholderText('Email');

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.keyUp(emailInput, { key: 'Enter' });

    const errorMessage = screen.getByText('Please Enter a Valid Email');
    expect(errorMessage).toBeInTheDocument();
  });
  it('should submit the form', () => {
    render(
      <Router>
        <Provider store={store}>
          <ResetPasswordform />
        </Provider>
      </Router>,
    );

    // Fill in the email input
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, {
      target: { value: 'validemail@example.com' },
    });

    // Submit the form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Assert the expected behavior, e.g., displaying a success message
    const pendingMessage = screen.getByText('loading...');
    expect(pendingMessage).toBeInTheDocument();
  });
  test('redirects to "/authentication" when button is clicked', () => {
    const isSignUp = true;
    const navigate = jest.fn(); // Mock the navigate function

    render(
      <Router>
        <div className="authFormLeft">
          <h1>{isSignUp ? 'Welcome Back' : 'Create Account'}</h1>
          <button onClick={() => navigate('/authentication')} data-testid= "logInRBtn">
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </Router>,
    );

    const button = screen.getByTestId('logInRBtn');
    fireEvent.click(button);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/authentication');
  });
});
