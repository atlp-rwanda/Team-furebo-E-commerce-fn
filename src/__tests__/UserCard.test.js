/* eslint-disable no-unused-vars */
import React from 'react';
// import jest from 'jest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/AdminRegister/UserCard';
import SetRoles from '../redux/actions/SetRoles';
import * as SetRolesModule from '../redux/actions/SetRoles';

// const SetRoles = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../redux/actions/SetRoles', () => ({
  SetRoles: jest.fn(),
}));

jest.mock('../redux/actions/SetRoles', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('UserCard', () => {
  const dispatch = jest.fn();
  const handleUsers = jest.fn();
  const mockedUseNavigate = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue({
      successCondition: true,
      userRole: { message: 'Success' },
      error: { condition: false, message: '' },
      pending: false,
    });
    useNavigate.mockReturnValue(mockedUseNavigate);
    render(<UserCard
      data={{
        id: 1, fullname: 'John Doe', email: 'john@example.com', role: '{ "name": "admin" }',
      }}
      handleUsers={handleUsers}
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render user card with correct details', () => {
    expect(screen.getByTestId('UserCard')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('email: john@example.com')).toBeInTheDocument();
    expect(screen.getByText('role: admin')).toBeInTheDocument();
  });

  it('should show update role popup when "update role" button is clicked', () => {
    fireEvent.click(screen.getByText('update role'));
    expect(screen.getByText('Merchant:')).toBeInTheDocument();
    expect(screen.getByLabelText('Merchant:')).toBeInTheDocument();
    expect(screen.getByLabelText('Customer:')).toBeInTheDocument();
    expect(screen.getByLabelText('Admin:')).toBeInTheDocument();
  });

  it('should update the role when "Update" button is clicked', () => {
    const setRolesMock = SetRolesModule.default;

    fireEvent.click(screen.getByText('update role'));

    fireEvent.click(screen.getByLabelText('Merchant:'));
    fireEvent.click(screen.getByRole('button', { name: /Update/ }));

    expect(setRolesMock).toHaveBeenCalledWith({ role: 'merchant' }, 1, dispatch, handleUsers);
  });
});
