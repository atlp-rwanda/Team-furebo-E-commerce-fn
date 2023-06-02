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
<<<<<<< HEAD
=======
import AddUserEssentialInfoPage from './pages/userInfo/AddUserEssentialInfoPage';
import EditUserBasicPage from './pages/userInfo/EditUserBasicPage';
import EditUserEssentialInfoPage from './pages/userInfo/EditUserEssentialInfoPage';
import BasicUserInfoPage from './pages/userInfo/BasicUserInfoPage';
import EssentialUserInfoPage from './pages/userInfo/EssentialUserInfoPage';
>>>>>>> 15c6b94 (feat: seller delete product functionality)
import VerifyOTPCode from './components/verifyCode';
import AddProduct from './components/ProductDetails/AddProduct';
import ProductPage from './pages/ProductPage';
import ViewCartPage from './pages/Cart/ViewCartPage';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import ViewWishlistPage from './pages/Wishlist/ViewWishlistPage';
import Completion from './components/payment/Completion';
<<<<<<< HEAD
<<<<<<< HEAD
import ProductGrid from './components/SellerProductGrid';
import SingleProduct from './components/SingleProduct';
import UpdateProduct from './components/UpdateProduct';
import UserProfilePage from './pages/userInfo/UserProfilePage';
import AddEssentialPage from './pages/userInfo/AddEssentialPage';
=======
>>>>>>> 25ac1cf (buyer is able to make payment using stripeAPI)
=======
import ProductGrid from './components/SellerProductGrid';
import SingleProduct from './components/SingleProduct';
>>>>>>> 15c6b94 (feat: seller delete product functionality)

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
<<<<<<< HEAD
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct />,
      },
      {
        path: '/view-profile',
        element: <UserProfilePage />,
      },
      {
        path: '/add-essential',
        element: <AddEssentialPage />,
      },
=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
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
    element: <DashBoard />,
  },
]);

const App = () => (
  <div className="app" data-testid="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
