// src/redux/campersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../services/api';

// Асинхронний thunk для отримання кемперів
export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (filters) => {
  const data = await getCampers(filters);
  return data;
});

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
