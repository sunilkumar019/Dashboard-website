import { configureStore } from '@reduxjs/toolkit';
import selectSlice from "./actionReducers/selectSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query'
import { aboutApi } from './actionReducers/aboutSlice';
import { servicesApi } from './actionReducers/servicesSlice';
import { homeApi } from './actionReducers/homeSlice';
import { contactApi } from './actionReducers/contactSlice';
 
 const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ["selectSlice"] 
}
const persistedReducer = persistReducer(persistConfig,selectSlice)
export const store = configureStore({ 
  reducer: {
    changed:persistedReducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [homeApi.reducerPath]:homeApi.reducer,
    [contactApi.reducerPath]:contactApi.reducer
   },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck:{
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }}).concat(servicesApi.middleware,aboutApi.middleware,homeApi.middleware,contactApi.middleware)
 
})
 
setupListeners(store.dispatch);
export const persistor = persistStore(store)
