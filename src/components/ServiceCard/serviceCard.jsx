import React from 'react';
import { Link } from 'react-router-dom';

const CardSection = () => {
  const cards = [
    {
      title: 'Fraud Detection',
      description: 'IRSF, Wangiri, Grey Routes',
      icon: '/green-cube.png',
      borderColor: 'hover:border-primary-green',
      to:'/service/fraud-management'
    },
    {
      title: 'RA Maturity Assessment',
      description: 'Internal & External Audits',
      icon: '/orange-cube.png',
      borderColor: 'hover:border-primary-orange',
      to:'/service/ra-maturity-assesment'
    },
    {
      title: 'Revenue Assurance MS',
      description: 'Stop Revenue leakage Maximize Profits',
      icon: '/blue-cube.png',
      borderColor: 'hover:border-primary-blue',
      to:'/service/revenue-assurance-ms'
    },
  ];

  return (
    <div className="relative w-[85%]  text-white z-20 py-2 mt-[-140px] lg-down:mt-0">
      <div className="flex flex-wrap md-down:flex-col justify-center gap-6 mt-10">
        {cards.map((card, index) => (
          <Link to={card.to}
            key={index}
            className={`sm-down:w-full min-w-[30%] max-w-[27%] md-down:max-w-full xl-down:min-w-[48%] md-down:min-w-full border-2 border-[#C1C1C1] ${card.borderColor} p-2 flex md-down:justify-start justify-center gap-5 cursor-pointer bg-[#1C1C1C] hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-start">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>
            <div className='mb-5'>
                <h3 className="text-lg md-down:text-sm mt-4 font-black font-barlow">{card.title}</h3>
                <p className="mt-2 text-sm text-start font-montserrat">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardSection;