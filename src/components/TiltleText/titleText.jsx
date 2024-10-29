import React from "react";
import { useNavigate } from "react-router-dom";

const PromoSection = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-[#1C1C1C] text-white gap-28 xl-down:gap-6 grid grid-cols-2 lg-down:grid-cols-1 items-center">
      <div className="flex flex-col pl-20 md-down:!px-6 lg-down:pr-6 py-14 relative z-10">
        <h1 className="text-4xl md-down:text-2xl font-bold font-barlow">
          COMPREHENSIVE SOLUTION
        </h1>
        <p className="text-lg md-down:text-sm mt-7 font-montserrat lg-down:mt-4">
        Unlock your organization’s potential with our comprehensive services designed to boost efficiency
        and security. Our fraud detection solutions leverage advanced analytics to identify 
        and mitigate risks, safeguarding your revenue. With robust revenue assurance strategies, we ensure 
        every dollar is captured while minimizing losses. Our maturity assessments provide insights to benchmark 
        and elevate your processes. Additionally, our asset management solutions optimize resource utilization, 
        ensuring compliance and maximizing ROI. Finally, our cybersecurity measures protect your valuable data 
        from emerging threats, enabling you to operate with confidence.
        </p>
        <div className="flex lg-down:justify-start justify-end lg-down:mt-5 mt-7">
          <button onClick={handleConsultClick} className="bg-primary-orange text-white py-3 px-8 text-lg md-down:text-sm rounded hover:bg-opacity-80 transition duration-300">
            Consult Experts
          </button>
        </div>
      </div>

      <div className="flex justify-end lg-down:hidden self-end">
        <img
          src="/promo-logo.png"
          alt="Hexagonal Design"
          className="pt-3 w-[70%] object-fill"
        />
      </div>
    </div>
  );
};

export default PromoSection;
