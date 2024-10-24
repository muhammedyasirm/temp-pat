import React from "react";

const ServiceBanner = ({ title, subtitle, primaryColor, rightImage }) => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col lg:flex-row">
        {/* Left Section (Hidden on small screens) */}
        <div
          className="relative w-full lg:w-[50%] p-36  justify-center items-center py-40 lg:block hidden"
          style={{ backgroundColor: primaryColor }}
        >
          <div className="flex flex-col text-center lg:text-left max-w-min">
            <h2 className="text-white text-4xl lg:text-7xl font-barlow font-bold text-left">
              {title}
            </h2>
            <span className="text-2xl text-white font-montserrat font-bold mt-6 lg:mt-4 text-right">
              Services
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

        <div
          className="relative w-full lg:w-[50%] lg:h-auto h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${rightImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center lg:hidden">
            <div className="text-center">
              <h2 className="text-white text-5xl lg:text-8xl font-barlow font-bold">
                {title}
              </h2>
              <span className="text-2xl text-white font-montserrat font-bold mt-6">
                Services
              </span>
            </div>
          </div>

          <svg
            className="absolute bottom-0 right-0 w-full h-36 lg:block hidden"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="black" points="0,100 100,50 100,100" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;