import React from "react";
import {
  AiFinancialSustainabilityCheck,
  AiGovernanceTracked,
  Finance,
  AiGovernanceUntracked,
  CellTower,
  InventoryManagement,
  LoadBalancerVpc,
  IbmSecurity,
} from "@carbon/icons-react";

const services = [
  {
    id: 1,
    icon: <AiFinancialSustainabilityCheck size={66} />,
    title: "RA MATURITY ASSESMENT",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "01",
  },
  {
    id: 2,
    icon: <AiGovernanceTracked size={66} />,
    title: "REVENUE ASSURANCE MS",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "02",
  },
  {
    id: 3,
    icon: <Finance size={66} />,
    title: "FINANCIAL IMPROVEMENT",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "03",
  },
  {
    id: 4,
    icon: <CellTower size={66} />,
    title: "CARRIER SERVICES",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "04",
  },
  {
    id: 5,
    icon: <AiGovernanceUntracked size={66} />,
    title: "FRAUD MANAGEMENT",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "05",
  },
  {
    id: 6,
    icon: <InventoryManagement size={66} />,
    title: "ASSET MANAGEMENT",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "06",
  },
  {
    id: 7,
    icon: <LoadBalancerVpc size={66} />,
    title: "PAYMENT SOLUTIONS",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "07",
  },
  {
    id: 8,
    icon: <IbmSecurity size={66} />,
    title: "CYBER SECURITY",
    description:
      "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.",
    image: "/chart3.png",
    number: "08",
  },
];

const ServiceList = () => {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-4xl text-white md-down:text-xl font-semibold mb-16 font-montserrat text-center">
        OUR SERVICES
      </h2>
      <div className="container mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col lg:flex-row lg-down:mb-6 mb-8"
          >
            <div className="flex-1 p-4 flex flex-col justify-start">
              <div className="flex items-start mb-4">
                <span className="text-3xl lg:text-5xl text-white mr-4">
                  {service.icon}
                </span>
                <div>
                  <h2 className="text-4xl text-white md-down:text-xl font-semibold mb-6 font-montserrat text-left">
                    {service.title}
                  </h2>
                </div>
              </div>
              <div className="text-9xl font-bold text-gray-200 text-center">
                {service.number}
              </div>
            </div>

            <div className="flex-1 p-4 flex flex-col justify-start items-end">
              <p className="text-lg text-white leading-relaxed flex-1 font-montserrat text-left mb-5">
                {service.description}
              </p>
              <button className="bg-primary-orange text-white px-6 py-3 text-lg rounded hover:bg-opacity-80 transition duration-300 mb-8 w-[35%]">
                View Service
              </button>
            </div>

            <div className="flex-1 p-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full max-w-sm lg:max-w-md h-auto max-h-[15rem] rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
