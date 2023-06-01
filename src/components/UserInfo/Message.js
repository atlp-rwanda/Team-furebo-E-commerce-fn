import React from 'react';

const Message = ({ message, isSuccess }) => (
  <p className={`login-message ${isSuccess ? 'success' : 'failure'}`}>
    {message}
  </p>
);

export default Message;
