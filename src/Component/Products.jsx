import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`https://dummyjson.com/products/${id}`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    }).catch(error => {
      console.error("Error deleting product:", error);
    });
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    }).catch(error => {
      console.error("Error fetching products:", error);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <input
         className="mb-4 p-1 border border-gray-300 rounded w-96 mt-4"
          placeholder="Search product"
          value={search}
          onChange={handleSearch}
          name="search"
          
        />
      </div>

      <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4'>
        {filteredProducts.map((data) => (
          <div key={data.id} className=" rounded-xl shadow-inner shadow-gray-500/40 md:p-5 sm:p-5 p-5 ">
            <p className='font-serif text-lg  '>{data.title}</p>
            <img src={data.thumbnail} alt='thumbnail' />
            <p className="font-serif text-sm mt-1">Brand: {data.brand}</p>
            <p className="font-serif text-sm mt-1">Price: {data.price}</p>
            <p className="font-serif text-sm mt-1">Category: {data.category}</p>
            <p className="font-serif text-sm mt-1">Rating: {data.rating}</p>
            <button onClick={() => handleClick(data.id)}
              className='font-serif text-sm rounded-xl bg-blue-700 p-2 text-white mt-1' type='button'>Details</button>
            <button onClick={() => handleDelete(data.id)}
              className='font-serif text-sm rounded-xl bg-red-700 p-2 text-white ml-2' type='button'>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
