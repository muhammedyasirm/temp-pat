import React from 'react';

const SolutionBanner = ({ BannerImage }) => {
  return (
    <div
      className="h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }} // Use the image passed as prop
    >
    </div>
  );
};

export default SolutionBanner;
