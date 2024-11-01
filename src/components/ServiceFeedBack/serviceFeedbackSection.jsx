import React from "react";

const StatItem = ({ icon, text, textColor = "text-white" }) => {
  return (
    <div className="flex gap-10 md-down:gap-5 mb-6 text-start md-down:flex-col  md-down:mt-4">
      <div className="flex items-center md-down:gap-5">
        <div className="w-12 h-12 min-w-12 min-h-12 flex items-center justify-center rounded-full mr-4">
          {icon}
        </div>
        <p className={`${textColor} text-lg md-down:text-sm font-montserrat`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const FeedbackSection = ({ cubePoints, cubeIcon, textColor = "text-white" }) => {
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
                icon={<img src={cubeIcon} alt="Cube" className="w-12 h-12 md-down:w-10 md-down:h-10 md-down:mt-1"/>}
                text={point.description}
                textColor={textColor}
              />
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:w-1/2">
            {rightPoints.map((point, index) => (
              <StatItem
                key={index}
                icon={<img src={cubeIcon} alt="Cube" className="w-12 h-12 md-down:w-10 md-down:h-10 md-down:mt-1"/>} 
                text={point.description}
                textColor={textColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;