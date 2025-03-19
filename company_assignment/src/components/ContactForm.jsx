// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <>
    <div className="text-white text-center font-bold text-3xl">
      Contact Form
    </div>
    <form className="max-w-lg mx-auto bg-gray-300 p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name"
        className="w-full p-3 border rounded" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email"
        className="w-full p-3 border rounded" onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message"
        className="w-full p-3 border rounded h-32" onChange={handleChange} required />
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Send</button>
    </form>
    </>
  );
};

export default ContactForm;
