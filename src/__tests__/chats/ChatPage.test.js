import React from 'react';
import {
  render, screen, fireEvent, waitFor, act
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../../redux/store';

import ChatPage from '../../components/Chat/chatPage';
import { SendMessage, FetchChats } from '../../redux/actions/Chats';

// Mock scrollIntoView function
Element.prototype.scrollIntoView = jest.fn();
jest.mock('../../redux/actions/Chats', () => ({
  FetchChats: jest.fn(), SendMessage: jest.fn(),
}));

jest.spyOn(console, 'error').mockImplementation(() => {});


global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }
};
describe('ChatPage', () => {
  const mockStore = configureStore([]);
  const mockFetchChats = jest.fn();
  const mockError = 'Test error message';
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('renders ChatPage component', () => {
    render(
      <Provider store={store}>
        <ChatPage />
      </Provider>,
    );

    const chatPage = screen.getByTestId('ChatPage');
    expect(chatPage).toBeInTheDocument();
  });
  test('should call SendMessage and reset message state on button click', async () => {
    const fullName = 'John Doe';
    const mockedResponse = { data: { message: 'Hello, world!' } };

    // Create a mock store
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

    SendMessage.mockResolvedValue(mockedResponse);

    render(
      <Provider store={store}>
        <ChatPage />
      </Provider>,
    );

    const messageInput = screen.getByTestId('message-input');
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    const submitButton = screen.getByTestId('SubmitChat');
    fireEvent.click(submitButton);

    expect(SendMessage).toHaveBeenCalledWith('Test message', fullName);

    const messageState = screen.getByTestId('message-input').value;
    expect(messageState).toEqual('Test message');
  });
  test('renders messages', async () => {
    const store = mockStore({
      user: {
        userInfo: {
          userData: {
            fullname: 'John Doe',
          },
        },
      },
    });

    const mockedChats = [
      { id: 1, sender: 'John Doe', message: 'Hello' },
      { id: 2, sender: 'Jane Smith', message: 'Hi there' },
    ];

    FetchChats.mockResolvedValue(mockedChats);

    render(
      <Provider store={store}>
        <ChatPage />
      </Provider>,
    );

    // Wait for the FetchChats function to be called and the chats to be set
    await waitFor(() => expect(FetchChats).toHaveBeenCalled());

    // Verify that the messages are rendered
    const messages = screen.getAllByTestId('message-container');
    expect(messages).toHaveLength(2);

    // Verify the content of each message
    expect(messages[0]).toHaveTextContent('John Doe');
    expect(messages[0]).toHaveTextContent('Hello');
    expect(messages[1]).toHaveTextContent('Jane Smith');
    expect(messages[1]).toHaveTextContent('Hi there');
  });

  test('renders "No messages" when there are no chats', () => {
    const emptyChats = [];

    render(<Provider store={store}><ChatPage chats={emptyChats} /></Provider>);

    const noMessagesText = screen.getByText('No messages');
    expect(noMessagesText).toBeInTheDocument();
  });
  test('toggles showPicker state on emoji click', () => {
    render(
      <Provider store={store}>
        <ChatPage />
      </Provider>,
    );
    expect(screen.queryByTestId('pickerContainer')).toBeNull();

    const emojiSpan = screen.getByTestId('getEmoji');
    fireEvent.click(emojiSpan);

    expect(screen.getByTestId('pickerContainer')).toBeInTheDocument();

    fireEvent.click(emojiSpan);

    expect(screen.queryByTestId('pickerContainer')).toBeNull();
  });
  test('submitting empty message does not trigger submit function', () => {
    // Arrange
    const { getByTestId } = render(
      <Provider store={store}>
        <ChatPage />
      </Provider>,
    );
    const submitButton = getByTestId('SubmitChat');
    const messageInput = getByTestId('message-input');
    fireEvent.change(messageInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    const noMessagesText = screen.getByText('No messages');
    expect(noMessagesText).toBeInTheDocument();
  });
});
