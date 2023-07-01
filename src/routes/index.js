/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/Home';
import Navbar from '../components/NavBar/Navbar';
import Auth from '../pages/Auth';
import EmailVerify from '../components/EmailVerify';
import PasswordModification from '../components/PasswordModification';
import DashBoard from '../pages/DashBoard';
import AdminAuth from '../pages/AdminAuth';
import Footer from '../components/Footer';
import ResetPasswordform from '../components/resetPassword';
import NewPasswordform from '../components/newPassword';
import VerifyOTPCode from '../components/verifyCode';
import AddProduct from '../components/ProductDetails/AddProduct';
import ProductPage from '../pages/ProductPage';
import ViewCartPage from '../pages/Cart/ViewCartPage';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import ViewWishlistPage from '../pages/Wishlist/ViewWishlistPage';
import Completion from '../components/payment/Completion';
import ProductGrid from '../components/SellerProductGrid';
import SingleProduct from '../components/SingleProduct';
import UpdateProduct from '../components/UpdateProduct';
import UserProfilePage from '../pages/userInfo/UserProfilePage';
import AddEssentialPage from '../pages/userInfo/AddEssentialPage';
import PrivateRoutes from '../PrivateRoutes';

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
        path: '/checkout',
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: '/addproduct',
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: '/authentication',
        element: <Auth />,
      },
      {
        path: '/Authentication/requestResetPassword',
        element: (
          <PrivateRoutes>
            <ResetPasswordform />
          </PrivateRoutes>
        ),
      },
      {
        path: '/reset-password/:id',
        element: (
          <PrivateRoutes>
            <NewPasswordform />
          </PrivateRoutes>
        ),
      },
      {
        path: '/home',
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: '/changepassword',
        element: (
          <PrivateRoutes>
            <PasswordModification />
          </PrivateRoutes>
        ),
      },
      {
        path: '/view-profile',
        element: (
          <PrivateRoutes>
            <UserProfilePage />
          </PrivateRoutes>
        ),
      },
      {
        path: '/add-essential',
        element: (
          <PrivateRoutes>
            <AddEssentialPage />
          </PrivateRoutes>
        ),
      },
      {
        path: '/AdminRegister',
        element: (
          <PrivateRoutes>
            <AdminAuth />
          </PrivateRoutes>
        ),
      },
      {
        path: '/verifyOTP',
        element: (
          <PrivateRoutes>
            <VerifyOTPCode />
          </PrivateRoutes>
        ),
      },
      {
        path: '/products',
        element: (
          <PrivateRoutes>
            <ProductPage />
          </PrivateRoutes>
        ),
      },
      {
        path: '/productDetails/:id',
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: '/view-cart',
        element: (
          <PrivateRoutes>
            <ViewCartPage />
          </PrivateRoutes>
        ),
      },
      {
        path: '/view-wishlist',
        element: (
          <PrivateRoutes>
            <ViewWishlistPage />
          </PrivateRoutes>
        ),
      },
      {
        path: '/sellerProducts',
        element: (
          <PrivateRoutes>
            <ProductGrid />
          </PrivateRoutes>
        ),
      },
      {
        path: '/sellerProducts/:id',
        element: (
          <PrivateRoutes>
            <SingleProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: '/updateProduct/:id',
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: '/users/:id/verify/:token',
    element: <EmailVerify />,
  },
  {
    path: '/paymentSuccessful',
    element: <Completion />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashBoard />
      </PrivateRoutes>
    ),
  },
]);

export default router;
