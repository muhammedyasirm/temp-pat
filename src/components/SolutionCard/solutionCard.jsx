import React from 'react';

const SolutionCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col w-[85%] lg-down:w-full mx-auto overflow-hidden rounded shadow-lg py-4">
      <h2 className="text-4xl md-down:text-2xl font-barlow font-bold text-white ml-6 lg-down:ml-0 mb-3 max-w-[50%] md-down:max-w-full">
        {title}
      </h2>
      <div className='px-10 lg-down:px-0'>
        <div className="flex bg-[#e3e3e3] rounded lg-down:flex-col">
          <div className="px-6 py-4 flex-1 lg-down:px-4">
            <p className="text-[#141414] text-lg font-montserrat md-down:text-sm">
              {description}
            </p>
          </div>
          <div className="flex-1 -mt-16 lg-down:mt-0 mr-6 p-6 lg-down:p-4 lg-down:mr-0 max-h-[30rem] xl-down:max-h-full">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full lg-down:w-full lg-down:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ManagedSOC({ title, description, imageUrl }) {
  return (
    <>
      <SolutionCard
        title={title}
        description={description}
        imageUrl={imageUrl}
      />
    </>
  );
}
