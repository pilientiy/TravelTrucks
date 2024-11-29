import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoriteState = {
  favorites: string[];
};

const initialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); 
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload; 
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); 
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;

const favoriteReducer = favoritesSlice.reducer;
export default favoriteReducer;
