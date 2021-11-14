import { configureStore } from "@reduxjs/toolkit";
import { phoneBookApi } from "./phoneBookApi"


const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(phoneBookApi.middleware),
  devTools: process.env.NODE_ENV === "development",
});

export default { store };
