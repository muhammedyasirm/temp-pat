import React from "react";

const CaseStudyModal = ({
  isOpen,
  onClose,
  image,
  stats,
  content,
  challenge,
  solution,
  outcome,
  quote,
  author,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg max-h-screen overflow-y-auto no-scrollbar">
        <div className="p-8 bg-black md-down:p-1">
          <h2 className="text-2xl font-bold mb-4 text-white md-down:flex md-down:justify-center md-down:mt-4">
            Case Study Details
          </h2>
          <div className="bg-white border-4 border-orange-500">
            <div className="bg-black p-8">
              <img
                src={image}
                alt="Case Study"
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <div className="flex flex-wrap justify-center gap-12 mt-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl font-bold" style={{ color: stat.color }}> 
                      {stat.value}
                    </p>
                    <p style={{ color: stat.color }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="md:col-span-1">
                <p className="text-gray-700">{content}</p>
                <h3 className="text-xl font-semibold mt-4">The Challenge</h3>
                <p className="text-gray-700 mt-2">{challenge}</p>
              </div>
              <div className="flex flex-col">
                <div className="bg-[#1F1F1F] bg-opacity-30 p-6 lg-down:p-3 rounded-lg shadow-lg text-center">
                  <div className="text-center text-primary-orange text-4xl font-bold">
                    “
                  </div>
                  <p className="text-[1.2rem] lg-down:text-base mb-6 font-montserrat">
                    {quote}
                  </p>
                  <h4 className="text-lg text-primary-green font-semibold font-montserrat">
                    {author.name}
                  </h4>
                  <p className="text-sm text-primary-blue font-montserrat">
                    {author.position}
                  </p>
                </div>
                <div className="mt-2 text-gray-700">
                    <h3 className="text-xl font-semibold mt-4">The Solution</h3>
                    <p className="text-gray-700 mt-2">{solution}</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mt-4 flex justify-center md-down:justify-start">The Outcome</h3>
                    <p className="text-gray-700 mt-2">{outcome}</p>
              </div>
            </div>
            <div className="flex justify-end mt-4 p-8">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;



