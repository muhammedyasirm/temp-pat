import React from 'react';
import TextSection from './textSection';
import ContactFormSection from '../ContactForm/formSection';

const SolutionContent = ({
  subheading,
  highlighted,
  description,
  image,
  subheading2,
  highlighted2,
  description2,
  image2,
  subheading3,
  highlighted3,
  description3,
  image3,
  displayImage,
}) => {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="text-center py-8 lg-down:flex-col flex md-down:px-5 items-stretch max-w-[80%] gap-10 md-down:gap-0 md-down:max-w-full mx-auto">
        <div className='w-1/2 lg-down:w-full'>
        <TextSection
          title={subheading}
          subtitle={highlighted}
          description={description}
        />
        </div>

        <div className="lg:w-1/2 h-full lg:h-auto flex-grow flex items-center justify-center">
          <img
            src={image}
            alt={subheading}
            className="w-full h-[38rem] lg-down:h-[15rem] object-cover rounded-sm shadow-md"
          />
        </div>
      </div>
      <div className="text-center py-8 md-down:py-4 md-down:px-5 lg-down:flex-col-reverse flex items-stretch max-w-[80%] gap-10 md-down:gap-0 md-down:max-w-full mx-auto">
        <div className="lg:w-1/2 flex-grow">
          <img
            src={image2}
            alt={subheading2}
            className="w-full object-cover h-[38rem] lg-down:h-[15rem] mt-2 shadow-md rounded-sm"
          />
        </div>
        <div className='w-1/2 lg-down:w-full'>
        <TextSection
          title={subheading2}
          subtitle={highlighted2}
          description={description2}
        />
        </div>
      </div>
      <div
        className="h-96 md-down:h-72 bg-cover bg-center w-[80%] lg-down:w-full mx-auto rounded md-down:rounded-none mb-4"
        style={{ backgroundImage: `url(${displayImage})` }}
      ></div>
      <div className="text-center md-down:px-5 py-8 md-down:pb-0 lg-down:flex-col flex items-stretch gap-10 md-down:gap-0 max-w-[80%] md-down:max-w-full mx-auto">
        <div className='w-1/2 lg-down:w-full'>
        <TextSection
          title={subheading3}
          subtitle={highlighted3}
          description={description3}
        />
        </div>

        <div className="lg:w-1/2 h-full flex-grow">
          <img
            src={image3}
            alt={subheading3}
            className="h-[46rem] lg-down:h-[15rem] w-full object-cover mt-2 shadow-md rounded-sm"
          />
        </div>
      </div>
      <div className='max-w-[50%] mx-auto md-down:max-w-full md-down:py-4 py-8 md-down:px-5'>
        <ContactFormSection />
      </div>
    </div>
  );
};

export default SolutionContent;