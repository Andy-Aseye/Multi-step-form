import React from "react";
import BLuePoster from "../assets/green-symbol.svg";

const GreenPoster = ({formikProps, prevStep}) => {

  const handleSubmit = () => {
    console.log(formikProps);
  }
  return (
    <div className="flex flex-col text-center  bg-[#5DC983] h-[100vh]">
      <div className="flex flex-col">
        <h1 className="font-semibold text-white text-xl mt-4">Lets set up your online School</h1>
        <p className="text-[#95FCB9] my-3">Remember, you can always fill in <br/> the data later on</p>
      </div>
      <div><img src={BLuePoster} alt="blue-logo" className="w-[100%] mt-[-40px]"/></div>
      <div className="flex flex-col w-[70%] mx-auto mt-[10%]">
        <button type="button" className="text-[#5DC983] rounded-md px-4 py-2 bg-white text-lg font-semibold" onClick={handleSubmit()}>Finish</button>
        <button onClick={prevStep} type="button" className="text-white">Back</button>
      </div>
    </div>
  );
};

export default GreenPoster;
