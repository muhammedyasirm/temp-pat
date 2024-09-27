import React, { useState } from "react";

const BlogTopics = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  const handleMouseEnter = (topic) => {
    setHoveredTopic(topic);
  };

  const handleMouseLeave = () => {
    setHoveredTopic(null);
  };

  return (
    <div className="relative w-full bg-black text-white px-14">
      <div className="absolute inset-0 flex justify-end md-down:hidden">
        <img
          src="/analytics-bg.png"
          alt="Analytics Background"
          className=" object-fill"
        />
      </div>

      <div className="relative z-10 py-8 px-20 md-down:px-4">
        <h2 className="md-down:text-2xl text-4xl font-bold mb-8 w-[55%] lg-down:w-full font-barlow">
          Get access to a list of the blog posts covering a wide range of topics
        </h2>

        <div className="flex flex-col gap-16">
          {/* Fraud Management */}
          <div className="relative flex flex-col items-end ">
            <div
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter("fraud-management")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative text-start">
                <h3 className="md-down:text-2xl text-6xl font-bold relative z-10 font-barlow">
                  FRAUD MANAGEMENT
                </h3>

                <img
                  src={
                    hoveredTopic === "fraud-management"
                      ? "/orange-cube.png"
                      : "/black-cube.png"
                  }
                  alt="Cube"
                  className="absolute top-[-3.5rem] right-[-3rem] w-36 h-36 md-down:w-24 md-down:h-24 md-down:top-[-2rem] md-down:right-[-1rem]"
                />
              </div>

              <p className="text-sm md:text-base max-w-[36rem] relative text-start ml-8 md-down:ml-4  justify-start font-montserrat items-start z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Revenue Assurance */}
          <div className="relative flex flex-col items-start justify-center">
            <div
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter("revenue-assurance")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={
                  hoveredTopic === "revenue-assurance"
                    ? "/blue-cube.png"
                    : "/black-cube.png"
                }
                alt="Cube"
                className="absolute -top-14 -left-10  md-down:top-[-1.5rem] md-down:left-[-1.5rem] w-36 h-36 md-down:w-24 md-down:h-24"
              />
              <h3 className="relative md-down:text-2xl text-6xl font-bold z-10 font-barlow">
                REVENUE ASSURANCE
              </h3>
              <p className="text-sm relative md:text-base max-w-[36rem] ml-8 md-down:ml-4 z-10 font-montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Maturity Assessment */}
          <div className="relative flex flex-col items-end">
            <div
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter("maturity-assessment")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative text-start">
                <h3 className="md-down:text-2xl text-6xl font-bold relative z-10 font-barlow">
                  MATURITY ASSESSMENT
                </h3>

                <img
                  src={
                    hoveredTopic === "maturity-assessment"
                      ? "/green-cube.png"
                      : "/black-cube.png"
                  }
                  alt="Cube"
                  className="absolute top-[-3.5rem] right-[-3rem] w-36 h-36 md-down:w-24 md-down:h-24 md-down:top-[-2rem] md-down:right-[-1rem] z-0"
                />
              </div>

              <p className="text-sm md:text-base max-w-[36rem] ml-8 md-down:ml-4  relative text-start justify-start items-start z-10 font-montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTopics;
