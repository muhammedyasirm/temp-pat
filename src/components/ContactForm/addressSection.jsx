import React from "react";

const AddressSection = () => {
  return (
    <div className="w-1/2 lg-down:w-full px-8 md:px-16 py-10 text-white space-y-8 flex flex-col justify-center">
      <div className="text-left mb-12 mt-4">
        <img
          src="/contact.png"
          alt="Profit Assurance Technology"
          className="h-[15rem] md-down:h-[9rem]"
        />
      </div>
      <div className="flex items-center space-x-4 text-lg font-montserrat md-down:text-sm">
        <img src="/blue-cube.png" alt="Email Icon" className="w-8 h-8" />
        <span>PROAITECHNO@GMAIL.COM</span>
      </div>
      <div className="flex items-center space-x-4 text-lg font-montserrat md-down:text-sm">
        <img src="/green-cube.png" alt="Phone Icon" className="w-8 h-8" />
        <span>+971234567890</span>
      </div>
      <div className="flex items-center space-x-4 text-lg font-montserrat md-down:text-sm">
        <img src="/orange-cube.png" alt="Location Icon" className="w-8 h-8" />
        <span>Diera - Garhoud Office 305 - Al Durrah 4 SBK</span>
      </div>
      <p className="mt-10 text-lg font-montserrat md-down:text-sm">
        Reach out to us for more information about how we can help optimize your revenue assurance
        and fraud management processes. Our team is ready to assist you with personalized solutions
        to meet your business needs.
      </p>
    </div>
  );
};

export default AddressSection;
