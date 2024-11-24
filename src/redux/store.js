// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import testReducer from "./testSlice"
import campersReducer from './campersSlice'


export const store = configureStore({
  reducer: {
    test: testReducer,
    campers: campersReducer, 
  },
});

export default store;
