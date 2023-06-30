import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa';
import { SendQueries } from '../../redux/actions/customerSupport/customerSupport';
import '../../css/customerSupportStyles/customerSupportStyles.css';

const customerSupport = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setFullname(userInfo.fullname);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullname,
      email,
      message,
    };

    const res = await SendQueries(formData, dispatch);
  };

  return (
    <div className="customerSupportPage cta">
      <div className="customerSupportTitle">
        <h1>Customer Support</h1>
      </div>
      <div className="cta-form">
        <form>
          <div className="input-row">
            <div className="input-group">
              <input
                type="text"
                name="FullName"
                id="name"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <label htmlFor="name">
                <FaUser />
                {' '}
                Your Name
              </label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">
                <FaEnvelope />
                {' '}
                Your Email
              </label>
            </div>
          </div>

          <div className="input-group">
            <textarea
              id="message"
              rows="10"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message">
              <FaComment />
              {' '}
              Your Message
            </label>
          </div>
          <button id="sendQueryBtn" onClick={handleSubmit}>
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default customerSupport;
