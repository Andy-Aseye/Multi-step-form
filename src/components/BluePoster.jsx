import React from "react";
import BLuePoster from "../assets/green-symbol.svg";

const BluePoster = ({step, nextStep, prevStep}) => {
  return (
    <div className="flex flex-col text-center  bg-[#1294F2] h-[100vh]">
      <div className="flex flex-col">
        <h1 className="font-semibold text-white text-xl mt-3">Lets set up your online School</h1>
        <p className="text-[#85CCFF] my-2">Remember, you can always fill in <br/> the data later on</p>
      </div>
      <div><img src={BLuePoster} alt="blue-logo" className="w-[100%] mt-[-40px]"/></div>
      <div className="flex flex-col w-[70%] mx-auto mt-[13%]">
        <button className="text-[#1294F2] rounded-md px-4 py-1 bg-white text-lg font-semibold" type="button" onClick={
          nextStep}>Next</button>
        <button onClick={prevStep} className="text-white mt-2">Back</button>
      </div>
    </div>
  );
};

export default BluePoster;
