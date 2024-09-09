import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: 'Advanced Analysis',
      description: 'Growth, Focus & Analysis',
      icon: '/orange-cube.png', // Use the orange cube image
      borderColor: 'hover:border-primary-orange',
    },
    {
      title: 'Corporate Finance',
      description: 'Strategy is the Foundation',
      icon: '/green-cube.png', // Use the green cube image
      borderColor: 'hover:border-primary-green',
    },
    {
      title: 'Business Consultation',
      description: 'Professional Skilled Team',
      icon: '/blue-cube.png', // Use the blue cube image
      borderColor: 'hover:border-primary-blue',
    },
  ];

  return (
    <div className="relative w-full text-white max-w-5xl mx-auto z-20 py-4 mt-[-110px]">
      <div className="flex justify-center space-x-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative border-2 border-gray-600 border-transparent ${card.borderColor} p-4 w-1/3 flex justify-center gap-5 cursor-pointer bg-black bg-opacity-80 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-center">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
            </div>
            <div className='mb-5'>
                <h3 className="text-xl mt-4 font-bold">{card.title}</h3>
                <p className="mt-2 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
