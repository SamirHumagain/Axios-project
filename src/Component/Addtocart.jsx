import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="border p-4 rounded-md">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 border-b pb-2"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 rounded-md"
                />

                <p>{item.title}</p>

                <div className="flex  p-2 text-xl font-semibold">
                  <p className="px-3 font-normal text-lg"> Qty: </p>
                  <button
                    className="px-2 bg-slate-200 rounded-md "
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <p className="text-lg  px-2">{item.quantity}</p>
                  <button
                    className="px-2 bg-slate-200 rounded-md "
                    onClick={() => updateQuantity(item.id, +1)}
                  >
                    +
                  </button>
                </div>
                <p>${item.price}</p>
                <button
                  className="bg-red-500 text-white px-3 py-2 rounded-md"
                  onClick={() => handleRemove(item.id)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Total Amount: ${getTotalAmount()}
            </h3>
            <button
              className="bg-green-600 text-white px-4 py-2 mt-3 rounded-md"
              onClick={() => alert("Proceed to Checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}

      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={() => navigate("/products")}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default AddToCart;
