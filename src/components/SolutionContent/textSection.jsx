import React from 'react';

const TextSection = ({ title, subtitle, description }) => {
  return (
    <div className="lg:w-1/2 text-left md-down:px-5 mb-8 lg:mb-0 flex items-center lg:h-full flex-grow">
      <div className='text-white'>
        <h1 className="text-4xl font-bold mb-4 font-barlow">{title}</h1>
        <h2 className="text-2xl font-bold mb-6 font-barlow">{subtitle}</h2>
        <p className="text-xl leading-10 md-down:max-w-full mx-auto lg:mx-0 mb-4 font-montserrat">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TextSection;
