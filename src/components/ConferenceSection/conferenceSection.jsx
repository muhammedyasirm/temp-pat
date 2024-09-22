import React from 'react';

const ConferenceSection = () => {
  return (
    <div className=" w-full bg-[#141414] text-white flex lg-down:flex-col items-center justify-between pr-24 lg-down:pr-0">
      <div className="w-1/2 lg-down:w-full lg-down:flex lg-down:mt-0 lg-down:pl-7 h-full">
        <img
          src="/conference-bg1.png"
          alt="Conference"
          className="h-full w-[75%] object-fill"
        />
      </div>

      <div className="w-1/2  xl-down:p-6 lg-down:w-full">
        <h2 className="text-5xl font-barlow lg-down:text-4xl font-bold mb-4">CONFERENCE</h2>
        <p className="text-[1.5rem] font-montserrat lg-down:text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
          Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <div className='flex justify-end lg-down:justify-start mr-8'>
          <button className="bg-primary-orange text-white px-6 py-3 text-lg rounded hover:bg-opacity-80 transition duration-300">
          Read More
        </button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSection;
