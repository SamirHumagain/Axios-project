import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./form.css";

export const Signup = () => {
  const navigate = useNavigate();

  const validate = yup.object({
    name: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Mininum characters should be 8"),
    confirmPasssword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
    address: yup.string().required("This field is required"),
  });

  function submit(values) {
    const userData = {
      ...values,
      email: values.email,
      password: values.password,
    };

    localStorage.setItem("email", JSON.stringify(userData.email));
    localStorage.setItem("password", JSON.stringify(userData.password));
    navigate("/profile");
  }

  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPasssword: "",
          }}
          validationSchema={validate}
          onSubmit={submit}
        >
          {({}) => (
            <Form className="   w-[30em] py-8 border border-[#ddd] rounded-lg bg-[#f9f9f9] shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
              <div className=" grid place-items-center">
                <span className="text-[3em] text-black text-center">
                  Sign Up
                </span>
                <div className="mt-[1em]">
                  <div className="custom-div">
                    <Field
                      type="text"
                      name="name"
                      className="custom-input"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="p" />
                  </div>
                  <div className="custom-div">
                    <Field
                      type="email"
                      name="email"
                      className="custom-input"
                      placeholder="Enter your email"
                    />

                    <ErrorMessage name="email" component="p" />
                  </div>
                  <div className="custom-div">
                    <Field
                      type="password"
                      name="password"
                      className="custom-input"
                      placeholder="Enter your Password"
                    />
                    <ErrorMessage name="password" component="p" />
                  </div>
                  <div className="custom-div">
                    <Field
                      type="password"
                      name="confirmPasssword"
                      className="custom-input"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage name="confirmPasssword" component="p" />
                  </div>
                  <div className="custom-div">
                    <Field
                      type="text"
                      name="address"
                      className="custom-input"
                      placeholder="Enter your address"
                    />
                    <ErrorMessage name="address" component="p" />
                  </div>
                  <div className="custom-div">
                    <ErrorMessage name="date" component="p" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-[18em] bg-[#1976D2] text-white border-none rounded px-[1.5rem] py-[0.7rem] text-[1rem] hover:opacity-85 transition duration-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
