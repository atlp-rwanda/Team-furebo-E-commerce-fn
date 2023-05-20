import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import AuthForm from '../components/AuthForm';

// describe('AuthForm TESTS', () => {
//   it('Should render AuthForm', () => {
//     render(
//       <Router>
//         <Provider store={store}>
//           <AuthForm />
//         </Provider>
//       </Router>,
//     );
//     const authForm = screen.getByTestId('AuthForm');
//     expect(authForm).toBeInTheDocument();
//   });
// });
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
test('renders AuthForm correctly', () => {
  // Mock the useSelector hook
  useSelector.mockReturnValue({
    successCondition: false,
    userInfo: {},
    error: {},
    pending: false,
  });

  const { getByTestId } = render(<AuthForm />);

  const authFormElement = getByTestId('AuthForm');
  expect(authFormElement).toBeInTheDocument();
});

test('switches between Sign Up and Sign In forms when button is clicked', () => {
  // Mock the useSelector hook
  useSelector.mockReturnValue({
    successCondition: false,
    userInfo: {},
    error: {},
    pending: false,
  });

  const { getByText } = render(<AuthForm />);

  const switchButton = getByText(/Sign Up/i);
  fireEvent.click(switchButton);

  const signInButton = getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();
});

// Write more test cases to cover other functionalities and scenarios of the component
test('renders AuthForm correctly', () => {
  // Mock the useSelector hook
  useSelector.mockReturnValue({
    successCondition: false,
    userInfo: {},
    error: {},
    pending: false,
  });

  const { getByTestId } = render(<AuthForm />);

  const authFormElement = getByTestId('AuthForm');
  expect(authFormElement).toBeInTheDocument();
});

test('switches between Sign Up and Sign In forms when button is clicked', () => {
  // Mock the useSelector hook
  useSelector.mockReturnValue({
    successCondition: false,
    userInfo: {},
    error: {},
    pending: false,
  });

  const { getByText } = render(<AuthForm />);

  const switchButton = getByText(/Sign Up/i);
  fireEvent.click(switchButton);

  const signInButton = getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();
});
