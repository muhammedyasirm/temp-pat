import React from 'react';
import { Quotes } from '@carbon/icons-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Profit Assurance Technology helped us reduce revenue leakage by 30% and improved our billing accuracy significantly.",
      author: "Jack Ellis",
      jobTitle: "Global Telecom Network",
    },
    {
      quote: "Their fraud management system cut our fraudulent activities by 40%, providing peace of mind and enhancing revenue protection.",
      author: "Amara Okoro",
      jobTitle: "Regional Bank, Africa",
    },
    {
      quote: "The tailored solutions by Profit Assurance Technology enhanced our financial reporting accuracy by 20%, streamlining our processes.",
      author: "Amelia Lily",
      jobTitle: "Fintech Startup, Asia",
    },
    {
      quote: "Their RA framework helped us scale efficiently, increasing investor confidence and expanding across multiple regions.",
      author: "Rachid Benhaddou",
      jobTitle: "Telecom Operator, Morocco",
    },
  ];

  return (
    <div
      className="bg-black text-white py-16 "
      style={{
        backgroundImage: `url('/footer-bg.png')`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:min-h-[30rem] px-20 lg-down:px-6">
        <div className="flex flex-col justify-between w-full lg:w-2/5">
          <div>
            <h2 className="text-4xl md-down:text-2xl font-bold mb-4 font-barlow">TESTIMONIALS</h2>
            <p className="text-lg md-down:text-sm mb-6 font-montserrat">
              Don’t just take our word for it! We’ve worked with tons of incredible people on ventures across all industries. One thing they all have in common is that they love our service.
            </p>
            <button className="bg-primary-orange text-white px-6 py-3 text-lg md-down:text-sm rounded hover:bg-opacity-80 transition duration-300 mb-8">
              View Cases
            </button>
          </div>
          <div className="bg-[#232323] bg-opacity-[80%] flex justify-center items-center flex-grow py-40 lg-down:py-24 px-20 lg-down:px-14 rounded-lg shadow-lg">
            <h3 className="text-4xl md-down:text-2xl font-bold font-barlow text-center">CASE STUDY</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 xl-down:grid-cols-1 gap-8 w-full lg:w-3/5 h-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#232323] min-h-[20rem] md-down:min-h-[15rem] bg-opacity-[80%] py-14 px-10 lg-down:p-8 rounded-lg shadow-inner text-center flex flex-col justify-between"
              style={{
                boxShadow: 'inset 0 0 10px rgba(59, 59, 59, 0.5)',
              }}
            >
              <div>
                <div className="flex justify-center text-primary-orange text-4xl font-bold mb-2">
                  <Quotes size={32} />
                </div>
                <p className="text-lg md-down:text-sm mb-6 font-montserrat">
                  {testimonial.quote}
                </p>
              </div>
              <div>
                <h4 className="text-lg md-down:text-sm text-primary-green font-semibold font-montserrat">{testimonial.author}</h4>
                <p className="text-lg md-down:text-sm text-[#0090fc] font-montserrat">{testimonial.jobTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
