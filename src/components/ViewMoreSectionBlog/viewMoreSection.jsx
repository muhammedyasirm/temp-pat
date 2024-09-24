import React from "react";

const ViewMoreSection = () => {
  return (
    <div className="bg-primary-orange text-white py-8 px-20 md-down:px-4 flex md-down:flex-col items-center justify-between">
      {/* Left section with the text */}
      <div className="max-w-4xl md-down:max-w-[100%]">
        <p className="text-4xl md-down:text-3xl font-semibold leading-[4rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Incididunt ut labore et dolore. dolore magna aliqua. Incididunt ut labore
        </p>
      </div>

      <div className="flex-shrink-0 pr-10 md-down:pr-0">
        <div
          className="text-3xl md-down:text-2xl font-bold cursor-pointer hover:text-white transition duration-300 ease-in-out">
          VIEW MORE
        </div>
      </div>
    </div>
  );
};

export default ViewMoreSection;
