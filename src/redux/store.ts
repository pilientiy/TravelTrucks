import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/campersSlice';
import filtersReducer from './slices/filtersSlice';
import favoriteReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    campers: vehiclesReducer,
    filters: filtersReducer,
    favorites: favoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
