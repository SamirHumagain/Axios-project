import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./loginpage/authslice";
import productsReducer from "./products/productslice";
import recipesReducer from "./Recipes/recipeslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    recipes: recipesReducer,
  },
});
