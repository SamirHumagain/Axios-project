import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./loginpage/authslice";
import productsReducer from "./products/productslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});
