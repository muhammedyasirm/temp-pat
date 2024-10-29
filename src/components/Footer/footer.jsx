import React from "react";
import {
  LogoFacebook,
  LogoLinkedin,
  PhoneFilled,
  Email,
  Location,
} from "@carbon/icons-react";
import { Link } from "react-router-dom";

const serviceSubItems = [
  { name: "RA Maturity Assesment", to: "/services/maturity-assessment" },
  { name: "Revenue assurance MS", to: "/services/revenue-assurance" },
  { name: "Financial Improvement ", to: "/services/financial-improvement" },
  { name: "Carrier Services", to: "/services/carrier-services" },
  { name: "Fraud Management", to: "/services/fraud-management" },
  { name: "Information Security", to: "/services/information-security" },
];

const solutionSubItems = [
  { name: "Payment Solutions", to: "/solution/payment-solution" },
  { name: "Asset Management", to: "/solution/asset-management" },
  { name: "RAFM Solution", to: "/solution/rafm-solution" },
  { name: "Sites Profitability", to: "/solution/site-profitability-solution" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 md:px-0">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="/profit-assurance-logo.png"
            alt="Profit Assurance Technology"
            className="mb-4 w-[60%]"
          />
          <ul className="text-gray-400">
            <li className="mb-2 flex gap-2 items-center text-sm font-montserrat">
              <PhoneFilled size={22} />
              +971 4 4919588
            </li>
            <li className="mb-2 flex items-center gap-2 text-sm font-montserrat">
              <Email size={22} />
              ProatTechno3@gmail.com
            </li>
            <li className="mb-2 flex items-center gap-2 text-sm font-montserrat">
              <Location size={24} />
              Al Durrah4 - SBK Building, 305 - Al Garhoud <br/>
              Dubai, United Arab Emirates
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

        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 w-full md:w-3/4">
          <div className="md:w-1/3 mb-8 md:mb-0 border-l-2 border-primary-orange pl-4">
            <h3 className="text-xl font-semibold font-montserrat text-gray-400">
              Solutions We Provide
            </h3>
            {solutionSubItems.map((solution, index) => (
              <Link
                key={index}
                to={solution.to}
                className="text-gray-400 block hover:text-white text-sm font-montserrat "
              >
                {solution.name}
              </Link>
            ))}
          </div>

          <div className="md:w-1/3 mb-8 md:mb-0 border-l-2 border-primary-green pl-4">
            <h3 className="text-xl font-semibold font-montserrat text-gray-400">
              Services We Offer
            </h3>
            {serviceSubItems.map((service, index) => (
              <Link
                key={index}
                to={service.to}
                className="text-gray-400 block hover:text-white text-sm font-montserrat"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <div className="md:w-1/3 border-l-2 border-primary-blue pl-4">
            <p className="text-gray-400 mb-4 text-sm font-montserrat">
              Want to know more about our services and solutions?{" "}
              <Link
                to="/contact"
                className="text-primary-green hover:text-white"
              >
                Contact Us
              </Link>{" "}
              to see how we can support your business growth.
            </p>
            
            <p className="text-gray-500 mt-4 text-sm font-montserrat">
              © 2024 - 2026 Profit Assurance Technology LLC. All rights
              reserved. You may not reproduce or communicate any of the content
              on this website, including files downloadable from this website,
              without the permission of the copyright owner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;