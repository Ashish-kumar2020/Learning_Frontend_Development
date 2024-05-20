import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/commerceSlice";

export const store = configureStore({
  reducer: productReducer,
});
