import { configureStore } from '@reduxjs/toolkit';
import selectSlice from "./actionReducers/selectSlice";

import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './actionReducers/aboutSlice'
import { servicesApi } from './actionReducers/servicesSlice';
import { persistReducer, persistStore , FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
 import storage from 'redux-persist/lib/storage';

 const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,selectSlice)

export const store = configureStore({ 
  reducer: {
    changed:selectSlice,
    [api.reducerPath]: api.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(servicesApi.middleware),
  
 
})

setupListeners(store.dispatch);

export const persistor = persistStore(store)