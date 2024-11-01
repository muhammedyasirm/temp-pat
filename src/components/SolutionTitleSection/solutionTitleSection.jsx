import React from 'react';

const TitleSection = ({ mainTitle, titleDescription }) => {
  return (
    <div className="text-center py-8 md-down:text-left md-down:px-5 bg-[#1C1C1C]">
      <p className="text-lg font-montserrat md-down:text-sm max-w-[80%] md-down:max-w-full mx-auto leading-loose text-white">{titleDescription}</p>
    </div>
  );
};

export default TitleSection;
