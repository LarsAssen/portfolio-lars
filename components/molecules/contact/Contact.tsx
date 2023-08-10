import React, { ChangeEvent, FormEvent, useState } from 'react'
import emailjs from 'emailjs-com';
import Title from '@/components/atoms/Title';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    
  
  return (
    <div id='contact' className="bg-cardBg mx-20 mt-24">
      <h2 className="text-2xl text-white font-bold mb-4">Like what you see?</h2>
      <h2 className="text-2xl text-primary font-bold mb-4">Lets talk!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="full-name">Full Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
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