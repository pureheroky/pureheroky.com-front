import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slices/navigationSlice";
import dataReducer from "./slices/dataSlice";
import openProjectReducer from "./slices/openProjectSlice";
import { dataApi } from "./api/dataApi";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    data: dataReducer,
    openProject: openProjectReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
