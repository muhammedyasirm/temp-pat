import React, { useEffect } from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-[#232323] bg-opacity-[80%] text-white p-6 md-down:p-3 rounded-md shadow-lg text-center flex flex-col justify-center">
      <h3 className="text-3xl font-bold flex justify-center items-center mb-2 min-h-20 md-down:min-h-0 text-center">{title}</h3>
      <p className="text-xl">{description}</p>
    </div>
  );
};

const ServiceInfoCard = ({subCategories}) => {
  useEffect(() => {
    console.log("SubCategories => ",subCategories);
  }, [subCategories])
  
  const cardData = [
    {
      title: "RATING & BILLING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      title: "NETWORK & USAGE MANAGEMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      title: "FINANCE & ACCOUNTING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      title: "PRODUCT & OFFERS MANAGEMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      title: "CUSTOMER MANAGEMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      title: "PARTNER MANAGEMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ];

  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4 md-down:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <InfoCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;
