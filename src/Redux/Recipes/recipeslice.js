import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, deleteRecipe } from "./recipesaction";

const initialState = {
  recipes: [],
  search: "",
  error: null,
  loading: false,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSearchRecipe: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.recipes = state.recipes.filter(
          (recipe) => recipe.id !== action.payload
        );
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setSearchRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
