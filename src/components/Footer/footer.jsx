import React from 'react';
import { LogoFacebook, LogoLinkedin, PhoneFilled, Email, Location } from '@carbon/icons-react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

// The serviceSubItems array you provided
const serviceSubItems = [
  { name: "RA Maturity Assesment", to: "/service/ra-maturity-assesment" },
  { name: "Revenue assurance MS", to: "/service/revenue-assurance-ms" },
  { name: "Financial Improvement ", to: "/service/financial-improvement" },
  { name: "Carrier Services", to: "/service/carrier-services" },
  { name: "Fraud Management", to: "/service/fraud-management" },
  { name: "Asset Management", to: "/service/asset-management" },
  { name: "Payment Solutions", to: "/service/payment-solutions" },
  { name: "Cyber Security", to: "/service/cyber-security" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 md:px-0">
        {/* Left Section: Logo and Contact Info */}
        <div className="md:w-1/5 mb-8 md:mb-0">
          <img
            src="/profit-assurance-logo.png"
            alt="Profit Assurance Technology"
            className="mb-4"
          />
          <ul className="text-gray-400">
            <li className="mb-2 flex gap-2 items-center">
              <PhoneFilled size={22} />
              +971508925068
            </li>
            <li className="mb-2 flex items-center gap-2">
              <Email size={22} />
              ProatTechno3@gmail.com
            </li>
            <li className="mb-2 flex items-center gap-2">
              <Location size={22} />
              Deira - Office 305 AL DURRAH
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <div className="text-gray-400 hover:text-white">
              <LogoFacebook size={24} />
            </div>
            <div className="text-gray-400 hover:text-white">
              <LogoLinkedin size={26} />
            </div>
          </div>
        </div>

        {/* Middle Section: Description and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 w-full md:w-3/4">
          <div className="md:w-1/3 mb-8 md:mb-0 border-l-2 border-primary-orange pl-4">
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold font-montserrat text-gray-400'>
                Some Content
              </h3>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit amet
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit amet
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit amet
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit amet
              </p>
              <p className="text-gray-400 hover:text-white cursor-pointer">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="md:w-1/3 mb-8 md:mb-0 border-l-2 border-primary-blue pl-4">
            <h3 className="text-xl font-semibold font-montserrat text-gray-400">
              Services We Offer
            </h3>
            {serviceSubItems.map((service, index) => (
              <Link key={index} to={service.to} className="text-gray-400 block hover:text-white">
                {service.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="md:w-1/3 border-l-2 border-primary-green pl-4">
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <img
              src="/pat-text-white.png"
              alt="Profit Assurance Technology"
              className="h-[3rem]"
            />
            <p className="text-gray-500 mt-4 text-sm">
              © 2024 - 2026 Profit Assurance Technology LLC. All rights reserved. 
              You may not reproduce or communicate any of the content on this 
              website, including files downloadable from this website, without 
              the permission of the copyright owner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
