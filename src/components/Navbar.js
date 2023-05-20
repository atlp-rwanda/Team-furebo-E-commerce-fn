/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';

const Navbar = () => (
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
            <Link to="/login">Login/Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
