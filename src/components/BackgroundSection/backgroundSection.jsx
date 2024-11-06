import React, { useState } from 'react';
import ResponsiveSectionedBackground from './MobileView/mobileViewBackgroundSection';
import { useNavigate } from 'react-router-dom';

const SectionedBackground = () => {

  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      title: 'Asset Management',
      description: '01',
      fullDescription:
        'Maximize the value of your data, enhance compliance with regulations, and improve operational efficiency ensuring that data is accurate, accessible, and secure, allowing informed decisions',
      backgroundImage: '/asset-management.jpg',
      to: '/solution/asset-management'
    },
    {
      id: 2,
      title: 'Fraud Management',
      description: '02',
      fullDescription:
        'Safeguard your business from fraud risks like Wangiri and IRSF. Our solutions enable real-time monitoring, automated fraud detection, and revenue protection. Prevent losses with robust defenses for seamless, secure payments.',
      backgroundImage: '/fraud-header.png',
      to: '/services/fraud-management'
    },
    {
      id: 3,
      title: 'RAFM Solutions',
      description: '03',
      fullDescription:
        'Our advanced RAFM solution streamlines implementation, reducing the timeline to a maximum of two months. It addresses operator risks by unifying eight essential processes: Product and Offer Management, Rating and Billing, Order Entry and Provisioning, Network and Usage Management, Partner Management, Receivables Management, Customer Management, and Finance and Accounting.',
      backgroundImage: '/cyber-security.jpg',
      to: '/solution/rafm-solution'
    },
    {
      id: 4,
      title: 'Sites Profitability',
      description: '04',
      fullDescription:
        'Our powerful software ensures site profitability by analysing and highlighting site-specific revenues and expenses, including fuel, spare parts, security, and maintenance costs. It detects SLA breaches and offers site reallocation recommendations to enhance operational efficiency. Leveraging AI, the system predicts revenue cannibalization and suggests optimized site management strategies to maximize ROI. ',
      backgroundImage: '/site-profit.jpg',
      to: '/solution/site-profitability-solution'
    },
  ];

  const [currentBackground, setCurrentBackground] = useState(
    sections[0].backgroundImage
  );

  return (
    <>
      <div
        className="relative w-full h-[85vh] bg-cover bg-center transition-all duration-500 lg-down:hidden block"
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>{' '}
        <div className="relative w-full mx-auto flex justify-between h-full z-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="w-1/4 relative flex flex-col justify-end text-white cursor-pointer group transition-all duration-500"
              onMouseEnter={() => setCurrentBackground(section.backgroundImage)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-80"></div>

              <div className="relative p-8  z-10 mb-12 group-hover:mb-2 transition-all duration-500 transform group-hover:-translate-y-2">
                <h2 className="text-4xl md-down:text-2xl font-bold mb-4 transition duration-300 group-hover:text-primary-orange font-barlow">
                  {section.description}
                </h2>
                <h3 className="text-xl md-down:text-lg font-semibold transition duration-300 group-hover:text-primary-orange font-barlow">
                  {section.title}
                </h3>

                <div className="overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                  <p className="mt-4 text-lg font-montserrat">
                    {section.fullDescription}
                  </p>
                  <button onClick={() => navigate(section.to)} className="bg-primary-orange font-montserrat text-white px-6 py-2 mt-4 rounded hover:bg-opacity-80 transition duration-300">
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