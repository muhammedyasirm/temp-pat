import React from 'react';

const TextSection = ({ title, subtitle, description }) => {
  return (
    <div className=" text-left flex">
      <div className='text-white'>
        {title && (
          <h1 className="text-4xl md-down:text-2xl font-bold mb-4 font-barlow">
            {title}
          </h1>
        )}
        
        {subtitle && (
          <h2 className="text-2xl md-down:text-xl font-bold mb-6 font-barlow">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-lg font-montserrat md-down:text-sm leading-10 md-down:max-w-full  mb-4 md-down:mb-0">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextSection;