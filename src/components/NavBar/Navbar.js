/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUserAlt, FaSearch } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../../css/NavbarStyles/Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [pageRotate, setPageRotate] = useState(false);
  const [pageMenu, setPageMenu] = useState(false);
  const [rotate, setRotate] = useState(true);
  const [crotate, setCrotate] = useState(true);
  const [profile, setProfile] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);

  const { userInfo } = useSelector((state) => state.user);

  const currentUserRole = userInfo?.userData?.role
    ? JSON.parse(userInfo.userData.role)
    : null;

  const handleMenu = () => {
    setMenu(!menu);
    setPageMenu(false);
    setSearchIcon(false);
    setProfile(false);
  };

  const handleRotate = () => {
    setRotate(!rotate);
    setPageMenu(!pageMenu);
  };

  const handleCRotate = () => {
    setCrotate(!crotate);
  };

  const handlePageRotate = () => {
    setPageRotate(!pageRotate);
  };

  const handleProfile = () => {
    setProfile(!profile);
    setMenu(false);
    setPageMenu(false);
    setSearchIcon(false);
  };

  const handleSeach = () => {
    setSearchIcon(!searchIcon);
    setMenu(false);
    setPageMenu(false);
    setProfile(false);
  };

  return (
    <div className="navbar" data-testid="navbar">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <ul>
        {userInfo && userInfo.userData && (
          <li data-testid="pages" onClick={handlePageRotate}>
            pages
            {' '}
            <MdOutlineKeyboardArrowUp
              className={!pageRotate ? 'arrowUp' : 'arrowDown'}
            />
            {pageRotate && (
              <div className="newPageRotate">
                {currentUserRole && currentUserRole.name === 'admin' && (
                  <Link className="link" to="/dashboard">
                    <div>dashboard</div>
                  </Link>
                )}
                <div>Product</div>
                {currentUserRole && currentUserRole.name === 'merchant' && (
                  <div>collection</div>
                )}
              </div>
            )}
          </li>
        )}
        <li>
          categories
          <MdOutlineKeyboardArrowUp />
        </li>
      </ul>
      <div className="searchIcon">
        <FaSearch data-testid="search-icon" onClick={handleSeach} />
        {searchIcon && (
          <div className="search2">
            <FaSearch className="searchIcn" />
            <input placeholder="search" id="search" type="text" />
            <button>search</button>
          </div>
        )}
      </div>
      <div className="search">
        <FaSearch className="searchIcn" />
        <input placeholder="search" />
        <button>search</button>
      </div>
      <div className="leftList">
        <div className="translation">
          <GrLanguage />
        </div>
        <div className="cart">
          <FaShoppingCart />
        </div>
        <div className="profile">
          <FaUserAlt data-testid="profile-button" onClick={handleProfile} />
          {profile && (
            <div className="newProfile">
              {!userInfo ? (
                <Link className="Plink" to="/Authentication">
                  <li>Login/Signup</li>
                </Link>
              ) : !userInfo.userData ? (
                <Link className="Plink" to="/Authentication">
                  <li>Login/Signup</li>
                </Link>
              ) : (
                <>
                  <div className="welcome-name">
                    welcome &nbsp;
                    <span className="name">
                      {`${userInfo.userData.fullname.split(' ')[0]}`}
                    </span>
                  </div>
                  <hr />
                  <button className="logoutButton">Logout</button>
                </>
              )}
            </div>
          )}
        </div>
        {!menu ? (
          <HiMenuAlt2
            data-testid="menu-button"
            className="MenuBar"
            onClick={handleMenu}
          />
        ) : (
          <RxCross2
            data-testid="menu-open-indicator"
            className="MenuBar"
            onClick={handleMenu}
          />
        )}
      </div>
      {menu && (
        <div className="NavSideBar">
          {userInfo && userInfo.userData && (
            <li onClick={handleRotate} data-testid="pages">
              pages
              {' '}
              <IoIosArrowBack
                data-testid="arrowLeft"
                className={rotate ? 'arrowLeft' : 'arrowRight'}
              />
            </li>
          )}
          <li onClick={handleCRotate}>
            categories
            <IoIosArrowBack className={crotate ? 'arrowLeft' : 'arrowRight'} />
          </li>
        </div>
      )}
      {pageMenu && (
        <div className="newNavSideBar">
          {currentUserRole && currentUserRole.name === 'admin' && (
            <Link className="link" to="/dashboard">
              <li>dashboard</li>
            </Link>
          )}
          <li>Product</li>
          {currentUserRole && currentUserRole.name === 'merchant' && (
            <li>collection</li>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
