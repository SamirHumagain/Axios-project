import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import Buttons from "../../Reusable/button";

const Productdetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [editdetails, setEditdetails] = useState({});
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProducts(res.data);
    });
  }, [id]);

  const handleOpen = () => {
    setEditdetails(products);
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
    setProducts(editdetails);
    console.log("Updated product details:", editdetails);
    handleClose();
  };

  const handleAddtocart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productToAdd = { ...products, quantity: count };

    const existingProduct = cart.find((item) => item.id === productToAdd.id);

    if (existingProduct) {
      existingProduct.quantity += count || 1;
    } else {
      cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/addtocart");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-[calc(100vh-48px)] p-4">
        <div className="flex flex-col md:flex-row border-4 rounded-xl shadow-inner p-4 w-full max-w-[800px]">
          <img
            src={products.thumbnail}
            alt={products.title}
            className="w-full h-auto md:w-1/2 rounded-lg"
          />
          <div className=" md:mt-0 md:ml-4 md:w-1/2 ">
            <p className="font-serif text-sm p-1 mt-10">
              <span className="text-red-800"> Title:</span> {products.title}
            </p>
            <p className="font-serif text-sm p-1">
              <span className="text-red-800"> Brand:</span> {products.brand}
            </p>
            <p className="font-serif text-sm p-1">
              <span className="text-red-800"> Price:</span> ${products.price}
            </p>
            <p className="font-serif text-sm p-1">
              <span className="text-red-800"> Category:</span>
              {products.category}
            </p>
            <p className="font-serif text-sm p-1">
              <span className="text-red-800"> Rating:</span> {products.rating}
            </p>
            <p className="font-serif text-sm p-1">
              <span className="text-red-800"> Description:</span>{" "}
              {products.description}
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
              showaddtocart={true}
              handleAddtocart={handleAddtocart}
            />
          </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Product Details</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={editdetails.title || ""}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={editdetails.brand || ""}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={editdetails.price || ""}
              onChange={handlechange}
              margin="dense"
              type="number"
            />
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={editdetails.category || ""}
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
              label="Description"
              name="description"
              value={editdetails.description || ""}
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

export default Productdetails;
