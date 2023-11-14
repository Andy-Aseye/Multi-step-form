import React from "react";
import { Field, ErrorMessage } from "formik";
import Poster from "../assets/step-one-poster.png";
import Logo from "../assets/logo.svg";
import Google from "../assets/Google.svg";

const StepOne = ({ formikProps, step, handleChange, error }) => {
  const handleNext = () => {
    if (!formikProps.values.email) {
      // Access formikProps.values.email
      alert("Please input email");
    } else {
      step((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="flex flex-row h-[100vh]">
      <div className="w-[40%] h-[100vh]">
        <img src={Poster} className="h-[100vh]" alt="image-poster" />
      </div>
      <div className="w-[60%]">
        <div
          className="flex flex-col w-[50%] m-auto items-center justify-center mt-[10vh] h-auto"
          id="form-div"
        >
          <div className="flex flex-row mr-[12%] m-auto mb-6 text-[#1294F2]">
            <img src={Logo} alt="logo" className="mr-6" />
            <h1 className="text-3xl mt-6 font-bold text-center">
              Welcome to VIScool
            </h1>
          </div>
          <div id="form-body" className="w-[100%]">
            <div className="flex flex-col w-full max-w-[450px] self-center mb-8 ">
              <label className="text-[14px] mb-2 text-sm">Full Name</label>
              <Field
                className={`border-b placeholder:pl-4 placeholder:font-normal onboard-input placeholder:text-sm pl-2 text-sm rounded-sm h-[41px] bg-[#EFF0F2] ${
                  error.fullName ? "border-red-600" : "border-lightgrey"
                }`}
                placeholder="Mr education is my passion"
                type="fullName"
                name="fullName"
                onChange={formikProps.handleChange} // Use formikProps.handleChange
                value={formikProps.values.fullName}
              />
              {error?.fullName && (
                <span className="text-red-600 text-xs mt-2">
                  {error?.fullName}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full max-w-[450px] self-center mb-8 ">
              <label className="text-[14px] mb-2 text-sm">Email</label>
              <Field
                className={`border-b onboard-input placeholder:pl-4 placeholder:text-sm text-sm pl-2 placeholder:font-normal rounded-sm h-[41px] bg-[#EFF0F2] ${
                  error.email ? "border-red-600" : "border-lightgrey"
                }`}
                placeholder="Enter your Email here"
                type="email"
                name="email"
                onChange={formikProps.handleChange}
                value={formikProps.values.email}
              />
              {error?.email && (
                <span className="text-red-600 text-xs mt-2">
                  {error?.email}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full max-w-[450px] self-center mb-8 ">
              <label className="text-[14px] mb-2">Password</label>
              <Field
                className={`border-b onboard-input h-[41px] rounded-sm placeholder:pl-4 placeholder:font-normal text-sm pl-2 placeholder:text-sm bg-[#EFF0F2] ${
                  error.password ? "border-red-600" : "border-lightgrey"
                }`}
                placeholder="Enter password"
                type="text"
                name="password"
                onChange={formikProps.handleChange}
                value={formikProps.values.password}
              />
              {error?.password && (
                <span className="text-red-600 text-xs mt-2">
                  {error?.password}
                </span>
              )}
              <p className="text-[#1294F2] mt-2 text-sm font-normal">Let me choose my own password</p>
            </div>

            <div className="ml-[13%] m-auto text-center w-[60%]flex flex-col gap-3">
              <button type="button" onClick={handleNext} className="bg-[#1294F2] text-white text-lg px-[2vw] py-1 rounded-md font-medium">
                Create new School
              </button>
              <p className="text-sm my-3">
                <span className="text-[#4D5959]">Already have an account? </span><a>Log in</a>
              </p>

              <p className="font-normal my-3">
                OR
              </p>

              <button
                type='button'
                className="border border-[#D2D2D2] rounded-sm pl-3 py-1"
              >
                <div className="flex flex-row mx-auto px-6 w-[17vw]">
                  <img src={Google} className="w-9" />
                  <p className="text-xs ml-2 mt-3 font-semibold">
                    Sign up with Google
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
