import React from "react";
import BluePoster from "./BluePoster";
import Logo from "../assets/signup-logo.svg";
import { Field } from "formik";
import Tracker from '../assets/trackstp3.png';

const StepThree = ({
  formikProps,
  step,
  nextStep,
  prevStep,
  handleChange,
  error,
}) => {
  const handleNext = () => {
    if (!formikProps.values.email) {
      // Access formikProps.values.email
      alert("Please input email");
    } else {
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
            <img src={Tracker} alt="step-tracker" className=""/>
          </div>
        </div>
        <div className="w-[80%] mt-5 flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Schools Name</label>
            <Field
              className={`border-2 onboard-input rounded-md h-[41px] w-[70%] placeholder:text-sm placeholder:pl-4 text-sm pl-2 bg-white border-[#AFAFAF] ${
                error.fullName ? "border-red-600" : "border-lightgrey"
              }`}
              placeholder="What will be your School's name"
              type="text"
              name="schoolName"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.schoolName}
            />
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <label className="mb-2 text-sm">School's Address</label>
              <div className="flex flex-row gap-4">
                <label className="text-[#1294F2] text-sm">Online Only</label>{" "}
                <label className="text-sm">Physicals School</label>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="w-[14%]">
                <Field
                  className={`border-2  onboard-input rounded-md h-[41px] bg-white placeholder:text-sm text-sm pl-2 placeholder:pl-4 border-[#EFF0F2] ${
                    error.schoolAddress ? "border-red-600" : "border-lightgrey"
                  }`}
                  placeholder="Address"
                  type="text"
                  name="schoolAddress"
                  onChange={formikProps.handleChange} // Use formikProps.handleChange
                  value={formikProps.values.schoolAddress}
                />
              </div>

              <div className="w-[14%]">
                <Field
                  className={`border-2 onboard-input text-sm pl-2 rounded-md h-[41px] bg-white placeholder:text-sm placeholder:pl-4 border-[#AFAFAF] ${
                    error.schoolCountry ? "border-red-600" : "border-lightgrey"
                  }`}
                  placeholder="Country"
                  type="text"
                  name="schoolCountry"
                  onChange={formikProps.handleChange} // Use formikProps.handleChange
                  value={formikProps.values.schoolCountry}
                />
              </div>

              <div className="w-[14%]">
                <Field
                  className={`border-2 onboard-input rounded-md h-[41px] bg-white placeholder:text-sm text-sm pl-2 placeholder:pl-4 border-[#AFAFAF] ${
                    error.schoolCity ? "border-red-600" : "border-lightgrey"
                  }`}
                  placeholder="City"
                  type="text"
                  name="schoolCity"
                  onChange={formikProps.handleChange} // Use formikProps.handleChange
                  value={formikProps.values.schoolCity}
                />
              </div>

              <div className="w-[14%]">
                <Field
                  className={`border-2 onboard-input rounded-md h-[41px] bg-white placeholder:text-sm text-sm pl-2 placeholder:pl-4 border-[#AFAFAF] ${
                    error.schoolZipCode ? "border-red-600" : "border-lightgrey"
                  }`}
                  placeholder="Zipcode"
                  type="text"
                  name="schoolZipCode"
                  onChange={formikProps.handleChange} // Use formikProps.handleChange
                  value={formikProps.values.schoolZipCode}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row w-[70%] justify-between mb-2">
              <label className="text-sm">Organization I.D</label>
              <label className="text-sm">Dont have yet</label>
            </div>
            <Field
              className={`border-2 onboard-input rounded-md h-[41px] w-[70%] placeholder:text-sm placeholder:pl-4 text-sm pl-2 bg-white border-[#AFAFAF] ${
                error.organizationID ? "border-red-600" : "border-lightgrey"
              }`}
              placeholder="Documents will need to be provided"
              type="text"
              name="organizationID"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.organizationID}
            />
          </div>
          {/* <div className="flex flex-col">
            <label className="mb-2 text-sm">Organization Phone</label>
            <Field
              className={`border-2 onboard-input rounded-md h-[41px] w-[70%] placeholder:text-sm placeholder:pl-4 bg-white border-[#AFAFAF] ${
                error.organizationPhone ? "border-red-600" : "border-lightgrey"
              }`}
              placeholder="organizationPhone"
              type="text"
              name="organizationPhone"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.organizationPhone}
            />
          </div> */}
          <div className="flex flex-col">
  <label className="mb-2 text-sm">Organization Phone</label>
  <div className="flex items-center border-2 onboard-input rounded-md h-[41px] w-[70%] bg-white border-[#AFAFAF]">
    <div className="flex items-center pr-2">
      {/* Text and Divider on the left */}
      <p className="text-sm ml-2">+</p>
      <div className="h-4 w-px bg-gray-500 ml-2"></div> {/* Divider */}
    </div>
    <Field
      className={`flex-1 placeholder:text-sm text-sm pl-2 placeholder:pl-2 border-none focus:border-none outline-none bg-transparent ${
        error.organizationPhone ? "text-red-600" : "text-black"
      }`}
      placeholder="For verifications, we won't spam you"
      type="text"
      name="organizationPhone"
      onChange={formikProps.handleChange}
      value={formikProps.values.organizationPhone}
    />
  </div>
</div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm">Organization Mail</label>
            <Field
              className={`border-2 onboard-input rounded-md h-[41px]  w-[70%] placeholder:text-sm placeholder:pl-4 text-sm pl-2 bg-white border-[#AFAFAF] ${
                error.organizationMail ? "border-red-600" : "border-lightgrey"
              }`}
              placeholder="You will be given a VIS mailbox later"
              type="text"
              name="organizationMail"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.organizationMail}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Organization Website</label>
            <Field
              className={`border-2 onboard-input placeholder:text-sm placeholder:pl-4 rounded-md h-[41px] text-sm pl-2 w-[70%] bg-white border-[#AFAFAF] ${
                error.organizationWebsite
                  ? "border-red-600"
                  : "border-lightgrey"
              }`}
              placeholder="Some more links"
              type="text"
              name="organizationWebsite"
              onChange={formikProps.handleChange} // Use formikProps.handleChange
              value={formikProps.values.organizationWebsite}
            />
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <BluePoster step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>
    </div>
  );
};

export default StepThree;
