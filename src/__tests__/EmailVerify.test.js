/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EmailVerify from '../components/EmailVerify';
import { VerifyEmail } from '../redux/actions/signup';

jest.mock('../redux/actions/signup', () => ({
  VerifyEmail: jest.fn(),
}));

const mockStore = configureStore([]);

describe('EmailVerify', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        pending: false,
      },
    });
  });
  it('should render loading message when URL is not valid', () => {
    const mockParams = { token: 'invalidToken' };
    VerifyEmail.mockImplementationOnce((setValidUrl, params, dispatch) => {
      setValidUrl(false);
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/email-verify/${mockParams.token}`]}>
          <EmailVerify />
        </MemoryRouter>
      </Provider>,
    );

    const loadingMessage = screen.getByText('404 Not Found');

    expect(loadingMessage).toBeInTheDocument();
  });

  it('should render "404 Not Found" message when URL is not valid and not pending', () => {
    const mockParams = { token: 'invalidToken' };
    VerifyEmail.mockImplementationOnce((setValidUrl, params, dispatch) => {
      setValidUrl(false);
    });

    store = mockStore({
      user: {
        pending: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/email-verify/${mockParams.token}`]}>
          <EmailVerify />
        </MemoryRouter>
      </Provider>,
    );

    const notFoundMessage = screen.getByText('404 Not Found');

    expect(notFoundMessage).toBeInTheDocument();
  });
});
