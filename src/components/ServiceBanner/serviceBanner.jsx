import React from "react";

const ServiceBanner = ({ title, primaryColor, rightImage }) => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col lg:flex-row">
        <div
          className="relative w-full lg:w-[50%] pl-14 justify-center items-center py-40 lg:block hidden"
          style={{ backgroundColor: primaryColor }}
        >
          <div className="flex flex-col text-center lg:text-left max-w-min">
            <h2
              className="text-white text-[6.5rem] xl-down:text-[4.5rem] font-barlow font-bold text-left leading-[6rem]"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              {title}
            </h2>
            <span
              className="text-4xl text-white font-montserrat font-bold mt-6 lg:mt-4 text-right"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              SERVICES
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
              <h2
                className="text-white text-5xl lg:text-8xl font-barlow font-bold"
                style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
              >
                {title}
              </h2>
              <span
                className="text-2xl text-white font-montserrat font-bold mt-6"
                style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
              >
                SERVICES
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