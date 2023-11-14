import React from "react";
import BluePoster from "./BluePoster";
import Logo from "../assets/signup-logo.svg";
import { Field } from "formik";
import Tracker from "../assets/trackstp2.png";

const StepTwo = ({
  formikProps,
  step,
  nextStep,
  prevStep,
  handleChange,
  error,
}) => {
  const handleNext = () => {
    if (!formikProps.values.id) {
      // Access formikProps.values.email
      alert("Please input email");
    } else {
      // step((prevStep) => prevStep + 1);
      step();
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-[70%] pt-[2%] pl-[5%]">
        <div className="flex flex-row gap-[27%]">
          <div>
            <img src={Logo} alt="logo" className="" />
          </div>
          <div>
            <img src={Tracker} alt="step-tracker" className="" />
          </div>
        </div>
        <div className="flex flex-col gap-[4vh] w-[60%] mt-[5%]">
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Address</label>
            <div className="flex flex-row justify-between">
              <div className="w-[30%]">
                <Field
                  className={`border-[1px] onboard-input rounded-md h-[41px] placeholder:pl-4  placeholder:text-sm text-sm pl-2 bg-white w-[100%]  border-[#AFAFAF] ${
                    error.fullName ? "border-red-600" : "border-lightgrey"
                  }`}
                  placeholder="Country"
                  type="country"
                  name="country"
                  onChange={formikProps.handleChange} // Use formikProps.handleChange
                  value={formikProps.values.country}
                />
              </div>
              <div className="w-[30%]">
                <label></label>
                <Field
                  className={`border-[1px] onboard-input rounded-md h-[41px] placeholder:text-sm placeholder:pl-4 text-sm pl-2 bg-white w-[100%] border-[#AFAFAF] ${
                    error.city ? "border-red-600" : "border-lightgrey"
                  }`}
                  placeholder="City"
                  type="city"
                  name="city"
                  onChange={formikProps.handleChange} // Use formikProps.handleChange
                  value={formikProps.values.city}
                />
              </div>
              <div className="w-[30%]">
                <label></label>
                <Field
                  className={`border-[1px] onboard-input rounded-md h-[41px] placeholder:text-sm placeholder:pl-4 text-sm pl-2 bg-white w-[100%] border-[#AFAFAF] ${
                    error.zipcode ? "border-red-600" : "border-lightgrey"
                  }`}
                  placeholder="Zipcode"
                  type="zipcode"
                  name="zipcode"
                  onChange={formikProps.handleChange} // Use formikProps.handleChange
                  value={formikProps.values.zipcode}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex mb-2 flex-row justify-between">
              <label className="text-sm">I.D</label>
              <div className="flex flex-row gap-3">
                <label className="text-[#1294F2] text-sm">I.D</label>
                <label className="text-[#4D5959] font-light text-sm">
                  Drivers License
                </label>
                <label className="text-[#4D5959] text-sm  font-light">
                  Passport
                </label>
              </div>
            </div>
            <Field
              className={`border-[1px] onboard-input rounded-md h-[41px] w-[100%] placeholder:text-sm placeholder:pl-4 text-sm pl-2 bg-white border-[#AFAFAF] ${
                error.id ? "border-red-600" : "border-lightgrey"
              }`}
              placeholder="Mr education is my passion"
              type="text"
              name="id"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.id}
            />
          </div>
          {/* <div className="flex flex-col">
            <label className="mb-2 text-sm">Mobile Number</label>
            <Field
              className={`border-[1px] onboard-input rounded-md h-[41px] bg-white placeholder:text-sm  border-[#AFAFAF] ${
                error.mobileNumber ? "border-red-600" : "border-lightgrey"
              }`}
              placeholder="Mr education is my passion"
              type="text"
              name="mobileNumber"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.mobileNumber}
            />
          </div> */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Mobile Number</label>
            <div className="flex items-center border-[1px] onboard-input rounded-md h-[41px] bg-white border-[#AFAFAF]">
              <div className="flex items-center pr-2">
                {/* Text and Divider on the left */}
                <p className="text-sm ml-2">+</p>
                <div className="h-4 w-px bg-gray-500 mx-2"></div>{" "}
                {/* Divider */}
              </div>
              <Field
                className={`flex-1 placeholder:text-sm border-none focus:border-none outline-none text-sm  bg-transparent ${
                  error.mobileNumber ? "text-red-600" : "text-black"
                }`}
                placeholder="For verifications, we won't spam you"
                type="text"
                name="mobileNumber"
                onChange={formikProps.handleChange}
                value={formikProps.values.mobileNumber}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm">Personal Mail</label>
            <Field
              className={`border-[1px] onboard-input text-sm pl-2 rounded-md h-[41px] bg-white placeholder:text-sm placeholder:pl-4  border-[#AFAFAF] ${
                error.personalMail ? "border-red-600" : "border-lightgrey"
              }`}
              placeholder="You will be given a VIS mailbox later"
              type="email"
              name="personalMail"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.personalMail}
            />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-[100%]">
              <label className="mb-2 text-sm">Some Links</label>
              <div className="flex flex-row justify-between">
                <div>
                  <Field
                    className={`border-[1px] onboard-input rounded-md h-[41px] placeholder:text-sm text-sm pl-2 placeholder:font-thin placeholder:pl-4 bg-white  border-[#AFAFAF] ${
                      error.personalWebsite
                        ? "border-red-600"
                        : "border-lightgrey"
                    }`}
                    placeholder="Personal Website"
                    type="text"
                    name="personalWebsite"
                    onChange={formikProps.handleChange} // Use formikProps.handleChange
                    value={formikProps.values.personalWebsite}
                  />
                </div>
                <div>
                  <Field
                    className={`border-2 onboard-input rounded-md h-[41px] bg-white placeholder:pl-4 text-sm pl-2 placeholder:text-sm border-[#AFAFAF] ${
                      error.linkedIn ? "border-red-600" : "border-lightgrey"
                    }`}
                    placeholder="LinkedIn Profile"
                    type="text"
                    name="linkedIn"
                    onChange={formikProps.handleChange} // Use formikProps.handleChange
                    value={formikProps.values.linkedIn}
                  />
                </div>
              </div>
            </div>
            {/* <div> */}
            {/* <label>Mobile Number</label> */}

            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <BluePoster step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>
    </div>
  );
};

export default StepTwo;
