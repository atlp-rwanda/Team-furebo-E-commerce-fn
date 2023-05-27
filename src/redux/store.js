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
  },
});

export default store;
