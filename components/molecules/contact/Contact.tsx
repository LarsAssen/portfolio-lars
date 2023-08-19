import React, { ChangeEvent, FormEvent, useState } from 'react'

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

  const handleInput2Focus = () => {
    setEmailFocused(true);
  };

  const handleTextareaFocus = () => {
    setTextareaFocused(true);
  };
  
  return (
    <div id='contact' className="bg-cardBg lg:mx-20 mx-4 my-24">
      <h2 className="text-2xl pt-10 ml-10 font-light text-white mb-1">Like what you see?</h2>
      <h2 className="text-2xl ml-10 font-light text-primary mb-4">Lets talk!</h2>
      
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row mx-10 space-x-4 mb-4">
          <div className={`relative lg:flex-1`}>
            <label
              className={`absolute left-2 transition-all text-white duration-300 ${
                fullnameFocused ? 'text-sm -top-2' : 'top-2'
              }`}
            >
              Full Name
            </label>
            <input
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              type="text"
              className={`w-full bg-[#3F4D5E] px-3 py-2 rounded focus:outline-none focus:ring`}
              onFocus={handleInput1Focus}
            />
          </div>
          <div className={`relative mt-4 lg:flex-1`}>
            <label
              className={`absolute left-2 text-white transition-all duration-300 ${
                emailFocused ? 'text-sm -top-2' : 'top-2'
              }`}
            >
              Email
            </label>
            <input
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className={`w-full bg-[#3F4D5E] px-3 py-2 rounded focus:outline-none focus:ring`}
              onFocus={handleInput2Focus}
            />
          </div>
        </div>
        <div className={`relative mx-10`}>
          <label
            className={`absolute text-white left-2 transition-all duration-300 ${
              textareaFocused ? 'text-sm -top-2' : 'top-2'
            }`}
          >
            Text Area
          </label>
          <textarea
            className={`w-full bg-[#3F4D5E] px-3 py-2 rounded focus:outline-none`}
            onFocus={handleTextareaFocus}
            name="message" 
            value={formData.message} 
            onChange={handleChange}
          ></textarea>
        </div>


        <button
          type="submit"
          className="bg-primary my-10  mx-10 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>


    </div>
  );
};

export default Contact