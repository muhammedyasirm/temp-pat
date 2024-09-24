import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ navItems, serviceSubItems, activeMenu, handleMenuClick, toggleNavSidebar, sidebarVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-black text-white w-64 p-6 transform ${
        sidebarVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col">
        <button onClick={toggleNavSidebar} className="text-white self-end mb-4">
          Close
        </button>
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li key={index} className="group">
              {item.name === "SERVICES" ? (
                <div className="relative">
                  <button
                    className={`block w-full text-left ${
                      activeMenu.main === "SERVICES"
                        ? "text-primary-orange"
                        : "hover:text-primary-orange"
                    }`}
                    onClick={() => handleMenuClick("SERVICES")}
                  >
                    {item.name}
                  </button>
                  {activeMenu.main === "SERVICES" && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {serviceSubItems.map((subCategory) =>
                        subCategory.category.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.to}
                              className={`${
                                activeMenu.sub === subItem.name
                                  ? "text-primary-orange"
                                  : "hover:text-primary-orange"
                              }`}
                              onClick={() =>
                                handleMenuClick("SERVICES", subItem.name)
                              }
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.to}
                  className={`block ${
                    activeMenu.main === item.name
                      ? "text-primary-orange"
                      : "hover:text-primary-orange"
                  }`}
                  onClick={() => handleMenuClick(item.name)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
