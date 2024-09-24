import React from 'react';

const InfoList = () => {
  const infoItems = [
    {
      icon: "/orange-cube.png",
      text: "Our team consists of seasoned professionals with extensive experience in RAFM. We proudly adhere to TM Forum and GSMA standards, collaborating with top telecoms like INWI, C&W, Lebara, MTN, and ATOM.",
    },
    {
      icon: "/green-cube.png",
      text: "We offer specialized services that protect and boost your revenue streams. Whether it's RA Maturity, Managed Services, or Fraud Management, we have you covered.",
    },
    {
      icon: "/blue-cube.png",
      text: "Our targeted projects focus on critical financial areas like deferred revenue and margin analysis to improve your company's bottom line.",
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
