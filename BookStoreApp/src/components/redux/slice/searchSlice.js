import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  recentSearches: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;

      // Also add this term to recentSearches if it's not empty
      if (action.payload.trim() !== '') {
        // Optionally limit recent searches to 5 or so
        if (!state.recentSearches.includes(action.payload)) {
          state.recentSearches.unshift(action.payload);
        }
        // Keep only last 5 or so
        state.recentSearches = state.recentSearches.slice(0, 5);
      }
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export const selectSearchTerm = (state) => state.search.searchTerm;
export const selectRecentSearches = (state) => state.search.recentSearches;

export default searchSlice.reducer;
