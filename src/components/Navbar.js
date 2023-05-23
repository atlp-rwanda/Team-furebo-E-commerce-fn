/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import '../css/NavbarStyles/Navbar.css';
import { IoMdNotifications } from 'react-icons/io';
import fetchNotifications from '../redux/actions/FetchNotification';

const Navbar = () => {
  const { userInfo } = useSelector(state => state.user);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const fetchedNotifications = await fetchNotifications();
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    getNotifications();
  }, []);

  return (
    <div data-testid="navbar">
      <nav>
        <div className="logo">
          <span className="team">LOGO</span>
        </div>
        <div className="dropdown">
          <button className="dropdown-toggle">Categories</button>
          <div className="dropdown-menu">
            <Link to="/electronics">Electronics</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-toggle">
            <IoMdNotifications />
          </button>
          <div className="dropdown-menu">
            <span>Notification</span>
            <hr />
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <span key={notification.id}>{notification.message}</span>
              ))
            ) : (
              <span>No notifications</span>
            )}
          </div>
        </div>

        <div className="search-area">
          <input type="text" placeholder="Search" />
          <button className="search-button">search</button>
        </div>
        <div className="right-navbar">
          <div className="dropdown">
            <button className="dropdown-toggle">
              <GrLanguage />
            </button>
            <div className="dropdown-menu">
              <Link to="/english">English</Link>
            </div>
          </div>
          <div className="cart">
            <span>
              <FaShoppingCart />
            </span>
          </div>
          <div className="dropdown">
            <button className="dropdown-toggle">
              <FaUserAlt />
            </button>
            <div className="dropdown-menu">
              {!userInfo ? (
                <Link to="/Authentication">Login/Signup</Link>
              ) : !userInfo.userData ? (
                <Link to="/Authentication">Login/Signup</Link>
              ) : (
                <>
                  <div className="welcome-name">
                    welcome &nbsp;
                    <span className="name">
                      {`${userInfo.userData.fullname.split(' ')[0]}`}
                    </span>
                  </div>
                  <hr />
                  <Link to="/view-basic">Account</Link>

                  <button className="logoutButton">Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
