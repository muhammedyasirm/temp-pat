import React from "react";

const PromoSection = () => {
  return (
    // <div className=" bg-[#1C1C1C]  lg-down:px-6 text-white lg-down:flex-col lg-down:bg-cover lg-down:bg-center lg-down:bg-no-repeat">
    //   <div className="flex items-center gap-[35rem] justify-end">
    //     <div className="lg-down:pr-6 lg-down:pl-0 py-14 max-w-[45%] lg-down:max-w-full flex flex-col justify-center h-full z-10">
    //     <h1 className="text-5xl font-bold font-barlow lg-down:text-4xl">
    //       ENHANCE YOUR REVENUE
    //     </h1>
    //     <p className="text-[1.5rem] mt-7 font-montserrat lg-down:text-base lg-down:mt-4">
    //       Maximize your business potential with our tailored solutions. From
    //       revenue assurance to fraud management, Profit Assurance Technology
    //       delivers expert services to enhance your financial performance and
    //       safeguard your operations. Let us help you achieve your goals.
    //     </p>
    //     <div className="flex lg-down:justify-start justify-end lg-down:mt-5 mt-7">
    //       <button className="bg-primary-orange text-white py-3 px-8 text-lg rounded hover:bg-opacity-80 transition duration-300">
    //         Get Started
    //       </button>
    //     </div>
    //   </div>

    //   <div className="flex justify-end justify-items-end lg-down:hidden">
    //     <img
    //       src="/promo-logo.png"
    //       alt="Hexagonal Design"
    //       className="pt-3 w-[80%] object-fill"
    //     />
    //   </div>
    //   </div>
    // </div>
    <div className="bg-[#1C1C1C] pl-24 lg-down:pl-0 text-white gap-28 grid grid-cols-2 lg-down:grid-cols-1 items-center">
      <div className="flex flex-col lg-down:pl-6 py-14 relative z-10">
        <h1 className="text-5xl font-bold font-barlow lg-down:text-4xl">
          COMPREHENSIVE SOLUTION
        </h1>
        <p className="text-lg mt-7 font-montserrat lg-down:text-base lg-down:mt-4">
          Unlock the full potential of your organization with our comprehensive
          suite of services designed to enhance operational efficiency and
          security. fraud detection solutions leverage advanced analytics to
          identify and mitigate risks, safeguarding your revenue streams.
          Coupled with robust revenue assurance strategies, we ensure you
          capture every dollar earned while minimizing losses. Our maturity
          assessment services provide insights into your processes, helping you
          benchmark and elevate your capabilities. Additionally, our asset
          management solutions streamline resource utilization, ensuring
          compliance and maximizing ROI. Finally, our cutting-edge cybersecurity
          measures protect your valuable data from emerging threats, allowing
          you to operate with confidence.
        </p>
        <div className="flex lg-down:justify-start justify-end lg-down:mt-5 mt-7">
          <button className="bg-primary-orange text-white py-3 px-8 text-lg rounded hover:bg-opacity-80 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex justify-end lg-down:hidden">
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
