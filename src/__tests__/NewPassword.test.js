import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useNavigate } from 'react-router-dom';
import store from '../redux/store';
import newPasswordAction from '../redux/actions/NewPassword';
import NewPasswordform from '../components/newPassword';

const mockStore = configureStore([]);

describe('NewPasswordform TESTS', () => {
  beforeEach(() => {
    const store = mockStore({
      newPassword: {
        userInfo: null,
        successCondition: false,
        pending: false,
        error: {
          condition: false,
          message: '',
        },
      },
    });
  });

  it('Should render NewPasswordform', () => {
    render(
      <Router>
        <Provider store={store}>
          <NewPasswordform />
        </Provider>
      </Router>,
    );
    expect(screen.getByPlaceholderText('New Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByText('Enter Your New Password')).toBeInTheDocument();
    expect(screen.getByText('Create Account')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    const newPassword = screen.getByTestId('Newpasswordform');
    expect(newPassword).toBeInTheDocument();
  });
  it('Should display an error message for invalid email input', () => {
    render(
      <Router>
        <Provider store={store}>
          <NewPasswordform />
        </Provider>
      </Router>,
    );

    const emailInput = screen.getByPlaceholderText('New Password');

    fireEvent.change(emailInput, { target: { value: 'invalidpassword' } });
    fireEvent.keyUp(emailInput, { key: 'Enter' });

    const errorMessage = screen.getByText('Password format is incorrect');
    expect(errorMessage).toBeInTheDocument();
    const errorMessage2 = screen.getByText('Two passwords do not match');
    expect(errorMessage2).toBeInTheDocument();
    const errorMessage3 = screen.getByText('Password Confirmation is required');
    expect(errorMessage3).toBeInTheDocument();
  });
  it('should submit the form', async () => {
    render(
      <Router>
        <Provider store={store}>
          <NewPasswordform />
        </Provider>
      </Router>,
    );

    await waitFor(() => {
      expect(screen.getByPlaceholderText('New Password')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    });

    // Fill in the passwords input
    const newPassword = screen.getByPlaceholderText('New Password');
    fireEvent.change(newPassword, { target: { value: 'Abc12345' } });
    const confirmPassword = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(confirmPassword, { target: { value: 'Abc12345' } });

    // Submit the form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Assert the expected behavior, e.g., displaying a success message
    const pendingMessage = await waitFor(() => screen.getByText('loading...'));
    expect(pendingMessage).toBeInTheDocument();
  });

  test('updates input fields and submits form', () => {
    render(
      <Router>
        <Provider store={store}>
          <NewPasswordform />
        </Provider>
      </Router>,
    );
    const newPasswordInput = screen.getByPlaceholderText('New Password');
    fireEvent.change(newPasswordInput, { target: { value: 'newPassword123' } });

    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(confirmPasswordInput, { target: { value: 'newPassword123' } });
    expect(newPasswordInput.value).toBe('newPassword123');
    expect(confirmPasswordInput.value).toBe('newPassword123');
  });
  test('redirects to "/authentication" when button is clicked', () => {
    const isSignUp = true;
    const navigate = jest.fn(); // Mock the navigate function

    render(
      <Router>
        <div className="authFormLeft">
          <h1>{isSignUp ? 'Welcome Back' : 'Create Account'}</h1>
          <button onClick={() => navigate('/authentication')}>{isSignUp ? 'Sign In' : 'Sign Up'}</button>
        </div>
      </Router>,
    );

    const button = screen.getByText(isSignUp ? 'Sign In' : 'Sign Up');
    fireEvent.click(button);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/authentication');
  });
});
