import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CompactHeader from "./compactHeader";
import Sidebar from "./sideBar";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState("");
  const [activeMenu, setActiveMenu] = useState({ main: "", sub: "" });
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // New state for hover effect
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const navItems = useMemo(
    () => [
      { name: "HOME", to: "/" },
      { name: "SOLUTIONS", to: "/solution" },
      { name: "SERVICES", to: "/service" },
      // { name: "CASE STUDY", to: "/case-study" },
      // { name: "EVENTS", to: "/events" },
      // { name: "BLOG", to: "/blog" },
      { name: "CONTACT", to: "/contact" },
    ],
    []
  );

  const serviceSubItems = useMemo(
    () => [
      {
        category: [
          { name: "FRAUD MANAGEMENT", to: "/services/fraud-management", color: "#f15930" },
          { name: "RA MATURITY ASSESMENT", to: "/services/maturity-assessment", color: "#8ec63f" },
          { name: "REVENUE ASSURANCE MS", to: "/services/revenue-assurance", color: "#12d2d4" },
        ],
        border: "border-primary-orange",
      },
      {
        category: [
          { name: "CARRIER SERVICES", to: "/services/carrier-services", color: "#f15930" },
          { name: "FINANCIAL IMPROVEMENT", to: "/services/financial-improvement", color: "#8ec63f" },
          { name: "INFORMATION SECURITY", to: "/services/information-security", color: "#12d2d4" },
        ],
        border: "border-primary-green",
      },
    ],
    []
  );

  const solutionSubItems = useMemo(
    () => [
      {
        category: [
          { name: "ASSET MANAGEMENT", to: "/solution/asset-management", color: "#f15930" },
          { name: "RAFM SOLUTION", to: "/solution/rafm-solution", color: "#8ec63f" },
          { name: "PAYMENT SOLUTIONS", to: "/solution/payment-solution", color: "#12d2d4" },
        ],
        border: "border-primary-orange",
      },
      {
        category: [
          { name: "SITES PROFITABILITY", to: "/solution/site-profitability-solution", color: "#8ec63f" },
        ],
        border: "border-primary-green",
      },
    ],
    []
  );

  const handleMenuClick = (mainMenu, subMenu = "", path = "") => {
    setActiveMenu({ main: mainMenu, sub: subMenu });
    if (path) {
      navigate(path);
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    navItems.forEach((item) => {
      if (currentPath.includes(item.to)) {
        setActiveMenu({ main: item.name, sub: "" });
      }
    });
    serviceSubItems.forEach((subCategory) => {
      subCategory.category.forEach((subItem) => {
        if (currentPath.includes(subItem.to)) {
          setActiveMenu({ main: "SERVICES", sub: subItem.name });
        }
      });
    });
    solutionSubItems.forEach((subCategory) => {
      subCategory.category.forEach((subItem) => {
        if (currentPath.includes(subItem.to)) {
          setActiveMenu({ main: "SOLUTIONS", sub: subItem.name });
        }
      });
    });
  }, [location.pathname, navItems, serviceSubItems, solutionSubItems]);

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
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDropdown("services")}
                      onMouseLeave={() => setShowDropdown("")}
                    >
                      <span
                        className={`flex items-center cursor-pointer ${
                          activeMenu.main === "SERVICES"
                            ? "text-primary-orange"
                            : ""
                        } hover:text-primary-orange`}
                      >
                        {item.name}
                        <span className="ml-1">▾</span>
                      </span>

                      {showDropdown === "services" && (
                        <div
                          className={`absolute left-[-10rem] top-2 bg-black text-white mt-3 p-4 shadow-lg z-50 grid grid-cols-2 gap-8 w-[600px] max-w-[600px]`}
                        >
                          {serviceSubItems.map((subCategory, subIndex) => (
                            <ul
                              key={subIndex}
                              className={`border-l-2 cursor-pointer pl-4 ${subCategory.border}`}
                            >
                              {subCategory.category.map((subItem, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="py-4 px-2"
                                  onMouseEnter={() => setHoveredItem(subItem.name)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                  onClick={() =>
                                    handleMenuClick(
                                      "SERVICES",
                                      subItem.name,
                                      subItem.to
                                    )
                                  }
                                  style={{
                                    color:
                                      activeMenu.sub === subItem.name || hoveredItem === subItem.name
                                        ? subItem.color
                                        : "",
                                  }}
                                >
                                  {subItem.name}
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.name === "SOLUTIONS" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowDropdown("solutions")}
                      onMouseLeave={() => setShowDropdown("")}
                    >
                      <span
                        className={`flex items-center cursor-pointer ${
                          activeMenu.main === "SOLUTIONS"
                            ? "text-primary-orange"
                            : ""
                        } hover:text-primary-orange`}
                      >
                        {item.name}
                        <span className="ml-1">▾</span>
                      </span>

                      {showDropdown === "solutions" && (
                        <div
                          className={`absolute left-[-10rem] top-2 bg-black text-white mt-3 p-4 shadow-lg z-50 grid grid-cols-2 gap-8 w-[600px] max-w-[600px]`}
                        >
                          {solutionSubItems.map((subCategory, subIndex) => (
                            <ul
                              key={subIndex}
                              className={`border-l-2 cursor-pointer pl-4 ${subCategory.border}`}
                            >
                              {subCategory.category.map((subItem, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="py-4 px-2"
                                  onMouseEnter={() => setHoveredItem(subItem.name)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                  onClick={() =>
                                    handleMenuClick(
                                      "SOLUTIONS",
                                      subItem.name,
                                      subItem.to
                                    )
                                  }
                                  style={{
                                    color:
                                      activeMenu.sub === subItem.name || hoveredItem === subItem.name
                                        ? subItem.color
                                        : "",
                                  }}
                                >
                                  {subItem.name}
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span
                      onClick={() => handleMenuClick(item.name, "", item.to)}
                      className={`flex items-center cursor-pointer ${
                        activeMenu.main === item.name
                          ? "text-primary-orange"
                          : "hover:text-primary-orange"
                      }`}
                    >
                      {item.name}
                    </span>
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
        <CompactHeader toggleNavSidebar={toggleNavSidebar} />
      </div>

      <Sidebar
        navItems={navItems}
        serviceSubItems={serviceSubItems}
        solutionSubItems={solutionSubItems}
        activeMenu={activeMenu}
        handleMenuClick={handleMenuClick}
        toggleNavSidebar={toggleNavSidebar}
        sidebarVisible={sidebarVisible}
      />
    </>
  );
};

export default Header;