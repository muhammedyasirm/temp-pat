import React from "react";
import ContactMap from "../ContactMap/contactMap";

const ContactForm = () => {
  return (
    <>
      <div
      className="relative w-full bg-black py-10 px-20 md-down:px-0 flex flex-col md:flex-row"
      style={{
        backgroundImage: `url('/analytics-bg.png')`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
      }}
    >
      <div className="md:w-1/2 px-8 md:px-16 py-10">
        <form className="space-y-6">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              placeholder="NAME"
              className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">E-Mail</label>
            <input
              type="email"
              placeholder="E-MAIL"
              className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Phone</label>
            <input
              type="tel"
              placeholder="PHONE"
              className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              placeholder="MESSAGE"
              className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary-orange text-white font-bold hover:bg-orange-600"
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="md:w-1/2 px-8 md:px-16 py-10 text-white space-y-8 flex flex-col justify-center">
        {/* <h2 className="text-white text-[4.5rem] leading-[4.5rem] md-down:leading-[3rem] md-down:text-[2.5rem] font-bold font-barlow">PROFIT ASSURANCE TECHNOLOGY</h2> */}
        <div className="text-left mb-12 mt-4">
  <img
    src="/pat-text-white.png"
    alt="Profit Assurance Technology"
    className="h-[11rem] md-down:h-[9rem]"
  />
</div>
        <div className="flex items-center space-x-4">
          <img src="/blue-cube.png" alt="Email Icon" className="w-8 h-8" />
          <span>PROAITECHNO@GMAIL.COM</span>
        </div>
        <div className="flex items-center space-x-4">
          <img src="/green-cube.png" alt="Phone Icon" className="w-8 h-8" />
          <span>+971234567890</span>
        </div>
        <div className="flex items-center space-x-4">
          <img src="/orange-cube.png" alt="Location Icon" className="w-8 h-8" />
          <span>Diera - Garhoud Office 305 - Al Durrah 4 SBK</span>
        </div>
        <p className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, mpor incididunt ut labore et dolore magna aliqua. Quis ipsum
        </p>
      </div>
    </div>

    <div>
      <ContactMap/>
    </div>
    </>
  );
};

export default ContactForm;
