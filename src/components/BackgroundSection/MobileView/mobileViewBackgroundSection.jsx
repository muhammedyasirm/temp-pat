import React from 'react';

const ResponsiveSectionedBackground = ({ sections }) => {
  return (
    <div>
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative"
          style={{ backgroundImage: `url(${section.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
          <div className="relative z-10 p-6 text-white flex flex-col justify-center h-[400px]">
            <h2 className="text-2xl font-bold mb-4 font-barlow">{section.description}</h2>
            <h3 className="text-xl font-semibold mb-2 font-barlow">{section.title}</h3>
            <p className="text-sm font-montserrat">{section.fullDescription}</p>
            <button className="bg-primary-orange text-white w-fit py-2 px-4 mt-4 rounded hover:bg-opacity-80 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveSectionedBackground;
