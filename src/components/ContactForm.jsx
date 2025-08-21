"use client";

import contactFormAction from "@/app/contact/contactForm.action";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    // You can integrate this form with your backend to handle submissions.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex justify-center items-center py-12'>
      <form
        // onSubmit={handleSubmit}
        action={contactFormAction}
        className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-green-700'
      >
        <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
          Contact Us
        </h2>

        {/* Name Field */}
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-700 font-medium mb-2'
          >
            Your Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600'
          />
        </div>

        {/* Email Field */}
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-medium mb-2'
          >
            Your Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600'
          />
        </div>

        {/* Message Field */}
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='block text-gray-700 font-medium mb-2'
          >
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows='6'
            className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600'
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-purple-700 focus:outline-none'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
