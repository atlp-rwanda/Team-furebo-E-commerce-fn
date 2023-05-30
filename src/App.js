import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import EmailVerify from './components/EmailVerify';

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
    ],
  },
  {
    path: '/users/:id/verify/:token',
    element: <EmailVerify />,
  },
]);

const App = () => (
  <div className="app" data-testid="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
