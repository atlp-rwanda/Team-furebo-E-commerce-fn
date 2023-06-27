/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate, useParams } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import configureStore from 'redux-mock-store';
import store from '../redux/store';
import newPasswordAction from '../redux/actions/NewPassword';
import NewPasswordform from '../components/newPassword';

const mockStore = configureStore([]);

// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
// }));

// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(),
//   useParams: jest.fn(),
// }));

// jest.mock('react-toastify', () => ({
//   toast: {
//     error: jest.fn(),
//     success: jest.fn(),
//   },
// }));

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
  // let dispatch;
  // let navigate;
  // let params;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   navigate = jest.fn();
  //   params = { id: '1' };

  //   useDispatch.mockReturnValue(dispatch);
  //   useNavigate.mockReturnValue(navigate);
  //   useParams.mockReturnValue(params);
  // });

  it('Should render NewPasswordform', () => {
    render(
      <Router>
        <Provider store={store}>
          <NewPasswordform />
        </Provider>
      </Router>
    );
    const newPassword = screen.getByTestId('Newpasswordform');
    expect(newPassword).toBeInTheDocument();
    expect(screen.getByPlaceholderText('New Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByText('Enter Your New Password')).toBeInTheDocument();
    expect(screen.getByText('Create Account')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  it('Should display an error message for invalid email input', () => {
    render(
      <Router>
        <Provider store={store}>
          <NewPasswordform />
        </Provider>
      </Router>
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

  test('updates input fields and submits form', () => {
    render(
      <Router>
        <Provider store={store}>
          <NewPasswordform />
        </Provider>
      </Router>
    );
    const newPasswordInput = screen.getByPlaceholderText('New Password');
    fireEvent.change(newPasswordInput, { target: { value: 'newPassword123' } });

    const confirmPasswordInput =
      screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'newPassword123' },
    });
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
          <button onClick={() => navigate('/authentication')} data-testid="logInNBtn">
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </Router>
    );

    const button = screen.getByTestId('logInNBtn');
    fireEvent.click(button);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/authentication');
  });
});
