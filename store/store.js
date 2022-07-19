import { configureStore } from '@reduxjs/toolkit';
import selectSlice from "./actionReducers/selectSlice";

import { setupListeners } from '@reduxjs/toolkit/query'
import { aboutApi } from './actionReducers/aboutSlice';
import { servicesApi } from './actionReducers/servicesSlice';
import { homeApi } from './actionReducers/homeSlice';
 
 
  

export const store = configureStore({ 

  reducer: {
    changed:selectSlice,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [homeApi.reducerPath]:homeApi.reducer

  },
   
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(servicesApi.middleware,aboutApi.middleware,homeApi.middleware),
  
  
 
})

setupListeners(store.dispatch);

 