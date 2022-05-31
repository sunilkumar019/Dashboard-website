import { configureStore } from '@reduxjs/toolkit';
import createSlice from './createSlice';

export default configureStore({
  reducer: {
    changed:createSlice,
  },
})

