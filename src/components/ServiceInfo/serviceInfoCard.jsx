import React from "react";

const InfoCard = ({ title, description, icon, showMore, onClick }) => {
  return (
    <div className="bg-[#232323] bg-opacity-[80%] text-white p-8 lg-down:p-3 rounded-md shadow-lg flex flex-col items-center justify-between text-center h-full min-h-[450px] md-down:min-h-[370px]">
      <h3 className="text-4xl xl-down:text-2xl font-bold mb-4 font-barlow h-16 flex items-center justify-center">
        {title.toUpperCase()}
      </h3>
      <div className="flex items-center justify-center w-full h-36 mb-4">
        <img src={icon} alt={`${title} icon`} className="w-24 h-24" />
      </div>
      <div className="flex-grow flex flex-col items-center justify-start">
        <p className="text-lg font-montserrat md-down:text-sm">
          {description}
          {showMore && (
            <>
              {" "}
              <span
                className="text-[#1B6D7E] underline cursor-pointer"
                onClick={() => onClick(title)}
              >
                Read More
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

const ServiceInfoCard = ({ subCategories, onReadMore }) => {
  return (
    <div
      className="bg-black py-10"
      style={{
        backgroundImage: `url('/analytics-bg.png')`,
        backgroundSize: "60% 60%",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {subCategories.map((category, index) => (
            <div key={index} className="w-full lg:w-[35%] xl:w-[28%] flex justify-center px-4 md-down:px-0">
              <InfoCard
                title={category.categoryTitle}
                description={category.description}
                icon={category.icon}
                showMore={category.hasMoreContent}
                onClick={onReadMore}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
