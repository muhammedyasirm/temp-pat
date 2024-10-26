import React from 'react';
import InfoList from '../InfoList/infoList';
import { useNavigate } from 'react-router-dom';

const ProfitAssurance = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/blog');
  };

  return (
    <div className="bg-black text-white py-16 px-24 md-down:px-6 relative">
      <div className="absolute top-0 left-[25%] w-[50%] h-1 flex bg-primary-green"></div>
      <div className="flex gap-28 lg-down:gap-12 justify-center lg-down:flex-col">
        <div className="flex flex-col w-[40%] lg-down:w-full">
          <div className="text-left mt-5 md-down:mt-0">
            <h3 className="text-4xl md-down:text-3xl font-semibold mb-4 font-montserrat">
              Enabling profitability for clients{' '}
              <span className="text-primary-green font-bold">since 2014</span>,
            </h3>
            <p className="text-lg md-down:text-lg leading-relaxed font-montserrat">
              Our strategies ensure that every dollar earned is accurately
              captured, optimizing your financial performance by stopping
              revenue leakages. With advanced fraud detection solutions to
              safeguard and protect your revenue by identifying and mitigating
              potential scams. With a diverse and expert team to ensure your
              revenue growth.
              <br />
              <span
                onClick={handleClick}
                className="text-primary-green font-semibold text-xl cursor-pointer"
              >
                Explore the challenges we address and their global impact.
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-10 w-[42%] lg-down:w-full ">
          <InfoList />
        </div>
      </div>
    </div>
  );
};

export default ProfitAssurance;
