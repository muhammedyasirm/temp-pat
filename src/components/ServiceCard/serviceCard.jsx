import React from 'react';
import { Link } from 'react-router-dom';

const CardSection = () => {
  const cards = [
    {
      title: 'FRAUD DETECTION',
      description: 'IRSF, Wangiri, Grey Routes',
      icon: '/orange-cube.png',
      borderColor: 'hover:border-primary-orange',
      to:'/services/fraud-management'
    },
    {
      title: 'REVENUE ASSURANCE MS',
      description: 'Stop Revenue leakage Maximize Profits',
      icon: '/green-cube.png',
      borderColor: 'hover:border-primary-green',
      to:'/services/maturity-assessment'
    },
    {
      title: 'RA MATURITY ASSESSMENT',
      description: 'Internal & External Audits',
      icon: '/blue-cube.png',
      borderColor: 'hover:border-primary-blue',
      to:'/services/revenue-assurance'
    },
  ];

  return (
    <div className="relative max-w-[85%] w-full xl-down:w-full md-down:px-2 md-down:max-w-full text-white z-20 py-2 mt-[-140px] lg-down:mt-0">
      <div className="flex flex-wrap md-down:flex-col justify-center gap-6 mt-10">
        {cards.map((card, index) => (
          <Link to={card.to}
            key={index}
            className={`sm-down:w-full min-w-[30%]  md-down:max-w-full xl-down:min-w-[58%] md-down:min-w-full border-2 border-[#C1C1C1] ${card.borderColor} p-2 flex md-down:justify-start gap-5 cursor-pointer bg-[#1C1C1C] hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-start ml-5">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>
            <div className='mb-5'>
                <h3 className="text-xl md-down:text-lg mt-4 font-barlow font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm md-down:text-sm text-start font-montserrat">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardSection;