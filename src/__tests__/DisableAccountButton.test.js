import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';

import DisableAccountButton from '../components/AdminRegister/DisableAccountButton';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('DisableAccountButton', () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
  });

  it('renders without errors', () => {
    useSelector.mockReturnValue({
      successCondition: false,
      userStatus: {},
      error: {},
      pending: false,
    });

    render(<DisableAccountButton />);
  });

  it('disables the account on button click', () => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      successCondition: false,
      userStatus: {},
      error: {},
      pending: false,
    });

    const { getByText } = render(<DisableAccountButton />);
    const disableAccountButton = getByText('Disable Account');
    fireEvent.click(disableAccountButton);
  });
});
