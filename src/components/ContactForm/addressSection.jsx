import React from 'react';

const AddressSection = () => {
  return (
    <div className="w-1/2 lg-down:w-full px-8 md:px-16 py-20 text-white space-y-8 flex flex-col justify-start">
      <div className="flex items-center space-x-4 text-lg font-montserrat md-down:text-sm">
        <img src="/blue-cube.png" alt="Email Icon" className="w-8 h-8" />
        <span>info@profit-assurance.com</span>
      </div>
      <div className="flex items-center space-x-4 text-lg font-montserrat md-down:text-sm">
        <img src="/green-cube.png" alt="Phone Icon" className="w-8 h-8" />
        <span>+971 4 4919588</span>
      </div>
      <div className="flex items-center space-x-4 text-lg font-montserrat md-down:text-sm">
        <img src="/orange-cube.png" alt="Location Icon" className="w-8 h-8" />
        <span>
          Al Durrah4 - SBK Building, 305 - Al Garhoud <br />
          Dubai, United Arab Emirates
        </span>
      </div>
      <p className="mt-10 text-lg font-montserrat md-down:text-sm">
        Reach out to us for more information about how we can help optimize your
        revenue assurance and fraud management processes. Our team is ready to
        assist you with personalized solutions to meet your business needs.
      </p>
    </div>
  );
};

export default AddressSection;
