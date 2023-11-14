import React from "react";
import GreenPoster from "./GreenPoster";
import Logo from "../assets/signup-logo.svg";
import { Field } from "formik";
import Tracker from "../assets/trackstp4.png";
import Arrow from "../assets/arrow.svg";
import Square from "../assets/square.svg";

const StepFour = ({ formikProps, step, prevStep, handleChange, error }) => {
  const handleNext = () => {
    if (!formikProps.values.email) {
      // Access formikProps.values.email
      alert("Please input email");
    } else {
      step((prevStep) => prevStep + 1);
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
        <div className="flex flex-col gap-[3vh] w-[60%] mt-[5%]">
          <div className="">
            <label className="text-sm">School Colors</label>
            <div className="flex flex-row justify-between mt-2">
              <div className="flex items-center border-2 onboard-input rounded-sm h-[41px] bg-white border-[#EFF0F2]">
                <Field
                  className={`flex-1 placeholder:text-sm placeholder:pl-4 border-none focus:border-none outline-none bg-transparent ${
                    error.primaryColor ? "text-red-600" : "text-black"
                  }`}
                  placeholder="Primary Color"
                  type="select"
                  name="primaryColor"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.primaryColor}
                />
                <div className="flex items-center pl-2 pr-4">
                  {/* Text and Divider on the right */}
                  <div className="h-4 w-px bg-gray-500 mx-2"></div>{" "}
                  {/* Divider */}
                  <div className="flex flex-row gap-2">
                    <img src={Square} alt="square" />
                    <img src={Arrow} alt="drop-down" />
                  </div>
                </div>
              </div>

              <div className="flex items-center border-2 onboard-input rounded-sm h-[41px] bg-white border-[#EFF0F2]">
                <Field
                  className={`flex-1 placeholder:text-sm placeholder:pl-4 border-none focus:border-none outline-none bg-transparent ${
                    error.secondaryColor ? "text-red-600" : "text-black"
                  }`}
                  placeholder="Secondary Color"
                  type="select"
                  name="secondaryColor"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.primaryColor}
                />
                <div className="flex items-center pl-2 pr-4">
                  {/* Text and Divider on the right */}
                  <div className="h-4 w-px bg-gray-500 mx-2"></div>{" "}
                  {/* Divider */}
                  <div className="flex flex-row gap-2">
                    <img src={Square} alt="square" />
                    <img src={Arrow} alt="drop-down" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex flex-row justify-between">
                <label className="text-sm">Upload school logo</label>
                <label className="text-sm text-[#838383]">Dont have yet</label>
              </div>

              <Field
                className={`border-2 w-[100%] placeholder:text-sm placeholder:pl-3 text-sm pl-3 onboard-input rounded-sm h-[41px] bg-white border-[#EFF0F2] ${
                  error.schoolLogo ? "border-red-600" : "border-lightgrey"
                }`}
                placeholder="Click here to upload from your computer, or paste a link"
                type="text"
                name="schoolLogo"
                onChange={formikProps.handleChange} // Use formikProps.handleChange
                value={formikProps.values.schoolLogo}
              />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-thin text-[#8FC9F1]">
                  you can also do it later
                </label>
                <label className="text-xs font-thin text-[#8FC9F1]">
                  Only jpg and jpeg files for now
                </label>
                <label className="text-xs font-thin text-[#8FC9F1]">
                  No bigger than 20MB
                </label>
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-2">
              <label className="text-sm">School Type</label>
              <p className="text-xs font-extralight text-[#838383]">
                Is it a public school, funded by the goverement or a private
                school
              </p>
              <div className="flex flex-row gap-4">
                <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                  <Field
                    type="radio"
                    className="border-blue-500 focus:ring-blue-500"
                  />
                  <label className="text-xs  text-[#838383]">
                    Private School
                  </label>
                </div>

                <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                  <Field type="radio" />
                  <label className="text-xs  text-[#838383]">
                    Public School
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <label className="text-sm">School Purpose</label>
              <p className="text-xs font-extralight text-[#838383]">
                What is the purpose of your school?
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-4">
                  <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                    <Field type="radio" />
                    <label className="text-xs text-[#838383]">K-12</label>
                  </div>
                  <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                    <Field type="radio" />
                    <label className="text-xs text-[#838383]">
                      Middle School
                    </label>
                  </div>
                  <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                    <Field type="radio" />
                    <label className="text-xs text-[#838383]">Highschool</label>
                  </div>
                  <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                    <Field type="radio" />
                    <label className="text-xs text-[#838383]">College</label>
                  </div>
                  <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                    <Field type="radio" />
                    <label className="text-xs text-[#838383]">University</label>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-3">
                  <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                    <Field type="radio" className="text-blue-500" />
                    <label className="text-xs mt-[1%] text-[#838383]">
                      Technician School
                    </label>
                  </div>
                  <div className="border py-1 px-2 border-blue-500 flex flex-row gap-2 rounded-3xl">
                    <Field type="radio" />
                    <label className="text-xs mt-[2%] text-[#838383]">
                      Online School
                    </label>
                  </div>
                </div>
                <p className="text-xs text-[#8FC9F1]">
                  You can select more than one option
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <p className="text-sm">Invite your teammates</p>
              <p className="text-xs text-[#838383]">
                from here, you can add other collaborators. they will have the
                same permissions you have
              </p>
              <div className="mt-3">
                <label className="text-sm">Teammates 1</label>
                <div className="flex items-center mt-2 border-[1px] onboard-input rounded-md h-[41px] bg-white border-[#AFAFAF]">
                  <Field
                    className={`flex-1 placeholder:text-sm border-none focus:border-none outline-none pl-3 text-sm bg-transparent ${
                      error.mobileNumber ? "text-red-600" : "text-black"
                    }`}
                    placeholder="Add email here"
                    type="text"
                    name="mobileNumber"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.mobileNumber}
                  />
                  <div className="flex items-center pr-7">
                    <div className="h-4 w-px bg-gray-500 mx-2"></div>{" "}
                    {/* Divider */}
                    {/* Text and Divider on the left */}
                    <p className="text-sm ml-2">Admin</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label className="text-sm">Teammates 2</label>
                <div className="flex items-center mt-2 border-[1px] onboard-input rounded-md h-[41px] bg-white border-[#AFAFAF]">
                  <Field
                    className={`flex-1 placeholder:text-sm border-none focus:border-none outline-none text-sm pl-3 bg-transparent ${
                      error.mobileNumber ? "text-red-600" : "text-black"
                    }`}
                    placeholder="Add email here"
                    type="text"
                    name="mobileNumber"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.mobileNumber}
                  />
                  <div className="flex items-center pr-7">
                    <div className="h-4 w-px bg-gray-500 mx-2"></div>{" "}
                    {/* Divider */}
                    {/* Text and Divider on the left */}
                    <p className="text-sm ml-2">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <GreenPoster formikProps={formikProps} prevStep={prevStep} />
      </div>
    </div>
  );
};

export default StepFour;
