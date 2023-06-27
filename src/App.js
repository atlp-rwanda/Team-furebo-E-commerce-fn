/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Navbar from './components/NavBar/Navbar';
import Auth from './pages/Auth';
import EmailVerify from './components/EmailVerify';
import PasswordModification from './components/PasswordModification';
import DashBoard from './pages/DashBoard';
import AdminAuth from './pages/AdminAuth';
import Footer from './components/Footer';
import ResetPasswordform from './components/resetPassword';
import NewPasswordform from './components/newPassword';
import AddUserEssentialInfoPage from './pages/userInfo/AddUserEssentialInfoPage';
import EditUserBasicPage from './pages/userInfo/EditUserBasicPage';
import EditUserEssentialInfoPage from './pages/userInfo/EditUserEssentialInfoPage';
import BasicUserInfoPage from './pages/userInfo/BasicUserInfoPage';
import EssentialUserInfoPage from './pages/userInfo/EssentialUserInfoPage';
import VerifyOTPCode from './components/verifyCode';
import AddProduct from './components/ProductDetails/AddProduct';
import ProductPage from './pages/ProductPage';
import ViewCartPage from './pages/Cart/ViewCartPage';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import ViewWishlistPage from './pages/Wishlist/ViewWishlistPage';
import Completion from './components/payment/Completion';
import ProductGrid from './components/SellerProductGrid';
import SingleProduct from './components/SingleProduct';
import BuyersOrders from './components/TrackOrders/buyerOrders';
import OrderDetails from './components/TrackOrders/orderDetails';
import CustomerSupport from './components/customerSupport/customerSupport';

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
        element: <Checkout />,
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
        path: '/Authentication/requestResetPassword',
        element: <ResetPasswordform />,
      },
      {
        path: '/reset-password/:id',
        element: <NewPasswordform />,
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
      {
        path: '/verifyOTP',
        element: <VerifyOTPCode />,
      },
      {
        path: '/products',
        element: <ProductPage />,
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails />,
      },
      {
        path: '/view-cart',
        element: <ViewCartPage />,
      },
      {
        path: '/view-wishlist',
        element: <ViewWishlistPage />,
      },
      {
        path: '/sellerProducts',
        element: <ProductGrid />,
      },
      {
        path: '/sellerProducts/:id',
        element: <SingleProduct />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/purchases',
        element: <BuyersOrders />,
      },
      {
        path: '/order-details/:id',
        element: <OrderDetails />,
      },
      {
        path: '/support',
        element: <CustomerSupport />,
      },
      {
        path: '/dashboard',
        element: <DashBoard />,
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
  
 
]);

const App = () => (
  <div className="app" data-testid="App">
    <RouterProvider router={router} />
  </div>
);

export default App;