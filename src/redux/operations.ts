import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  selectCurrentPage,
  selectFilters,
  selectLimitItems,
} from './selectors';
import { RootState } from './store';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAllCampers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/campers?page=1&limit=4`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchCampersByFilters = createAsyncThunk(
  'campers/fetchCampersByFilters',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const filters = selectFilters(state);
    const currPage = selectCurrentPage(state);
    const perPage = selectLimitItems(state);

    const paginationParams = new URLSearchParams({
      page: currPage.toString(),
      limit: perPage.toString(),
    }).toString();

    const filterParams = new URLSearchParams(
      Object.entries(filters).reduce((acc, [key, value]) => {
        if (typeof value === 'boolean') {
          acc[key] = value ? 'true' : 'false';
        } else if (value) {
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    try {
      const response = await axios.get(
        `/campers?${paginationParams}&${filterParams}`
      );

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id: string | undefined, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);
