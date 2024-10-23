import React from 'react';
import logo from "../assets/react.svg"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (


    <>
    <nav className=' flex sticky top-0 bg-white shadow-md z-10 pl-2 '>
      <Link to ="/"  className='mt-2'>< img src={logo} alt='reactlogo'  /></Link>
    
      <div className="h-12 p-3 w-full  flex justify-end items-end space-x-8  mr-5">
      
      <Link to ="/profile" className="text-lg font-semibold text-gray-400 hover:text-gray-900">Profile</Link>
      <Link to ="/products" className="text-lg font-semibold text-gray-400 hover:text-gray-900">Products</Link>
      <Link to ="/" className="text-lg font-semibold text-gray-400 hover:text-gray-900">Login</Link>
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;
