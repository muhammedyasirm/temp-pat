import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactFormSection = ({ buttonColor = "#f15930" }) => {
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
          setIsSubmitted(true);
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  const handleCloseDialog = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
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
          className="w-full py-2 font-bold text-white hover:opacity-80"
          style={{ backgroundColor: buttonColor }}
        >
          SUBMIT
        </button>
      </form>

      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-bold mb-4">Message Received</h2>
            <p className="mb-4">
              Your message has been received. You will be contacted soon!
            </p>
            <button
              className="px-4 py-2 text-white rounded hover:opacity-80"
              style={{ backgroundColor: buttonColor }}
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

export default ContactFormSection;