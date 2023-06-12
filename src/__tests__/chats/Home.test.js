import React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import HomePage from '../../pages/Home';
global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    observe() {
      return null;
    }
  
    disconnect() {
      return null;
    }
  };

  Element.prototype.scrollIntoView = jest.fn();

describe('Home component', () => {
  afterEach(() => {
    cleanup();
  });

  it('shows chat page', () => {
    const fullName = 'John Doe';
    const mockStore = configureStore([]);
    const store = mockStore({
      user: {
        userInfo: {
          userData: {
            fullname: fullName,
          },
        },
      },
    });

    let getByTestId;
    act(() => {
      ({ getByTestId } = render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      ));
    });
    
    const toggleButtonHide = getByTestId('chat-header');
    act(() => {
      fireEvent.click(toggleButtonHide);
    });
    const toggleButton = getByTestId('chat-header-hide');
    const chatPage = getByTestId('ChatPage');
    expect(chatPage).toBeInTheDocument();

    act(() => {
      fireEvent.click(toggleButton);
    });
    expect(chatPage).not.toBeInTheDocument();
  });
});
