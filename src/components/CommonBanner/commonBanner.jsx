import React from "react";

const CommonBanner = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="relative w-full h-[80vh overflow-hidden">
      <img
        src={imageSrc}
        alt="Banner"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <img
          src="banner-logo2.png"
          alt="Logo"
          className="w-48 h-48 mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-2xl mt-4 text-center">{subtitle}</h2>
        )}
      </div>
    </div>
  );
};

export default CommonBanner;
