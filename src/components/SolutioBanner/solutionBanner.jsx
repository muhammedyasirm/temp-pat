import React from 'react';

const SolutionBanner = ({ BannerImage, Title }) => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col lg:flex-row">
        <div
          className="relative w-full pl-32 justify-center items-center py-52"
          style={{ 
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
           }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="relative z-10 flex-col text-center lg:text-right max-w-min lg:block hidden">
            <h2
              className="text-white text-[6.5rem] xl-down:text-[4.5rem] font-barlow font-bold text-left leading-[6rem]"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              {Title}
            </h2>
            <span
              className="text-4xl text-white font-montserrat font-bold mt-6 lg:mt-4 text-right"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              SOLUTION
            </span>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center lg:hidden">
          <div className="relative z-10 text-center">
            <h2
              className="text-white text-5xl lg:text-8xl font-barlow font-bold"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              PAYMENT
            </h2>
            <span
              className="text-2xl text-white font-montserrat font-bold mt-6"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              SOLUTION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionBanner;
