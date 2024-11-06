import React from 'react';

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

<div className=" pr-40 xl-down:p-5 xl-down:py-24 py-16 flex flex-col w-[45%] xl-down:w-full text-left justify-center z-10">
        <h1 className="text-[2rem] leading-[2.3rem] md:text-[2.5rem] md:leading-[2.5rem] xl:text-[4.5rem] xl:leading-[4.5rem] 2xl:text-[5.5rem] 2xl:leading-[5.5rem] font-semibold font-barlow">
          Since 2014,
        </h1>
        <p className="mt-4 text-[2.2rem] lg-down:text-[1.4rem] leading-10 font-montserrat">
          PAT has been enabling{' '}
          <span className="text-primary-orange font-bold">
            profitability
          </span>
          {' '}for its clients and driving substantial value by 
          <span className="text-primary-green font-bold">
            {' '}
            minimizing leakage
          </span>
          {' '}to an acceptable{' '}
          <span className="text-primary-blue font-bold">
          tolerance level.
          </span>
          {/* . Unlock the Possibilities Dive into Our Solutions!
          <br /> */}
          {/* Since 2014, PAT has been enabling profitability for its clients and driving substantial value by minimizing leakage to an acceptable tolerance level. */}
        </p>
      </div>
    </div>
  );
};

export default Banner;