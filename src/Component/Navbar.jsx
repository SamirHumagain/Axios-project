import React from "react";
import logo from "../assets/react.svg";
import { Link, useNavigate } from "react-router-dom";
import { isAuthentication } from "../auth";
import ReusablePopup from "./modal";

const Navbar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("AccessToken");
    navigate("/login");
  }

  return (
    <nav className="flex sticky top-0 bg-white shadow-md z-10 pl-2">
      <Link to="/" className="mt-2">
        <img src={logo} alt="reactlogo" />
      </Link>

      <div className="h-12 p-3 w-full flex justify-end items-end space-x-8 mr-5">
        {isAuthentication() ? (
          <>
            <ReusablePopup
              trigger={
                <button className="text-lg font-semibold text-gray-400 hover:text-gray-900">
                  Add User
                </button>
              }
            />
            <Link
              to="/profile"
              className="text-lg font-semibold text-gray-400 hover:text-gray-900"
            >
              Profile
            </Link>
            <Link
              to="/products"
              className="text-lg font-semibold text-gray-400 hover:text-gray-900"
            >
              Products
            </Link>
            <Link
              to="/recipes"
              className="text-lg font-semibold text-gray-400 hover:text-gray-900"
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
