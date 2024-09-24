import React, { useState } from "react";
import emailjs from "emailjs-com";
import { showToast } from "../Toast/toastify";

const ReservationDialog = ({ isOpen, onClose, title, date }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      title: title,
      date: date,
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_REG_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          showToast("success", "Reservation submitted successfully!");
          onClose(); // Close dialog after submission
        },
        (error) => {
          console.log("FAILED...", error);
          showToast("error", "Reservation failed to submit, please try again.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-[90%] max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{title} - {date}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-orange text-white py-2 px-4"
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationDialog;
