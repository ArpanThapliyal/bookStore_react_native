// src/components/redux/slice/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // action.payload = book item
      const book = action.payload;
      // If not already in wishlist, add it
      const exists = state.wishlistItems.find((item) => item.id === book.id);
      if (!exists) {
        state.wishlistItems.push(book);
      }
    },
    removeFromWishlist: (state, action) => {
      // action.payload = book's id
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// A selector to get the full wishlist array
export const selectWishlistItems = (state) => state.wishlist.wishlistItems;

// A helper selector to quickly check if a book is in the wishlist
export const selectIsBookInWishlist = (bookId) => (state) =>
  state.wishlist.wishlistItems.some((item) => item.id === bookId);

export default wishlistSlice.reducer;
