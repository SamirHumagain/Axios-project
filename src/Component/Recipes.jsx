import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../Reusable/button";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res);
        setRecipes(res.data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  const handledetails = (id) => {
    navigate(`/recipedetails/${id}`);
  };

  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="rounded-xl shadow-inner shadow-gray-500/40 md:p-5 sm:p-5 p-5"
        >
          <h1 className="font-serif text-lg  ">Name:{recipe.name}</h1>
          <img src={recipe.image} />
          <p className="font-serif text-sm mt-1">Cuisine: {recipe.cuisine}</p>
          <p className="font-serif text-sm mt-1">
            Difficulty: {recipe.difficulty}
          </p>
          <Buttons
            showdetails={true}
            handleClick={handledetails}
            data={recipe}
          />
        </div>
      ))}
    </div>
  );
};

export default Recipes;
