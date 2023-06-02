/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaUserAlt, FaSearch } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { BsCheck2All } from 'react-icons/bs';
import { IoIosArrowBack, IoMdNotifications } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineKeyboardArrowUp, MdDelete } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import '../../css/NavbarStyles/Navbar.css';
import '../../css/NotificationStyles/NotificationStyles.css';
import 'react-toastify/dist/ReactToastify.css';
import fetchNotifications from '../../redux/actions/userProfile/FetchNotification';
import {
  markNotifications,
  markAllNotifications,
} from '../../redux/actions/markNotifications/MarkNotifications';
import updateCategory from '../../redux/slices/fetchProductSlice';
import Logo from '../../assets/images/our-logo.png';
import ViewWishlistButton from '../Wishlist/ViewWishListButton';
import fetchAllProducts from '../../redux/actions/FetchProduct';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [pageRotate, setPageRotate] = useState(false);
  const [pageMenu, setPageMenu] = useState(false);
  const [rotate, setRotate] = useState(true);
  const [crotate, setCrotate] = useState(true);
  const [profile, setProfile] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const { userInfo } = useSelector((state) => state.user);
  const { wishlistItems } = useSelector((state) => state.viewWishlist);
  const availableProductsData = JSON.parse(localStorage.getItem('availableProducts'));
  const availableProducts = availableProductsData?.data?.items;
  const categories = availableProducts?.map((product) => product?.category);
  const uniqueCategories = [...new Set(categories)];
  const { cartItems } = useSelector((state) => state.viewCartItems);

  const currentUserRole = userInfo?.userData?.role
    ? JSON.parse(userInfo.userData.role)
    : null;
  const [data, setData] = useState({ isRead: true });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

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
    setProfile(false);
    setShowNotification(false);
  };

  const handleProfile = () => {
    setProfile(!profile);
    setMenu(false);
    setPageMenu(false);
    setSearchIcon(false);
    setPageRotate(false);
    setShowNotification(false);
  };

  const handleCategory = (pr) => {
    dispatch(updateCategory(pr));
    console.log('category', pr);
  };

  const handleSeach = () => {
    setSearchIcon(!searchIcon);
    setMenu(false);
    setPageMenu(false);
    setProfile(false);
  };
  const handleNotification = () => {
    setShowNotification(!showNotification);
    setProfile(false);
    setPageRotate(false);
  };

  const MarkAllAsRead = () => {
    markAllNotifications(data, dispatch);
  };

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const fetchedNotifications = await fetchNotifications();
        setNotifications(fetchedNotifications);
        setNotificationCount(fetchedNotifications.length);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    getNotifications();
  });

  useEffect(() => {
    fetchAllProducts(1, 8, dispatch);
  }, [dispatch]);

  const [lastNotification, setLastNotification] = useState(null);

  useEffect(() => {
    if (notifications.length > 0) {
      const newNotification = notifications[notifications.length - 1];

      if (newNotification !== lastNotification && lastNotification !== null) {
        toast.info(newNotification.message);
        setLastNotification(newNotification);
      } else {
        setLastNotification(newNotification);
      }
    }
  }, [notifications.length, lastNotification]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/');
    setPageMenu(false);
    setSearchIcon(false);
    setProfile(false);
  };

  return (
    <div className="navbar" data-testid="navbar">
      <div className="logo">
        <div
          className="logo-container"
          onClick={() => {
            navigate('/');
            setProfile(false);
            setRotate(true);
            setMenu(false);
            setPageRotate(false);
          }}
        >
          {/* <span className="logo-name">T-mart</span> */}
          <img className="logo-image" src={Logo} alt="" width="52px" />
        </div>
      </div>
      <ul>
        {userInfo && userInfo.userData && (
          <li data-testid="pages" onClick={handlePageRotate}>
            PAGES
            {' '}
            <MdOutlineKeyboardArrowUp
              className={!pageRotate ? 'arrowUp' : 'arrowDown'}
            />
            {pageRotate && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className="newPageRotate"
              >
                {currentUserRole && currentUserRole.name === 'admin' && (
                  <Link className="link" to="/dashboard">
                    <motion.li variants={item}>dashboard</motion.li>
                  </Link>
                )}

                {currentUserRole && currentUserRole.name === 'merchant' && (
                  <>
                    <Link className="link" to="/addproduct">
                      <motion.li variants={item}>Add Product</motion.li>
                    </Link>
                    <Link className="link" to="/sellerProducts">
                      <motion.li variants={item}>Seller Collection</motion.li>
                    </Link>
                    {/* <li>collection</li> */}
                  </>
                )}
                <Link className="link" to="/products">
                  <motion.div variants={item}>Product</motion.div>
                </Link>
              </motion.div>
            )}
          </li>
        )}
      </ul>
      <ul>
        <li onClick={handleCRotate}>
          CATEGORIES
          {' '}
          <MdOutlineKeyboardArrowUp
            className={!crotate ? 'arrowDown' : 'arrowUp'}
          />
          {!crotate && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="newPageRotate"
          >
            {uniqueCategories?.map((pr) => (
              <Link className="link" key={pr} to={`/category/${pr}`} onClick={() => handleCategory(pr)}>
                <motion.div variants={item}>{pr}</motion.div>
              </Link>
            ))}
          </motion.div>
          )}
        </li>
      </ul>
      {userInfo && userInfo.userData && (
        <div className="notification-panel" data-testid="notificationPanel">
          <li>
            <div className="notification-bell">
              <IoMdNotifications
                data-testid="counterTest"
                onClick={handleNotification}
              />
              {notificationCount > 0 && (
                <span className="counter">{notificationCount}</span>
              )}
            </div>
          </li>
          <div>
            {showNotification && (
              <div className="dropdown-menu">
                <div className="notification-title">
                  Notification
                  <span onClick={MarkAllAsRead}>
                    <BsCheck2All />
                  </span>
                </div>
                <hr />
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <span
                      onClick={() => markNotifications(notification.id, data, dispatch)}
                      className={
                        notification.isRead === true
                          ? 'notification-card2'
                          : 'notification-card'
                      }
                      key={notification.id}
                    >
                      {notification.message}
                    </span>
                  ))
                ) : (
                  <span>No notifications</span>
                )}
              </div>
            )}
          </div>
        </div>
      )}

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
        {userInfo && userInfo.userData && (
          <>
            <Link className="cartlink" to="/view-cart">
              <div data-testid="cartContainer" className="cartContainer">
                <FaShoppingCart />
                <span className="redSpan">{cartItems.length}</span>
              </div>
            </Link>
            {/* View Wishlist */}
            <div data-testid="wishlistContainer" className="cartContainer">
              <ViewWishlistButton />
              <span className="redSpan">{wishlistItems.length}</span>
            </div>
          </>
        )}
        <div className="profile">
          <FaUserAlt data-testid="profile-button" onClick={handleProfile} />
          {profile && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              className="newProfile"
            >
              {!userInfo ? (
                <Link className="Plink" to="/Authentication">
                  <motion.div variants={item} onClick={() => setProfile(false)}>
                    Login/Signup
                  </motion.div>
                </Link>
              ) : !userInfo.userData ? (
                <Link className="Plink" to="/Authentication">
                  <motion.div variants={item} onClick={() => setProfile(false)}>
                    Login/Signup
                  </motion.div>
                </Link>
              ) : (
                <>
                  <motion.div variants={item} className="welcome-name">
                    Welcome
                    {' '}
                    <span className="name">
                      {`${userInfo.userData.fullname.split(' ')[0]}`}
                    </span>
                  </motion.div>
                  <hr />
                  <Link to="/view-profile" className="profile-link">
                    <motion.div variants={item}>Profile</motion.div>
                  </Link>
                  <motion.button
                    variants={item}
                    className="logoutButton"
                    onClick={handleLogout}
                  >
                    Logout
                  </motion.button>
                </>
              )}
              <span className="newProfileBottom">Team-Furebo-E-commerce</span>
            </motion.div>
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="NavSideBar"
        >
          {userInfo && userInfo.userData && (
            <motion.li
              variants={item}
              onClick={handleRotate}
              data-testid="pages"
            >
              PAGES
              {' '}
              <IoIosArrowBack
                data-testid="arrowLeft"
                className={rotate ? 'arrowLeft' : 'arrowRight'}
              />
            </motion.li>
          )}
          <motion.li variants={item} onClick={handleCRotate}>
            CATEGORIES
            <IoIosArrowBack className={crotate ? 'arrowLeft' : 'arrowRight'} />
          </motion.li>
        </motion.div>
      )}
      {pageMenu && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="newNavSideBar"
        >
          {currentUserRole && currentUserRole.name === 'admin' && (
            <Link className="link" to="/dashboard">
              <motion.li variants={item}>dashboard</motion.li>
            </Link>
          )}
          <Link className="link" to="/products">
            <motion.div variants={item}>Product</motion.div>
          </Link>
          {currentUserRole && currentUserRole.name === 'merchant' && (
            <>
              {/* <motion.li variants={item}>collection</motion.li> */}
              <Link className="link" to="/addproduct">
                <motion.li variants={item}>addProduct</motion.li>
              </Link>
              <Link className="link" to="/sellerProducts">
                <div>Seller Collection</div>
              </Link>
            </>
          )}
        </motion.div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Navbar;
