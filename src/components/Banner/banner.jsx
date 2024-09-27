import React from "react";

const Banner = () => {
  return (
    <div className="relative flex justify-between text-white ">
      <video
        className="absolute w-full h-full object-cover z-0"
        src="/HeaderBg.mp4"
        autoPlay
        loop
        muted
      ></video>

        <img
          src="/headerLogo.png"
          alt="Banner Logo"
          className="w-[33%] object-contain pt-4 z-10 xl-down:hidden object-bottom"
        />

      <div className=" pr-16 xl-down:p-5 xl-down:py-24 py-16 flex flex-col w-[45%] xl-down:w-full text-left justify-center z-10">
        <h1 className="text-[2rem] leading-[2.3rem] md:text-[2.5rem] md:leading-[2.5rem] xl:text-[4.5rem] xl:leading-[4.5rem] 2xl:text-[5.5rem] 2xl:leading-[5.5rem] font-semibold font-barlow">
          WELCOME
        </h1>
        <p className="mt-4 text-[1.8rem] lg-down:text-[1.4rem] leading-10 font-montserrat">
          Definitive & Versatile. Protect your operations from fraud by{" "}
          <span className="text-primary-orange font-bold">fraud management</span>
          . Detect and stop revenue leakages, maximize profits with 
          <span className="text-primary-blue font-bold">
            {" "}
            revenue assurance
          </span>
          .Ensure efficiency & effectiveness by {" "}
          <span className="text-primary-green font-bold">maturity assessment</span>
          and gain insights from our team of experts.<br/>
          <span className="font-semibold">Boost your profit today!</span> 
        </p>
      </div>
    </div>
  );
};

export default Banner;
