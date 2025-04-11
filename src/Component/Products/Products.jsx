import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
} from "../../Redux/products/productaction";
import { setSearch } from "../../Redux/products/productslice";
import { useNavigate } from "react-router-dom";
import Buttons from "../../Reusable/button";
import Confirmtoaster from "../../Reusable/Confirmtoaster";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    products = [],
    loading,
    error,
    search,
  } = useSelector((state) => state.products);

  const [showConfirm, setShowConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const handleDelete = (id) => {
    setProductToDelete(id);

    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      dispatch(deleteProduct(productToDelete));
      setProductToDelete(null);
      setShowConfirm(false);
    }
  };

  const cancelDelete = () => {
    setProductToDelete(null);
    setShowConfirm(false);
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const filteredProducts = products.filter((product) =>
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

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {filteredProducts.map((data) => (
            <div
              key={data.id}
              className="rounded-xl shadow-inner shadow-gray-500/40 md:p-5 sm:p-5 p-5"
            >
              <p className="font-serif text-lg">{data.title}</p>
              <img src={data.thumbnail} alt="thumbnail" />
              <p className="font-serif text-sm mt-1">Brand: {data.brand}</p>
              <p className="font-serif text-sm mt-1">Price: {data.price}</p>
              <p className="font-serif text-sm mt-1">
                Category: {data.category}
              </p>
              <p className="font-serif text-sm mt-1">Rating: {data.rating}</p>
              <Buttons
                handleClick={handleClick}
                handleDelete={handleDelete}
                data={data}
                showdetails={true}
                showdelete={true}
              />
            </div>
          ))}
          {showConfirm && (
            <Confirmtoaster
              message="Are you sure you want to delete this product?"
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Products;
