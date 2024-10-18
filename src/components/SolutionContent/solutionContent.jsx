import React from 'react';
import TextSection from './textSection';

const SolutionContent = (
  { 
    subheading, 
    highlighted, 
    description, 
    image,
    subheading2,
    highlighted2,
    description2,
    image2
  }
) => {
  return (
    <div className='bg-[#1C1C1C]'>
      <div className="text-center py-8 flex flex-col lg:flex-row items-stretch max-w-[80%] gap-10 md-down:max-w-full mx-auto">
      <TextSection 
        title={subheading} 
        subtitle={highlighted} 
        description={description}
      />
      
      <div className="lg:w-1/2 h-full flex-grow">
        <img
          src={image}
          alt={subheading}
          className="h-full w-full object-cover shadow-md"
        />
      </div>
    </div>
    <div className="text-center py-8 flex flex-col lg:flex-row items-stretch max-w-[80%] gap-10 md-down:max-w-full mx-auto">
    <div className="lg:w-1/2 h-full flex-grow">
        <img
          src={image2}
          alt={subheading2}
          className="h-full w-full object-cover shadow-md"
        />
      </div>
      <TextSection 
        title={subheading2} 
        subtitle={highlighted2} 
        description={description2}
      />
    </div>
    <div
      className="h-96 bg-cover bg-center w-[80%] mx-auto rounded mb-4"
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
    <div className="text-center py-8 flex flex-col lg:flex-row items-stretch gap-10 max-w-[80%] md-down:max-w-full mx-auto">
      <TextSection 
        title={subheading} 
        subtitle={highlighted} 
        description={description}
      />
      
      <div className="lg:w-1/2 h-full flex-grow">
        <img
          src={image}
          alt={subheading}
          className="h-full w-full object-cover shadow-md"
        />
      </div>
    </div>
    </div>
  );
};

export default SolutionContent;
