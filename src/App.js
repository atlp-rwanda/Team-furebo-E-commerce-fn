/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Navbar from './components/NavBar/Navbar';
import Auth from './pages/Auth';
import EmailVerify from './components/EmailVerify';
import PasswordModification from './components/PasswordModification';
import AddProduct from './components/ProductDetails/AddProduct';
import DashBoard from './pages/DashBoard';
import AdminAuth from './pages/AdminAuth';
import Footer from './components/Footer';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import AddUserEssentialInfoPage from './pages/userInfo/AddUserEssentialInfoPage';
import EditUserBasicPage from './pages/userInfo/EditUserBasicPage';
import EditUserEssentialInfoPage from './pages/userInfo/EditUserEssentialInfoPage';
import BasicUserInfoPage from './pages/userInfo/BasicUserInfoPage';
import EssentialUserInfoPage from './pages/userInfo/EssentialUserInfoPage';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/addproduct',
        element: <AddProduct />,
      },
      {
        path: '/authentication',
        element: <Auth />,
      },
      {
        path: '/requestResetPassword',
        element: <ResetPassword />,
      },
      {
        path: '/reset-password/:id',
        element: <NewPassword />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/changepassword',
        element: <PasswordModification />,
      },
      {
        path: '/view-basic',
        element: <BasicUserInfoPage />,
      },
      {
        path: '/view-essential',
        element: <EssentialUserInfoPage />,
      },
      {
        path: '/add-essential',
        element: <AddUserEssentialInfoPage />,
      },
      {
        path: '/update-basic',
        element: <EditUserBasicPage />,
      },
      {
        path: '/update-essential',
        element: <EditUserEssentialInfoPage />,
      },
      {
        path: '/AdminRegister',
        element: <AdminAuth />,
      },
    ],
  },
  {
    path: '/users/:id/verify/:token',
    element: <EmailVerify />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
]);

const App = () => (
  <div className="app" data-testid="App">
    <ToastContainer />
    <RouterProvider router={router} />
  </div>
);

export default App;
