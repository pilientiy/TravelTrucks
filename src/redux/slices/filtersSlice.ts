import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersState = {
  location?: string;
  AC?: boolean;
  TV?: boolean;
  water?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  radio?: boolean;
  transmission?: string;
  form?: string;
};

const initialState: FiltersState = {};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FiltersState>) => {
      state.location = action.payload.location;
      state.AC = action.payload.AC;
      state.TV = action.payload.TV;
      state.water = action.payload.water;
      state.bathroom = action.payload.bathroom;
      state.kitchen = action.payload.kitchen;
      state.refrigerator = action.payload.refrigerator;
      state.microwave = action.payload.microwave;
      state.gas = action.payload.gas;
      state.radio = action.payload.radio;
      state.transmission = action.payload.transmission;
      state.form = action.payload.form;
    },
    clearFilters: () => {
      return {};
    },
  },
});

export const { setFilters, clearFilters } = filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
