import React from 'react';
import { LogoFacebook, LogoLinkedin, PhoneFilled, Email, Location } from '@carbon/icons-react';

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
            <a href="#" className="text-gray-400 hover:text-white">
              <LogoFacebook size={24}/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LogoLinkedin size={24}/>
            </a>
          </div>
        </div>

        {/* Middle Section: Description and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 w-full md:w-3/4">
          <div className="md:w-1/3 mb-8 md:mb-0 border-l-2 border-primary-orange pl-4">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0 border-l-2 border-primary-blue pl-4">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="md:w-1/3 border-l-2 border-primary-green pl-4">
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <img
              src="/pat-text-white.png"
              alt="Profit Assurance Technology"
              className="h-[5rem]"
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
