import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompactHeader from "./compactHeader";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: "HOME", to: "/" },
    { name: "SERVICES", to: "/service" },
    { name: "CASE STUDY", to: "/case-study" },
    { name: "EVENTS", to: "/events" },
    { name: "BLOG", to: "/blog" },
    { name: "CONTACT", to: "/contact" },
  ];

  const serviceSubItems = [
    {
      category: [
        { name: "RA MATURITY ASSESMENT", to: "/service1" },
        { name: "REVENUE ASSURANCE MS", to: "/service2" },
        { name: "FINANCIAL IMPROVEMENT", to: "/service3" },
      ],
      border: "border-primary-orange",
    },
    {
      category: [
        { name: "CARRIER SERVICES", to: "/service4" },
        { name: "FRAUD MANAGEMENT", to: "/service5" },
        { name: "ASSET MANAGEMENT", to: "/service6" },
      ],
      border: "border-primary-green",
    },
    {
      category: [
        { name: "PAYMENT SOLUTIONS", to: "/service7" },
      ],
      border: "border-primary-blue",
    },
  ];

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <header className="bg-black text-white lg-down:hidden block">
        <div className="flex justify-between items-center px-6 py-2">
          <div className="flex items-center space-x-3">
            <img
              src="/us_flag.png"
              alt="US Flag"
              className="h-5 w-5 rounded-full"
            />
            <span className="text-sm">ENG</span>
          </div>

          <nav>
            <ul className="flex justify-center space-x-8 py-3 text-sm font-montserrat">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.name === "SERVICES" ? (
                    // Wrap the SERVICES item and dropdown in a container to handle the hover state
                    <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        to={item.to}
                        className="hover:text-primary-orange flex items-center"
                      >
                        {item.name}
                        <span className="ml-1">▾</span>
                      </Link>

                      {showDropdown && (
                        <div
                          className={`absolute left-[-10rem] top-2 bg-black text-white mt-3 p-4 shadow-lg z-50 grid grid-cols-3 gap-8 w-[800px] max-w-[800px] ${
                        showDropdown ? 'block animate-slideDown' : 'hidden animate-slideUp'
                      }`}

                        >
                          {serviceSubItems.map((subCategory, subIndex) => (
                            <ul
                              key={subIndex}
                              className={`border-l-2 pl-4 ${subCategory.border}`}
                            >
                              {subCategory.category.map((subItem, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="py-4 px-2 hover:bg-gray-800"
                                >
                                  <Link to={subItem.to} className="text-sm">
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className="hover:text-primary-orange flex items-center"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <img
              src="/profit-assurance-logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="hidden lg-down:block">
        <CompactHeader />
      </div>
    </>
  );
};

export default Header;
