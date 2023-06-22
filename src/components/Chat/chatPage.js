import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import io from 'socket.io-client';
import Picker from 'emoji-picker-react';
import { toast } from 'react-toastify';
import { FetchChats, SendMessage } from '../../redux/actions/Chats';
import '../../css/chats/chats.css';

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState(null);
  const messagesEndRef = useRef(null);
  const { userInfo } = useSelector((state) => state.user);
  const [showPicker, setShowPicker] = useState(false);
  const fullName = userInfo?.userData.fullname;

  const socket = io.connect('http://127.0.0.1:5002');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const getChats = async () => {
    try {
      const fetchedChats = await FetchChats();
      if (fetchedChats) {
        setChats(fetchedChats);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);
  useEffect(() => {
    if (fullName !== '') {
      socket.on('chat-message', (data) => {
        getChats();
        scrollToBottom();
      });
    }
  }, [fullName]);
  const handleMessageDisplay = (message) => message.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  const handleChange = (e) => {
    const input = e.target;
    input.style.height = 'auto'; // Reset the height to auto
    input.style.height = `${input.scrollHeight}px`;
    setMessage(input.value);
  };

  const handleSubmit = async () => {
    if (!message) {
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
    setUsername(fullName);
    setShowPicker(false);
    const response = await SendMessage(message, fullName);
    console.log(response);
    socket.emit('send-chat-message', response.data.message);
    toast.success('Message sent successfully');
    setMessage('');
  };

  const onEmojiClick = (pickedEmoji, event) => {
    setMessage((prevMessage) => prevMessage + pickedEmoji.emoji);
  };

  const isUserMessage = (sender) => (sender === fullName ? 'message-personal' : '');

  return (
    <div className="chat" data-testid="ChatPage">
      <div className="chat-title">
        <motion.div
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="chatDown">
            <h1>Chat With Us</h1>
          </div>
        </motion.div>
      </div>
      <div className="messages">
        <div className="messages-content" data-testid="displayMessages">
          {chats.length > 0 ? (
            chats.map((chat) => (
              <div
                key={chat.id}
                className={`message-container ${isUserMessage(chat.sender)}`}
                data-testid="message-container"
              >
                <span
                  className="Sender"
                >
                  {chat.sender}
                </span>
                <span className="MessageSent" style={{ wordBreak: 'break-word' }}>{handleMessageDisplay(chat.message)}</span>
                {/* <span className="timestamp">{chat.createdAt}</span> */}
              </div>
            ))
          ) : (
            <span>No messages</span>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="message-box" data-testid="SendChat">
        <textarea
          type="text"
          className="message-input"
          name="message"
          onChange={handleChange}
          value={message || ''}
          placeholder="Type message..."
          data-testid="message-input"
          required
        />
        <div className="items">
          <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <span
              role="img"
              aria-label="smile"
              className="getEmoji"
              data-testid="getEmoji"
              onClick={() => setShowPicker((val) => !val)}
            >
              😄
            </span>
          </motion.div>
          <button type="submit" className={`message-submit ${isButtonDisabled ? 'disabled' : ''}`} onClick={handleSubmit} data-testid="SubmitChat">
            Send
            {' '}
            <FaPaperPlane />
          </button>
        </div>

      </div>
      {showPicker && (
      <div className="pickerContainer" data-testid="pickerContainer">

        <Picker pickerStyle={{ width: '75%' }} onEmojiClick={onEmojiClick} data-testid="emojiPicker" />

      </div>
      )}
    </div>
  );
};

export default ChatPage;
