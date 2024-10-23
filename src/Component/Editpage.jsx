import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

const Editpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = {
    title: "",
    description: "",
    category: "",
    rating: ""
  };

  const [products, setProducts] = useState(data);

  const handlechange = (e) => {
    e.preventDefault();
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const handleupdate = (e) => {
    axios.put(`https://dummyjson.com/products/${id}`, products).then((res) => {
      console.log(res);
    });
    navigate(`/productdetails/${id}`);
  };

  return (
    <div className='flex flex-col justify-center items-center h-[calc(100vh-48px)] bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Edit Product</h2>

        <input
          name="title"
          value={products.title}
          onChange={handlechange}
          placeholder='Title'
          className='mb-4 p-2 border border-gray-300 rounded w-full'
        />
        
        <textarea 
          name='description'
          value={products.description}
          onChange={handlechange}
          placeholder='Description'
          className='mb-4 p-2 border border-gray-300 rounded w-full h-24'
        />

        <input
          name="category"
          value={products.category}
          onChange={handlechange}
          placeholder='Category'
          className='mb-4 p-2 border border-gray-300 rounded w-full'
        />

        <input
          name="rating"
          value={products.rating}
          onChange={handlechange}
          placeholder='Rating'
          className='mb-6 p-2 border border-gray-300 rounded w-full'
        />

        <button 
          onClick={handleupdate} 
          className='bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600'>
          Update
        </button>
      
      </div>
    </div>
  );
}

export default Editpage;
