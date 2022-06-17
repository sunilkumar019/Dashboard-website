import { configureStore } from '@reduxjs/toolkit';
import selectSlice from "./actionReducers/selectSlice";
import servicesData from './actionReducers/manageData';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './actionReducers/aboutSlice'
 

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    changed:selectSlice,
    adding:servicesData,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)