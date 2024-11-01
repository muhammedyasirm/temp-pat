import React from 'react';

const ConferenceSection = () => {
  return (
    <div className=" w-full bg-[#141414] text-white flex md-down:flex-col items-center justify-between pr-24 lg-down:pr-0">
      <div className="w-1/2 lg-down:w-full lg-down:flex lg-down:mt-0 md-down:pl-7 h-full">
        <img
          src="/conference-bg1.png"
          alt="Conference"
          className="h-full w-[75%] object-fill"
        />
      </div>

      <div className="w-1/2  xl-down:p-6 lg-down:w-full">
        <h2 className="text-4xl md-down:text-2xl font-barlow font-bold mb-4">CONFERENCE</h2>
        <p className="text-lg font-montserrat md-down:text-sm mb-6">
        Join us for an exploration of cutting-edge telecom solutions, covering key topics like revenue assurance, fraud management, and operational efficiency. Gain insights from industry leaders and network with professionals shaping the future of telecom. Whether you want to enhance your organization’s financial performance or stay ahead of industry trends, this conference offers the perfect opportunity to boost your knowledge.
        </p>
        <div className='flex justify-end lg-down:justify-start mr-8'>
          <button className="bg-primary-orange text-white px-6 py-3 text-lg md-down:text-sm rounded hover:bg-opacity-80 transition duration-300">
          Register Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSection;
