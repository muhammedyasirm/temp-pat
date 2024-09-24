import React from "react";
import InfoList from "../InfoList/infoList";

const ProfitAssurance = () => {
  return (
    <div className="bg-black text-white py-16 px-24 md-down:px-6 relative">
      <div className="absolute top-0 left-[25%] w-[50%] h-1 flex bg-primary-green"></div>
      <div className="flex gap-28 justify-center lg-down:flex-col">
        <div className="flex flex-col w-[40%] lg-down:w-full">
          <div className="text-left mb-12 mt-4">
            <img
              src="/pat-text-white.png"
              alt="Profit Assurance Technology"
              className="h-[11rem] md-down:h-[9rem]"
            />
          </div>
          <div className="text-left mt-5 md-down:mt-0">
            <h3 className="text-4xl md-down:text-xl font-semibold mb-4 font-montserrat">
              Enabling profitability for clients{" "}
              <span className="text-primary-green font-bold">since 2014</span>,
            </h3>
            <p className="text-lg md-down:text-lg leading-relaxed font-montserrat">
              based in Dubai, we are a trusted partner for revenue protection
              and optimization. With a proven track record across Africa and
              Asia, we help telecom operators safeguard their revenue streams
              and enhance profitability through innovative services and tailored
              solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-10 w-[42%] lg-down:w-full ">
          <InfoList />
        </div>
      </div>
    </div>
  );
};

export default ProfitAssurance;
