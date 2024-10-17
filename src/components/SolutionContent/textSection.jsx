import React from 'react';

const TextSection = ({ title, subtitle, description }) => {
  return (
    <div className="lg:w-1/2 text-left md-down:px-5 mb-8 lg:mb-0 flex items-center lg:h-full flex-grow">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">{subtitle}</h2>
        <p className="text-xl text-gray-600 leading-10 md-down:max-w-full mx-auto lg:mx-0 mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TextSection;
