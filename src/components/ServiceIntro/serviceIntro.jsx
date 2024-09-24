import React from 'react';
import InfoList from '../InfoList/infoList';

const ServiceIntro = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-6 md:px-16 bg-black"
        style={{
        backgroundImage: `url('/analytics-bg.png')`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
      }}
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl text-white md-down:text-xl font-semibold mb-6 font-montserrat text-left">
            Service Offering
          </h2>
          <p className="text-lg text-white leading-relaxed flex-1 font-montserrat text-left">
            Molestias eaque, iure architecto qui ex ligula volutpat phasellus incidunt iure magna illo qui, accusamus pede dis, explicabo, saepe dolorem eiusmod ante quae commodo.
          </p>
          <p className="text-lg text-white leading-relaxed flex-1 font-montserrat text-left">
            Dapibus. Ipsum doloremque accusantium interdum vitae cum necessitatibus molestie exercitation Mollit quas quo temporibus possimus felis voluptatibus scelerisque cumque.
          </p>
          <button className="bg-primary-orange text-white px-6 py-3 text-lg rounded hover:bg-opacity-80 transition duration-300 mb-8">
              Contact Us
            </button>
        </div>
        <InfoList />
      </div>
    </section>
  );
};

export default ServiceIntro;
