import React from "react";

const StatItem = ({ icon, text }) => {
  return (
    <div className="flex gap-10 md-down:gap-5 mb-6 text-start md-down:flex-col md-down:text-center md-down:mt-4">
      <div className="flex items-center md-down:gap-5">
        <div className="w-10 h-10 min-w-10 min-h-10 flex items-center justify-center rounded-full mr-4">
          {icon}
        </div>
        <p className="text-white text-2xl lg-down:text-2xl">
          {text}
        </p>
      </div>
    </div>
  );
};

const FeedbackSection = ({ cubePoints, cubeIcon }) => {
  const half = Math.ceil(cubePoints.length / 2);
  const leftPoints = cubePoints.slice(0, half);
  const rightPoints = cubePoints.slice(half);

  return (
    <div className="flex flex-col gap-2">
      {cubePoints && cubePoints.length > 0 && (
        <div className="flex gap-4 lg-down:flex-col lg:gap-8">
          <div className="flex flex-col gap-8 lg:w-1/2">
            {leftPoints.map((point, index) => (
              <StatItem
                key={index}
                icon={<img src={cubeIcon} alt="Cube" />}
                text={point.description}
              />
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:w-1/2">
            {rightPoints.map((point, index) => (
              <StatItem
                key={index}
                icon={<img src={cubeIcon} alt="Cube" />} 
                text={point.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;