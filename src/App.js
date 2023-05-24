import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
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
    ],
  },
]);

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

export default App;
