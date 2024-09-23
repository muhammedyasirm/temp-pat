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
        What Pro Subscribers build with React Flow
      </h1>
      <p className="text-white text-lg">
        See how our users build custom node-based apps like workflow editors and diagramming tools
      </p>
    </div>
  );
};

export default CaseStudiesHeader;
