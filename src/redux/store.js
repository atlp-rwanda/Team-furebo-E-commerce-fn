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

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userSlice,
  updatePassword: updatePasswordSlice,
  userRole: userRolesSlice,
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
  cartItems: fetchCartItemsSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
