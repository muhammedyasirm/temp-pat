import React from "react";

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#232323] bg-opacity-[80%] text-white p-8 md-down:p-3 rounded-md shadow-lg flex flex-col items-center justify-between text-center h-full min-h-[450px]">
      <h3 className="text-4xl font-bold mb-4 font-barlow h-16 flex items-center justify-center">
        {title.toUpperCase()}
      </h3>
      <div className="flex items-center justify-center w-full h-36 mb-4">
        <img src={icon} alt={`${title} icon`} className="w-24 h-24" />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

const ServiceInfoCard = ({ subCategories }) => {
  return (
    <div className="bg-black py-10"
      style={{ 
            backgroundImage: `url('/analytics-bg.png')`,
            backgroundSize: ' 60% 60%',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
          }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {subCategories.map((category, index) => (
            <div key={index} className="w-full lg:w-2/5 xl:w-[28%] flex justify-center">
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
