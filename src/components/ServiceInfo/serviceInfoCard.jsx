import React, { useEffect } from "react";

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#232323] bg-opacity-[80%] text-white p-6 md-down:p-3 rounded-md shadow-lg flex flex-col items-center justify-center text-center h-full min-h-[300px]">
      <img src={icon} alt={`${title} icon`} className="w-16 h-16 mb-4" /> {/* Icon */}
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-xl">{description}</p>
    </div>
  );
};

const ServiceInfoCard = ({ subCategories }) => {
  useEffect(() => {
    console.log("SubCategories => ", subCategories);
  }, [subCategories]);

  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4 md-down:px-0">
        <div className="flex flex-wrap justify-center gap-8">
          {subCategories.map((category, index) => (
            <div key={index} className="w-full lg:w-2/5 xl:w-1/4 flex justify-center">
              <InfoCard
                title={category.categoryTitle}
                description={category.description}
                icon={category.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
