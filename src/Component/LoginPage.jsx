import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../getapi/getapi';
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


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
    <div className="flex justify-center items-center h-[calc(100vh-48px)]  bg-slate-300 ">
      <div className="bg-slate-100 text-gray-900 p-8 rounded-lg shadow-lg max-w-screen-md w-96 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationschema}


          onSubmit={(values) => {
            console.log('Form data:', values);

            login({
              username: values.email,
              password: values.password
              }).then((res) => {
              console.log(res.data);
              localStorage.setItem("username", res.data.username);
              localStorage.setItem("email", res.data.email);
              localStorage.setItem("Firstname", res.data.firstName);
              localStorage.setItem("image", res.data.image);
              localStorage.setItem("RefreshToken", res.data.refreshToken);
              localStorage.setItem("AccessToken", res.data.accessToken);
              

              const token = localStorage.getItem("AccessToken");
          
              
              if (token) {
                navigate("/products");
              } 
              
            }).catch((error) => {
              console.error("Login error:", error);
              alert("Login failed. Please check your credentials and try again.");
            });
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
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
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
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
