import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/commerceSlice";
import cartReducer from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
