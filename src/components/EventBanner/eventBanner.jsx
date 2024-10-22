import React from 'react';

const EventBanner = () => {
  return (
    <div className="relative w-full h-[95vh] md-down:h-[60vh] overflow-hidden">
      <img
        src="/events-banner.png"
        alt="Fraud Prevention Conference"
        className="w-full h-full object-cover md-down:object-fill"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 flex flex-col justify-end pb-16 lg-down:pb-4 items-center text-center">
        <h2 className="text-5xl sm-down:text-xl font-barlow font-bold text-white mb-4 max-w-2xl">
          FRAUD PREVENTION CONFERENCE
        </h2>
        
        <button className="bg-primary-orange text-white py-3 sm-down:py-2 sm-down:px-4 px-8 text-lg md-down:text-sm">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default EventBanner;
