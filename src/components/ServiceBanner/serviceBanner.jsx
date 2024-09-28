import React from "react";

const ServiceBanner = ({ title, subtitle, primaryColor, secondaryColor }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-[50%] p-36 flex justify-center items-center py-40"
          style={{ backgroundColor: primaryColor }}
        >
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
        <div className="relative w-full lg:w-[50%]"
          style={{ 
            backgroundColor: secondaryColor,
            backgroundImage: `url('/analytics-bg.png')`,
            backgroundSize: ' 100% 90%',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay',
          }}
        >
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
