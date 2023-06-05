/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ChangePasswordAtTimeGiven from '../../components/UserInfo/ChangePasswordAtTimeGiven';

// Mock Redux store and action
const initialState = {
  changePasswordAtGivenTime: {
    isExpired: false,
  },
};

const mockStore = createStore((state) => state, initialState);

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn(),
}));

jest.mock(
  '../../redux/actions/userProfile/fetchChangePasswordAtGivenTimeAction',
  () => ({
    fetchChangePasswordAtGivenTimeAction: jest.fn(),
  }),
);

describe('ChangePasswordAtTimeGiven component', () => {
  it('renders the component without expiration message', () => {
    render(
      <Provider store={mockStore}>
        <ChangePasswordAtTimeGiven />
      </Provider>,
    );

    expect(screen.queryByTestId('ChangePasswordAtTimeGiven')).toBeNull();
  });
});
