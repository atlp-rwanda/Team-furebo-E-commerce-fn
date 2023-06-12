/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
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

const store = configureStore({
  reducer: {
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
  },
});

export default store;
