import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material'; 

const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState({});
  const [editdetails, setEditdetails] = useState({});
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center h-[calc(100vh-48px)] p-4'>
        <div className="flex flex-col md:flex-row border-4 rounded-xl shadow-inner p-4 w-full max-w-[800px]">
          <img 
            src={products.thumbnail} 
            alt={products.title} 
            className="w-full h-auto md:w-1/2 rounded-lg" 
          />
          <div className=' md:mt-0 md:ml-4 md:w-1/2 '>
            <p className="font-serif text-sm p-1 mt-10">Title: {products.title}</p>
            <p className="font-serif text-sm p-1">Brand: {products.brand}</p>
            <p className="font-serif text-sm p-1">Price: ${products.price}</p>
            <p className="font-serif text-sm p-1">Category: {products.category}</p>
            <p className="font-serif text-sm p-1">Rating: {products.rating}</p>
            <p className="font-serif text-sm p-1">Description: {products.description}</p>
            <button
              onClick={handleOpen}
              className='font-serif text-sm rounded-xl bg-orange-700 p-2 text-white ml-2'
              type='button'
            >
              Edit
            </button>
          </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Product Details</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={editdetails.title || ''}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={editdetails.brand || ''}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={editdetails.price || ''}
              onChange={handlechange}
              margin="dense"
              type="number"
            />
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={editdetails.category || ''}
              onChange={handlechange}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              value={editdetails.rating || ''}
              onChange={handlechange}
              margin="dense"
              type="number"
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={editdetails.description || ''}
              onChange={handlechange}
              margin="dense"
              multiline
              rows={3}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className='font-serif text-sm rounded-xl bg-red-700'>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className='font-serif text-sm rounded-xl bg-blue-700'>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Productdetails; 