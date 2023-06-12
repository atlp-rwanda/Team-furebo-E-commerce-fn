/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const addToWishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload.data;
      state.push(newItem);
    },
    removeFromWishlist: (state, action) => {
      const { itemId } = action.payload;
      return state.filter(item => item && item.id !== itemId);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = addToWishlistSlice.actions;

export default addToWishlistSlice.reducer;
