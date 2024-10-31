import React from 'react';
import FeedbackSection from '../ServiceFeedBack/serviceFeedbackSection';

const SolutionCard = ({ title, description, imageUrl, isgpoints }) => {
  return (
    <div className="flex flex-col w-[85%] lg-down:w-full mx-auto overflow-hidden rounded shadow-lg py-4">
      <h2 className="text-4xl md-down:text-2xl font-barlow font-bold text-white ml-6 lg-down:ml-0 mb-3 max-w-[50%] md-down:max-w-full">
        {title}
      </h2>
      <div className="px-10 lg-down:px-0">
        <div className="flex bg-[#e3e3e3] rounded lg-down:flex-col">
          <div className="px-6 py-4 flex-1 lg-down:px-4 flex-col">
            <p className="text-[#141414] text-lg font-montserrat md-down:text-sm">
              {description}
            </p>
            <div className="mt-10">
              {isgpoints?.length > 0 && (
                <FeedbackSection
                  cubePoints={isgpoints.map((point) => ({
                    description: point.point,
                  }))}
                  cubeIcon="/orange-cube.png"
                  textColor="#141414"
                />
              )}
            </div>
          </div>
          <div className="flex-1 -mt-16 lg-down:mt-0 mr-6 p-6 lg-down:p-4 lg-down:mr-0 max-h-[30rem] xl-down:max-h-full">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full lg-down:w-full lg-down:h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ManagedSOC({
  title,
  description,
  imageUrl,
  isgpoints,
}) {
  return (
    <>
      <SolutionCard
        title={title}
        description={description}
        imageUrl={imageUrl}
        isgpoints={isgpoints}
      />
    </>
  );
}
