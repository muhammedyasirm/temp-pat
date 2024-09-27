import React from "react";

const ServiceBanner = ({ title, subtitle }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-[50%] p-36 bg-[#1B6D7E] flex justify-center items-center">
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-white text-5xl lg:text-8xl font-barlow font-bold">
              {title}
            </h2>
            <span className="text-2xl text-white font-montserrat font-bold mt-4 lg:mt-0 text-end">
              Solutions
            </span>
          </div>
          <svg
            className="absolute bottom-0 right-0 w-full h-36"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="black" points="0,50 100,100 0,100" />
          </svg>
        </div>
        <div className="relative w-full lg:w-[50%] bg-[#0E8D8E]">
          <svg
            className="absolute bottom-0 right-0 w-full h-36"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="black" points="0,100 100,50 100,100" />
          </svg>
        </div>
      </div>
      <div className="bg-black text-white text-xl font-montserrat font-semibold p-4 text-center">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceBanner;
