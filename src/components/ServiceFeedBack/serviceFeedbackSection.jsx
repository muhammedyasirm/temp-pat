import React from "react";

const StatItem = ({ icon, text, value }) => {
  return (
    <div className="flex items-center gap-24 mb-6">
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full mr-4">
          {icon}
        </div>
        <p className="text-white font-semibold text-2xl">{text}</p>
      </div>
      <p className="text-white text-5xl font-bold">{value}</p>
    </div>
  );
};

const FeedbackSection = ({
  feedBack,
  feedBackAuthor,
  authorCompany,
  authorImage,
  cubePoints,
}) => {
  return (
    <div className="bg-gray-900 p-8 px-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="space-y-16 col-span-2">
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
          <h3 className="text-white text-xl font-bold mb-4">
            Don't just take our word for it! Check our latest feedback.
          </h3>
          <div className="bg-gray-800 rounded-md p-6">
            <div className="flex items-center justify-start gap-2 mb-4">
              <img
                src={authorImage}
                alt={feedBackAuthor}
                className="w-16 h-16 bg-white rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-gray-400 font-semibold">{feedBackAuthor}</p>
                <p className="text-gray-400">{authorCompany}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-2">{feedBack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
