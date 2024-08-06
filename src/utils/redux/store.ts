import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {newApi} from "./reducers";
import {rootSlice} from './slices/rootSlice';

const rootReducer = combineReducers({
  ...rootSlice,
     [newApi.reducerPath]: newApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
   
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      newApi.middleware
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
