import React from 'react';

const InfoList = () => {
  const infoItems = [
    {
      icon: "/orange-cube.png",
      text: "Companies using advanced fraud detection systems report a 30-50% reduction in fraud losses",
    },
    {
      icon: "/green-cube.png",
      text: "Companies with high maturity levels in risk management have 40% fewer incidents of project failures compared to those with low maturity.",
    },
    {
      icon: "/blue-cube.png",
      text: "Telecom companies can lose up to 5% of their revenue annually due to billing and operational inefficiencies.",
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      {infoItems.map((item, index) => (
        <div key={index} className="flex gap-8">
          <img
            src={item.icon}
            alt="Icon"
            className="w-12 h-12 md-down:w-8 md-down:h-8 md-down:mt-1 object-contain"
          />
          <p className="text-lg leading-relaxed flex-1 font-montserrat">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoList;