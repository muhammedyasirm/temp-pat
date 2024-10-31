import React from 'react';
import ContactFormSection from '../ContactForm/formSection';
import { useNavigate } from 'react-router-dom';

const ContentSection = ({
  subheading,
  highlighted,
  description,
  image,
  onContactClick,
}) => (
  <div className="mb-32 xl-down:mb-3">
    <div className="px-[7rem] lg-down:px-4 mb-3">
      <h2 className="text-4xl md-down:text-2xl font-barlow font-bold text-white max-w-[60%] xl-down:max-w-full">
        {subheading}
      </h2>
      <p className="text-lg font-montserrat text-gray-400 md-down:text-sm max-w-[60%] xl-down:max-w-full">
        {highlighted}
      </p>
    </div>
    <div className="px-[7rem] lg-down:px-4">
      <div className="flex xl-down:flex-col gap-8 xl-down:gap-0 px-4 xl-down:px-0 bg-[#e3e3e3] rounded max-h-96 xxl-down:max-h-fit">
        <div className="py-4 w-full lg-down:px-4 flex-col items-center">
          <p className="text-[#141414] text-lg leading-loose font-montserrat md-down:text-sm">
            {description}
          </p>
        </div>
        {image && (
          <div
            className="relative group -mt-[4rem] w-[80%] xl-down:w-full -mb-[5.7rem] xl-down:mb-3  xl-down:mt-0 lg-down:p-4 flex justify-end cursor-pointer"
            onClick={onContactClick}
          >
            <img
              src={image}
              alt={subheading}
              className="object-fill w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <span className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md-down:text-lg font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Contact Us
            </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

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
}) => {
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate('/contact');
  };

  // const contactSectionRef = useRef(null);

  // const scrollToContactSection = () => {
  //   contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="bg-[#1C1C1C]">
      <ContentSection
        subheading={subheading}
        highlighted={highlighted}
        description={description}
        image={image}
        onContactClick={goToContactPage}
      />
      <div className="mb-32 xl-down:mb-3">
        <div className="w-full flex">
          <div className="w-[46.5%] xl-down:hidden text-white"></div>
          <div className="xl:px-0 lg:px-[7rem] px-4 mb-3 text-start">
            <h2 className="text-4xl md-down:text-2xl font-barlow font-bold text-white">
              {subheading2}
            </h2>
            <p className="text-lg font-montserrat text-gray-400 md-down:text-sm">
              {highlighted2}
            </p>
          </div>
        </div>
        <div className="px-[7rem] lg-down:px-4">
          <div className="flex xl-down:flex-col-reverse gap-8 xl-down:gap-0 px-4 xl-down:px-0 bg-[#e3e3e3] rounded max-h-96 xxl-down:max-h-fit">
            {image && (
              <div
                className="relative group -mt-[4rem] w-[80%] xl-down:w-full -mb-[5.7rem] xl-down:mb-3  xl-down:mt-0 lg-down:p-4 flex justify-end cursor-pointer"
                onClick={goToContactPage}
              >
                <img
                  src={image2}
                  alt={subheading2}
                  className="object-fill w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md-down:text-lg font-semibold text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  Contact Us
                </span>
              </div>
            )}
            <div className="py-4 w-full lg-down:px-4 flex-col items-center">
              <p className="text-[#141414] text-lg leading-loose font-montserrat md-down:text-sm">
                {description2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContentSection
        subheading={subheading3}
        highlighted={highlighted3}
        description={description3}
        image={image3}
        onContactClick={goToContactPage}
      />
      <div
        className="max-w-[50%] mx-auto md-down:max-w-full md-down:py-4 py-8 md-down:px-5 mt-10"
        // ref={contactSectionRef}
      >
        <ContactFormSection />
      </div>
    </div>
  );
};

export default SolutionContent;
