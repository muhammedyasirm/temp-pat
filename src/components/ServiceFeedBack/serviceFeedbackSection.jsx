import React from "react";

const StatItem = ({ icon, text, value }) => {
  return (
    <div className="flex gap-10 md-down:gap-5 mb-6 text-start md-down:flex-col md-down:text-center">
      <div className="flex items-center md-down:flex-col md-down:gap-5">
        <div className="w-10 h-10 flex items-center justify-center rounded-full mr-4">
          {icon}
        </div>
        <p className="text-white font-semibold text-3xl lg-down:text-2xl max-w-[500px]">
          {text} to continue to test the speed of the typing
        </p>
      </div>
      <p className="text-white text-5xl lg-down:text-3xl font-bold text-start md-down:text-center">
        {value}
      </p>
    </div>
  );
};

const FeedbackSection = ({
  feedBack,
  feedBackAuthor,
  authorCompany,
  authorImage,
  cubePoints,
  graph,
}) => {
  return (
    <>
      <div className="bg-[#292929] py-10 px-36 xl-down:px-10 flex flex-col gap-2"
        style={{
              backgroundImage: `url('/footer-bg.png')`,
              backgroundSize: "45% 90%",
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
            }}
      >
        <div className="flex gap-4 lg-down:flex-col">
          <div
            className=" min-w-[65%] flex flex-col justify-center gap-8">
            {cubePoints.map((point, index) => (
              <StatItem
                key={index}
                icon={<img src="/blue-cube.png" alt="Cube" />}
                text={point.description}
                value={point.number}
              />
            ))}
          </div>
          <div className="rounded-lg">
            <h3 className="text-white text-xl font-bold mb-4 lg-down:text-center">
              Don't just take our word for it! Check our latest feedback.
            </h3>
            <div className="bg-[#151515] rounded-md p-6 md-down:p-4">
              <div className="flex lg-down:flex-col items-center justify-start gap-2 mb-4">
                <img
                  src={authorImage}
                  alt={feedBackAuthor}
                  className="w-16 h-16 bg-white rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-gray-400 font-semibold">
                    {feedBackAuthor}
                  </p>
                  <p className="text-gray-400">{authorCompany}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2 lg-down:text-center">
                {feedBack}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#292929] flex justify-center">
        <img src={graph} alt="graph" className="w-full"/>
      </div>
    </>
  );
};

export default FeedbackSection;
