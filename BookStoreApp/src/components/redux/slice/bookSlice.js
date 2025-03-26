import { createSlice } from '@reduxjs/toolkit';
import data from '../../../bookData/data.json';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: data,
  },
  reducers: {
    // In case you want to add book-specific actions in the future
  },
});

export const selectBooks = (state) => state.books.books;

export default bookSlice.reducer;
