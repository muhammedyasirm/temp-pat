import React from 'react';
import InfoList from '../InfoList/infoList';
import { useNavigate } from 'react-router-dom';

const ProfitAssurance = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/blog');
  };

  return (
    <div className="bg-black text-white py-16 px-20 md-down:px-6 relative">
      <div className="absolute top-0 left-[25%] w-[50%] h-1 flex bg-primary-green"></div>
      <div className="flex gap-28 lg-down:gap-12 justify-center lg-down:flex-col">
        <div className="flex flex-col w-[40%] lg-down:w-full">
          <div className="text-left mt-5 md-down:mt-0">
          <h3 className="text-4xl md-down:text-2xl font-semibold mb-4 font-barlow">
              For 10 years we prevented fraud, delivered innovation and maximized revenue.{' '}
              {/* <span className="text-primary-green font-bold">maximized revenue.</span> */}
            </h3>
            <p className="text-lg md-down:text-sm font-montserrat">
              Our strategies ensure that every dollar earned is accurately
              captured, optimizing your financial performance by stopping
              revenue leakages. With advanced fraud detection solutions to
              safeguard and protect your revenue by identifying and mitigating
              potential scams. With a diverse and expert team to ensure your
              revenue growth.
            </p>
            <div
              onClick={handleClick}
              className="text-primary-green font-semibold font-montserrat mt-4 text-xl md-down:text-lg cursor-pointer"
            >
              Explore the challenges we address and their global impact.
            </div>
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
