import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Buttons from "../../Reusable/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const Recipedetails = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState({});
  const [editdetails, setEditdetails] = useState({});
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`).then((res) => {
      setRecipes(res.data);
    });
  }, [id]);

  console.log("recipes", recipes);

  const handleOpen = () => {
    setEditdetails(recipes);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlechange = (e) => {
    setEditdetails({
      ...editdetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setRecipes(editdetails);
    console.log("Updated product details:", editdetails);
    handleClose();
  };

  const handleAddtocart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const recipesToAdd = { ...recipes, quantity: count };

    const existingRecipes = cart.find((item) => item.id === recipesToAdd.id);

    if (existingRecipes) {
      existingRecipes.quantity += count || 1;
    } else {
      cart.push(recipesToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/addtocart");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-[calc(100vh-48px)] p-4">
        <div className="flex flex-col md:flex-row border-4 rounded-xl shadow-inner p-4 w-full max-w-[800px]">
          <img
            src={recipes.image}
            alt={recipes.title}
            className="w-full h-auto md:w-1/2 rounded-lg"
          />
          <div className=" md:mt-0 md:ml-4 md:w-1/2 ">
            <p className="font-serif text-sm p-1 mt-10">
              <span className=" text-red-800 "> Name:</span> {recipes.name}
            </p>
            <p className="font-serif text-sm p-1">
              <span className=" text-red-800 "> Cuisine:</span>
              {recipes.cuisine}
            </p>
            <p className="font-serif text-sm p-1">
              <span className=" text-red-800 "> Difficulty:</span>{" "}
              {recipes.difficulty}
            </p>
            <p className="font-serif text-sm p-1">
              <span className=" text-red-800 "> Tags:</span>
              {recipes.tags}
            </p>
            <p className="font-serif text-sm p-1 ">
              <span className=" text-red-800 "> Rating:</span> {recipes.rating}
            </p>
            <p className="font-serif text-sm p-1">
              <span className="text-red-800 text-lg">Instructions:</span>
              {recipes.instructions}
            </p>
            <div className="flex  p-2 text-xl font-semibold">
              <button
                onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                className="px-2 bg-slate-200 rounded-md "
              >
                -
              </button>
              <p className="text-lg  px-2">{count}</p>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="px-2 bg-slate-200 rounded-md "
              >
                +
              </button>
            </div>
            <Buttons
              handleOpen={handleOpen}
              showedit={true}
              showaddtocart={false}
              handleAddtocart={handleAddtocart}
            />
          </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Recipes Details</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={editdetails.name || ""}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="cuisine"
              name="cuisine"
              value={editdetails.cuisine || ""}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Difficulty"
              name="difficulty"
              value={editdetails.difficulty || ""}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Tags"
              name="tags"
              value={editdetails.tags || ""}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              value={editdetails.rating || ""}
              onChange={handlechange}
              margin="dense"
              type="number"
            />
            <TextField
              fullWidth
              label="Instructions"
              name="instructions"
              value={editdetails.instructions || ""}
              onChange={handlechange}
              margin="dense"
              multiline
              rows={3}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              className="font-serif text-sm rounded-xl bg-red-700"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="font-serif text-sm rounded-xl bg-blue-700"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default Recipedetails;
