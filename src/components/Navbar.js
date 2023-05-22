/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable semi */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaSearch } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import '../css/NavbarStyles/Navbar.css';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.user);

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
      <div className="search-area">
        <input type="text" placeholder="Search" />
        <button className="search-button">search</button>
      </div>
      <div className="right-navbar">
        <div className="dropdown">
          <button className="dropdown-toggle"><GrLanguage /></button>
          <div className="dropdown-menu">
            <Link to="/english">English</Link>
          </div>
        </div>
        <div className="cart">
          <span><FaShoppingCart /></span>

        </div>
        <div className="dropdown">
          <button className="dropdown-toggle"><FaUserAlt /></button>
          <div className="dropdown-menu">
          {!userInfo ? (
                <Link to="/Authentication">Login/Signup</Link>
          ) : (
            !userInfo.userData ? (
                  <Link to="/Authentication">Login/Signup</Link>
            ) : (
                  <>
                    <div className="welcome-name">
                      welcome &nbsp;
                      <span className="name">{`${userInfo.userData.fullname.split(' ')[0]}`}</span>
                    </div>
                    <hr />
                    <button className="logoutButton">Logout</button>
                  </>
            )
          )}
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
};

export default Navbar;
