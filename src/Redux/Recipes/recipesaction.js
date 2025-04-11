import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchrecipes",
  async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    console.log(response);
    return response.data.recipes;
  }
);
export const deleteRecipe = createAsyncThunk(
  "recipes/deleterecipes",
  async (id) => {
    await axios.delete(`https://dummyjson.com/recipes/${id}`);
    return id;
  }
);
