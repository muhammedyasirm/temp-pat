import React, { useState } from "react";
import ResponsiveSectionedBackground from "./MobileView/mobileViewBackgroundSection";

const SectionedBackground = () => {
  const sections = [
    {
      id: 1,
      title: "Asset Management",
      description: "01",
      fullDescription:
        "Maximize the value of your data, enhance compliance with regulations, and improve operational efficiency ensuring that data is accurate, accessible, and secure, allowing informed decisions",
      backgroundImage:
        "/asset-management.jpg",
    },
    {
      id: 2,
      title: "Payment Solutions",
      description: "02",
      fullDescription:
        "Digitize payments guaranteeing security and convenience. With features like real-time tracking and fraud protection, a digital payment solution is a life transforming service.",
      backgroundImage:
        "/payment-solution.jpg",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "03",
      fullDescription:
        "Protect systems, networks, and data from cyber threats and attacks.",
      backgroundImage:
        "/cyber-security.jpg",
    },
    {
      id: 4,
      title: "Carrier Services",
      description: "04",
      fullDescription:
        "Expand telecom offerings with A2B messaging & Roaming services",
      backgroundImage:
        "/carrier-service.jpg",
    },
  ];

  const [currentBackground, setCurrentBackground] = useState(
    sections[0].backgroundImage
  );

  return (
    <>
      <div
        className="relative w-full h-[80vh] bg-cover bg-center transition-all duration-500 lg-down:hidden block"
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>{" "}
        <div className="relative w-full mx-auto flex justify-between h-full z-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="w-1/4 relative flex flex-col justify-end text-white cursor-pointer group transition-all duration-500"
              onMouseEnter={() => setCurrentBackground(section.backgroundImage)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-80"></div>

              <div className="relative p-8 z-10 mb-12 transition-transform duration-500 transform group-hover:-translate-y-2">
                <h2 className="text-3xl font-bold mb-4 transition duration-300 group-hover:text-primary-orange font-barlow">
                  {section.description}
                </h2>
                <h3 className="text-lg font-semibold transition duration-300 group-hover:text-primary-orange font-barlow">
                  {section.title}
                </h3>

                <div className="overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                  <p className="mt-4 text-sm font-montserrat">
                    {section.fullDescription}
                  </p>
                  <button className="bg-primary-orange font-montserrat text-white px-6 py-2 mt-4 rounded hover:bg-opacity-80 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>

              {section.id !== 4 && (
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="lg-down:block hidden">
        <ResponsiveSectionedBackground sections={sections} />
      </div>
    </>
  );
};

export default SectionedBackground;
