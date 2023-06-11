/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineDashboard } from 'react-icons/md';
import {
  BsFillMenuAppFill,
  BsChatSquare,
  BsBorderStyle,
  BsLayoutSidebarInset,
} from 'react-icons/bs';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiMenuAlt2 } from 'react-icons/hi';
import Users from '../components/AdminRegister/Users';
import image from '../assets/images/istockphoto-546175134-1024x1024.jpg';
import Dashboard from '../components/AdminRegister/Dashboard';
import Merchant from '../components/AdminRegister/Merchant';
import Customers from '../components/AdminRegister/Customers';
import Charts from '../components/AdminRegister/Charts';
import Orders from '../components/AdminRegister/Orders';
import fetchUsers from '../redux/actions/GetUsers';
import '../css/DashBoard/DashBoard.css';

const DashBoard = () => {
  const dispatch = useDispatch();
  const [isDashboard, setIsDashboard] = useState(true);
  const [isUsers, setIsUsers] = useState(false);
  const [isMerchant, setIsMerchant] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isOrders, setIsOrders] = useState(false);

  const [show, setShow] = useState(true);

  const handleDashboard = () => {
    setIsDashboard(true);
    setIsMerchant(false);
    setIsCustomer(false);
    setIsUsers(false);
    setIsCharts(false);
    setIsOrders(false);
  };

  const handleUsers = () => {
    setIsDashboard(false);
    setIsMerchant(false);
    setIsCustomer(false);
    setIsUsers(true);
    setIsCharts(false);
    setIsOrders(false);
  };

  const handleMerchant = () => {
    setIsDashboard(false);
    setIsMerchant(true);
    setIsCustomer(false);
    setIsUsers(false);
    setIsCharts(false);
    setIsOrders(false);
  };

  const handleCustomers = () => {
    setIsDashboard(false);
    setIsMerchant(false);
    setIsCustomer(true);
    setIsUsers(false);
    setIsCharts(false);
    setIsOrders(false);
  };

  const handleCharts = () => {
    setIsDashboard(false);
    setIsMerchant(false);
    setIsCustomer(false);
    setIsUsers(false);
    setIsCharts(true);
    setIsOrders(false);
  };

  const handleOrders = () => {
    setIsDashboard(false);
    setIsMerchant(false);
    setIsCustomer(false);
    setIsUsers(false);
    setIsCharts(false);
    setIsOrders(true);
  };

  // useEffect(() => {
  //   fetchUsers(dispatch);
  // }, [handleUsers]);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="Dashboard" data-testid="DashBoard">
      <div className={show ? 'dashBoardMenu' : 'dashBoardMenuSmall'}>
        <div className="Header">
          <span className={show ? 'show' : 'hidden'}>E-commerce Admin</span>{' '}
          <HiMenuAlt2 className="menu1" onClick={handleShow} />
        </div>
        <hr />
        <div className="identification">
          <img src={image} alt="AdminImg" />
          <div className={show ? 'Id-Inner' : 'hidden'}>
            <h1>Strong Admin</h1>
            <p>admin@gmail.com</p>
          </div>
        </div>
        <div className="dashBoard-listing">
          <li onClick={handleDashboard}>
            <MdOutlineDashboard />{' '}
            <span className={show ? 'show' : 'hidden'}>DashBoard</span>
          </li>
          <li onClick={handleUsers}>
            <BsFillMenuAppFill />{' '}
            <span className={show ? 'show' : 'hidden'}>Users</span>
          </li>
          <li onClick={handleMerchant}>
            <AiOutlineUser />
            <span className={show ? 'show' : 'hidden'}>Merchants</span>
          </li>
          <li onClick={handleCustomers}>
            <AiOutlineUser />
            <span className={show ? 'show' : 'hidden'}>Customers</span>
          </li>
          <li onClick={handleCharts}>
            <BsChatSquare />
            <span className={show ? 'show' : 'hidden'}>Chats</span>
          </li>
          <li onClick={handleOrders}>
            <BsBorderStyle />
            <span className={show ? 'show' : 'hidden'}>Orders</span>
          </li>
        </div>
        <hr />
        <div className="settings">
          <p>
            <GiSettingsKnobs />
            <span className={show ? 'show' : 'hidden'}>settings</span>
          </p>
        </div>
        <div className="togleSidebar">
          <p>
            <BsLayoutSidebarInset />
            <span className={show ? 'show' : 'hidden'}>Toggle sidebar</span>
          </p>
        </div>
      </div>
      <div className="dashBoardMain">
        <div className="searchBar">
          <AiOutlineSearch />
          <input placeholder="Search for a user" />
          <IoMdNotificationsOutline />
        </div>
        {isDashboard && (
          <div>
            <Dashboard />
          </div>
        )}
        {isUsers && (
          <div className="usersContainer">
            <Users handleUsers={handleUsers} />
          </div>
        )}
        {isMerchant && (
          <div>
            <Merchant />
          </div>
        )}
        {isCustomer && (
          <div>
            <Customers />
          </div>
        )}
        {isCharts && (
          <div>
            <Charts />
          </div>
        )}
        {isOrders && (
          <div>
            <Orders />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
