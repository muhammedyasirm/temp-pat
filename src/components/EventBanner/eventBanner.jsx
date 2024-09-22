import React from 'react';

const EventBanner = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image */}
      <img
        src="/events-banner.png" // Use the correct path from your public folder
        alt="Fraud Prevention Conference"
        className="w-full h-full object-cover" // Changed to object-cover to maintain aspect ratio
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 lg-down:pb-2 items-center text-center">
        {/* Conference Title */}
        <h2 className="text-5xl sm-down:text-lg font-barlow font-bold text-white mb-4 max-w-2xl">
          FRAUD PREVENTION CONFERENCE
        </h2>
        
        {/* Button */}
        <button className="bg-primary-orange text-white py-3 sm-down:py-1 sm-down:px-4 px-8 text-lg md-down:text-sm">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default EventBanner;
