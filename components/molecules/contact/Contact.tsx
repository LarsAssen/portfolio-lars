import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Title from '@/components/atoms/Title';

const Contact = () => {
    const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e:any) => {
    e.preventDefault();

    // Replace these with your EmailJS service configuration
    const serviceId = "your_emailjs_service_id";
    const templateId = "your_emailjs_template_id";
    const userId = "your_emailjs_user_id";

    const templateParams = {
      fullName: fullName,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response:any) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error:any) => {
        console.error("Error sending email:", error);
      });

    // Clear form fields after submission
    setFullName("");
    setEmail("");
    setMessage("");
  };
  
  return (
    <div id='contact' className="bg-cardBg mx-20 mt-24">
      <h2 className="text-2xl text-white font-bold mb-4">Like what you see?</h2>
      <h2 className="text-2xl text-primary font-bold mb-4">Lets talk!</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            className="w-full border p-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full border p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="w-full border p-2"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact