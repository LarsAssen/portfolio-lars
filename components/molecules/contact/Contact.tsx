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

  const [fullnameFocused, setFullnameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);

  const handleInput1Focus = () => {
    setFullnameFocused(true);
  };

  const handleInput1Blur = () => {
    setFullnameFocused(false);
  };

  const handleInput2Focus = () => {
    setEmailFocused(true);
  };

  const handleInput2Blur = () => {
    setEmailFocused(false);
  };

  const handleTextareaFocus = () => {
    setTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setTextareaFocused(false);
  };


  
    
  
  return (
    <div id='contact' className="bg-cardBg mx-20 my-24">
      <h2 className="text-2xl pt-10 ml-10 font-light text-white mb-1">Like what you see?</h2>
      <h2 className="text-2xl ml-10 font-light text-primary mb-4">Lets talk!</h2>
      
      
      <form onSubmit={handleSubmit}>
        <div className="flex mx-10 space-x-4 mb-4">
          <div className={`relative  flex-1`}>
            <label
              className={`absolute left-2 transition-all duration-300 ${
                fullnameFocused ? 'text-sm top-0 text-gray-500' : 'top-2'
              }`}
            >
              Full Name
            </label>
            <input
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              type="text"
              className={`w-full bg-[#3F4D5E] border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 ${
                fullnameFocused ? 'border-blue-500' : 'border-gray-300'
              }`}
              onFocus={handleInput1Focus}
              onBlur={handleInput1Blur}
            />
          </div>
          <div className={`relative flex-1`}>
            <label
              className={`absolute left-2 transition-all duration-300 ${
                emailFocused ? 'text-sm top-0 text-gray-500' : 'top-2'
              }`}
            >
              Email
            </label>
            <input
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className={`w-full border bg-[#3F4D5E] px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 ${
                emailFocused ? 'border-blue-500' : 'border-gray-300'
              }`}
              onFocus={handleInput2Focus}
              onBlur={handleInput2Blur}
            />
          </div>
        </div>
        <div className={`relative mx-10`}>
          <label
            className={`absolute text-white left-2 transition-all duration-300 ${
              textareaFocused ? 'text-sm top-0 text-gray-500' : 'top-2'
            }`}
          >
            Text Area
          </label>
          <textarea
            className={`w-full bg-[#3F4D5E] px-3 py-2 rounded focus:outline-none ${
              textareaFocused ? 'border-primary' : ''
            }`}
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            name="message" 
            value={formData.message} 
            onChange={handleChange}
          ></textarea>
        </div>


        <button
          type="submit"
          className="bg-blue-500 my-10  mx-10 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>


    </div>
  );
};

export default Contact