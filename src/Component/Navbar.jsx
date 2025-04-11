import React from "react";
import logo from "../assets/react.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isAuthentication } from "../auth";
import { PiShoppingCartFill } from "react-icons/pi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem("AccessToken");
    navigate("/login");
  }

  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 underline" : "text-gray-400";

  return (
    <nav className="flex sticky top-0 bg-white shadow-md z-10 pl-2">
      <Link className="mt-2">
        <img src={logo} alt="reactlogo" />
      </Link>

      <div className="h-12 p-3 w-full flex justify-end items-end space-x-8 mr-5">
        {isAuthentication() ? (
          <>
            <Link
              to="/addtocart"
              className={`text-xl font-semibold mb-1 ${isActive(
                "/addtocart"
              )} hover:text-gray-900`}
            >
              <PiShoppingCartFill />
            </Link>
            <Link
              to="/profile"
              className={`text-lg font-semibold ${isActive(
                "/profile"
              )} hover:text-gray-900`}
            >
              Profile
            </Link>
            <Link
              to="/products"
              className={`text-lg font-semibold ${isActive(
                "/products"
              )} hover:text-gray-900`}
            >
              Products
            </Link>
            <Link
              to="/recipes"
              className={`text-lg font-semibold ${isActive(
                "/recipes"
              )} hover:text-gray-900`}
            >
              Recipes
            </Link>
            <button
              onClick={handleLogout}
              className="text-lg font-semibold text-gray-400 hover:text-gray-900"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/signup"
            className="text-lg font-semibold text-gray-400 hover:text-gray-900"
          >
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
