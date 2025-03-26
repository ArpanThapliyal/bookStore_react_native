// src/components/redux/slice/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  customerDetails: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart (if it exists, just increase quantity)
    addToCart: (state, action) => {
      const book = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === book.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...book, quantity: 1 });
      }
    },

    // Remove an item entirely from the cart
    removeFromCart: (state, action) => {
      const bookId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== bookId);
    },

    // Increase the quantity of a specific item in the cart
    incrementQuantity: (state, action) => {
      const bookId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === bookId);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    // Decrease the quantity of a specific item in the cart
    // but do not go below quantity 1
    decrementQuantity: (state, action) => {
      const bookId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === bookId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },

    // Store the customer's details
    setCustomerDetails: (state, action) => {
      state.customerDetails = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setCustomerDetails,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCustomerDetails = (state) => state.cart.customerDetails;

// Helper selector: checks if a given book is in the cart
export const selectIsBookInCart = (bookId) => (state) =>
  state.cart.cartItems.some((item) => item.id === bookId);

export default cartSlice.reducer;
