import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../getapi/getapi';
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import image from "../assets/340366-PAPUKD-986.jpg";
import logo from "../assets/bird_2.jpg";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const initialValues = {
    email: '',
    password: ''
  };

  const validationschema = Yup.object({
    email: Yup.string().required('This field is Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('This field is Required')
  });

  return (
    <div className="flex h-[calc(100vh-48px)]">
      
      <div className="hidden md:block md:w-1/2">
        <img src={image} alt="background" className="h-full w-full object-cover" />
      </div>

      
      <div className="w-full md:w-1/2 flex items-center justify-center text-gray-900  rounded-lg shadow-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationschema}
          onSubmit={(values) => {
            login({
              username: values.email,
              password: values.password
            }).then((res) => {
              localStorage.setItem("username", res.data.username);
              localStorage.setItem("email", res.data.email);
              localStorage.setItem("Firstname", res.data.firstName);
              localStorage.setItem("image", res.data.image);
              localStorage.setItem("RefreshToken", res.data.refreshToken);
              localStorage.setItem("AccessToken", res.data.accessToken);
              
              if (localStorage.getItem("AccessToken")) {
                navigate("/products");
              }
            }).catch((error) => {
              alert("Login failed. Please check your credentials and try again.");
            });
          }}
        >        
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="px-2 w-full max-w-md h-full">
              <img src={logo} alt="login" className="w-full h-56 object-cover rounded mt-5 "/>
              <h1 className="text-3xl font-serif text-center mb-1">Welcome Back!</h1>
              <p className="text-center font-serif text-sm mb-6 opacity-40">Please sign in to your account</p>

              <div className="mb-4 relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="flex items-center">
                  <MdEmail className="absolute left-3 top-10 text-gray-500" />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {touched.email && errors.email ? <div className="text-red-600 text-sm">{errors.email}</div> : null}
              </div>

              <div className="mb-6 relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="flex items-center">
                  <RiLockPasswordFill className="absolute left-3 top-10 text-gray-500" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                {touched.password && errors.password ? <div className="text-red-600 text-sm">{errors.password}</div> : null}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 
                rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
