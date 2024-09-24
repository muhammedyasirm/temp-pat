import React, { useState } from "react";
import ContactMap from "../ContactMap/contactMap";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true); // Show dialog box on successful submission
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  const handleCloseDialog = () => {
    setIsSubmitted(false); // Close dialog box
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "", // Reset form fields to empty
    });
  };

  return (
    <>
      <div
        className="relative w-full bg-black py-10 px-20 md-down:px-0 flex flex-col md:flex-row"
        style={{
          backgroundImage: `url('/analytics-bg.png')`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
        }}
      >
        <div className="md:w-1/2 px-8 md:px-16 py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">E-Mail</label>
              <input
                type="email"
                name="email"
                placeholder="E-MAIL"
                className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="PHONE"
                className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                name="message"
                placeholder="MESSAGE"
                className="w-full p-2 bg-white border-b border-white text-black placeholder-gray-500 h-32"
                value={formData.message}
                onChange={handleChange}
                required
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
            <img
              src="/orange-cube.png"
              alt="Location Icon"
              className="w-8 h-8"
            />
            <span>Diera - Garhoud Office 305 - Al Durrah 4 SBK</span>
          </div>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, mpor
            incididunt ut labore et dolore magna aliqua. Quis ipsum
          </p>
        </div>
      </div>

      <div>
        <ContactMap />
      </div>

      {/* Dialog Box */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-bold mb-4">Message Received</h2>
            <p className="mb-4">
              Your message has been received. You will be contacted soon!
            </p>
            <button
              className="px-4 py-2 bg-primary-orange text-white rounded hover:bg-orange-600"
              onClick={handleCloseDialog}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
