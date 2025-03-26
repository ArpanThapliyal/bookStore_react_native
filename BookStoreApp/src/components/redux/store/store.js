// src/components/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../slice/bookSlice';
import cartReducer from '../slice/cartSlice';
import wishlistReducer from '../slice/wishlistSlice';
import searchReducer from '../slice/searchSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    search: searchReducer,
  },
});
