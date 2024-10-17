import React from 'react';

const CaseStudiesHeader = () => {
  return (
    <div className="text-center py-6 bg-[#1C1C1C]">
      <div className="text-white font-semibold text-sm mb-2 flex justify-center items-center space-x-1">
        <img
              src="/headerLogo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
        <span>CASE STUDIES</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Success Stories: Financial Growth Solutions
      </h1>
      <p className="text-white text-lg">
        Discover how we've helped clients overcome challenges and achieve financial growth through tailored solutions. Our case studies showcase real-world results and the impact of our expertise.
      </p>
    </div>
  );
};

export default CaseStudiesHeader;
