import React from 'react';

const SolutionBanner = ({ BannerImage }) => {
  return (
    <div
      className="h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
    </div>
  );
};

export default SolutionBanner;
