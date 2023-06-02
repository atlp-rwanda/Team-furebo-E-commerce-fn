/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import userSlice from './slices/signupSlice';
import updatePasswordSlice from './slices/updatePassword';
import userRolesSlice from './slices/userRolesSlice';
import allUsersSlice from './slices/usersSlice';
import disableAccountSlice from './slices/disableAccountSlice';
import resetPasswordSlice from './slices/resetPasswordSlice';
import newPasswordSlice from './slices/newPasswordSlice';
import addProduct from './slices/addProductSlice';
import markNotificationsSlice from './slices/markNotificationsSlice';
import allProductsSlice from './slices/fetchProductSlice';
import cartSlice from './slices/shoppingCartSlice';
import singleProductsSlice from './slices/proDetailsSlice';
import recomProductsSlice from './slices/recomProductSlice';
import checkoutSlice from './slices/checkoutSlice';
import fetchCartItemsSlice from './slices/fetchCartItemsSlice';
import addToWishlistReducer from './slices/Wishlist/AddToWishlistSlice';
import viewWishlistReducer from './slices/Wishlist/ViewWishlistSlice';
import deleteItemInWishlistReducer from './slices/Wishlist/DeleteItemInWishListSlice';
import clearWishlistReducer from './slices/Wishlist/ClearWishListSlice';
import viewCartItemsReducer from './slices/Cart/ViewCartItemsSlice';
import updateCartItemReducer from './slices/Cart/UpdateCartItemSlice';
import deleteCartItemReducer from './slices/Cart/DeleteCartItemSlice';
import clearCartItemReducer from './slices/Cart/ClearCartItemSlice';
import orderSlice from './slices/getOrderSlice';
import paymentSlice from './slices/paymentSlice';
<<<<<<< HEAD
<<<<<<< HEAD
import productSlice from './slices/sellerProductSlice';

import userProfileReducer from './slices/UserProfile/FetchUserEssentialInfoSlice';
import basicInfoReducer from './slices/UserProfile/FetchUserBasicInfoSlice';
import updateUserBasicInfoReducer from './slices/UserProfile/UpdateUserBasicInfoSlice';
import updateUserEssentialInfoReducer from './slices/UserProfile/UpdateUserEssentialInfoSlice';
import ChangePasswordAtGivenTimeReducer from './slices/UserProfile/ChangePasswordAtGivenTimeSlice';
=======
>>>>>>> 25ac1cf (buyer is able to make payment using stripeAPI)
=======
import productSlice from './slices/sellerProductSlice';
>>>>>>> 15c6b94 (feat: seller delete product functionality)

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userSlice,
  updatePassword: updatePasswordSlice,
  userRole: userRolesSlice,
  disableAccount: disableAccountSlice,
  allUsers: allUsersSlice,
  resetPassword: resetPasswordSlice,
  newPassword: newPasswordSlice,
  addProducts: addProduct,
  markNotifications: markNotificationsSlice,
  product: allProductsSlice,
  cart: cartSlice,
  singleProduct: singleProductsSlice,
  recomProducts: recomProductsSlice,
  checkout: checkoutSlice,
  payment: paymentSlice,
  getOrder: orderSlice,
  cartItems: fetchCartItemsSlice,
  wishlist: addToWishlistReducer,
  viewWishlist: viewWishlistReducer,
  deleteItemInWishlist: deleteItemInWishlistReducer,
  clearWishlist: clearWishlistReducer,
  viewCartItems: viewCartItemsReducer,
  updateCartItem: updateCartItemReducer,
  deleteCartItem: deleteCartItemReducer,
  clearCartItem: clearCartItemReducer,
  products: productSlice,
<<<<<<< HEAD
  userProfile: userProfileReducer,
  basicInfo: basicInfoReducer,
  updateUserBasicInfo: updateUserBasicInfoReducer,
  updateUserEssentialInfo: updateUserEssentialInfoReducer,
  changePasswordAtGivenTime: ChangePasswordAtGivenTimeReducer,

=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
