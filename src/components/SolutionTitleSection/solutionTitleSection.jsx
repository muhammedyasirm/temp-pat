import React from 'react';

const TitleSection = ({ mainTitle, titleDescription }) => {
  return (
    <div className="text-center py-8 md-down:text-left md-down:px-5">
      <h1 className="text-4xl font-bold mb-4">{mainTitle}</h1>
      <p className="text-xl text-gray-600 max-w-[80%] md-down:max-w-full mx-auto leading-10">{titleDescription}</p>
    </div>
  );
};

export default TitleSection;
