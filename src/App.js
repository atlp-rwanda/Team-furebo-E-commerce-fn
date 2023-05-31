/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar/Navbar';
import Auth from './pages/Auth';
import EmailVerify from './components/EmailVerify';
import PasswordModification from './components/PasswordModification';
import DashBoard from './pages/DashBoard';
import AdminAuth from './pages/AdminAuth';
import Footer from './components/Footer';

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
        path: '/authentication',
        element: <Auth />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/changepassword/:id',
        element: <PasswordModification />,
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
    <RouterProvider router={router} />
  </div>
);

export default App;
