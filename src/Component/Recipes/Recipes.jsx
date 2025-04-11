import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../Reusable/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, deleteRecipe } from "../../Redux/Recipes/recipesaction";
import { setSearchRecipe } from "../../Redux/Recipes/recipeslice";
import Confirmtoaster from "../../Reusable/Confirmtoaster";

const Recipes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { recipes = [], search } = useSelector((state) => state.recipes);

  const [showConfirm, setShowConfirm] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handledetails = (id) => {
    navigate(`/recipedetails/${id}`);
  };

  const handleDelete = (id) => {
    setRecipeToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (recipeToDelete) {
      dispatch(deleteRecipe(recipeToDelete));
      setRecipeToDelete(null);
      setShowConfirm(false);
    }
  };

  const cancelDelete = () => {
    setRecipeToDelete(null);
    setShowConfirm(false);
  };

  const handleSearch = (e) => {
    dispatch(setSearchRecipe(e.target.value));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="mb-4 p-1 border border-gray-300 rounded w-96 mt-4"
        placeholder="Search recipe"
        value={search}
        onChange={handleSearch}
        name="search"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="rounded-xl shadow-inner shadow-gray-500/40 md:p-5 sm:p-5 p-5"
          >
            <h1 className="font-serif text-lg">Name: {recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <p className="font-serif text-sm mt-1">Cuisine: {recipe.cuisine}</p>
            <p className="font-serif text-sm mt-1">
              Difficulty: {recipe.difficulty}
            </p>
            <Buttons
              showdetails={true}
              handleClick={handledetails}
              data={recipe}
              showdelete={true}
              handleDelete={() => handleDelete(recipe.id)}
            />
          </div>
        ))}
      </div>

      {showConfirm && (
        <Confirmtoaster
          message="Are you sure you want to delete this recipe?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Recipes;
