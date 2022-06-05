import { configureStore } from '@reduxjs/toolkit';
import selectSlice from "./actionReducers/selectSlice";
import servicesData from './actionReducers/manageData';

export default configureStore({
  reducer: {
    changed:selectSlice,
    adding:servicesData
  },
})

