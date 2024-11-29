import { CampersSelectorType } from '../types/campersTypes';
import { FiltersState } from '../types/filtersTypes';
import { RootState } from './store';

export const selectCampers = (state: CampersSelectorType) =>
  state.campers.items;

export const selectFilters = (state: RootState): FiltersState => state.filters;

export const selectCurrentPage = (state: RootState): number =>
  state.campers.page;

export const selectLimitItems = (state: RootState): number =>
  state.campers.limit;

export const selectTotalItems = (state: RootState): number =>
  state.campers.total;

export const selectIsLoading = (state: RootState): boolean =>
  state.campers.loading;

export const selectIsError = (state: RootState): string | null =>
  state.campers.error;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const selectItemById = (state: CampersSelectorType) =>
  state.campers.itemById;
