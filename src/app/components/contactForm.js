"use client";
import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";

const ContactForm = ({ onClose,selectedPackage, setSelectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Subject will be automatically updated based on selectedPackage
    message: '',
    service_package: '', // Ensure this matches with the form data's field
  });

  const [formStatus, setFormStatus] = useState(null);

  // Update formData whenever the selectedPackage changes
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      service_package: selectedPackage, // Set selected package in the form data
      subject: `Website package ${selectedPackage}`, // Set subject based on the selected package
    }));
  }, [selectedPackage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Form submitted successfully:', data);
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          service_package: '', // Clear the package field after form submission
        });
        setSelectedPackage(''); // Clear the selected package after form submission
      } else {
        console.error('Form submission failed:', data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setFormStatus('error');
    }
  };

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
  };

  const getButtonClass = (packageName) => {
    return selectedPackage === packageName
      ? 'px-4 py-2 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4'
      : 'px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4';
  };

  return (
    <div className="relative bg-gray-100 p-6 rounded-lg">

      <button onClick={onClose} className="absolute right-5 text-black rounded">
        <IoMdClose className='size-6' />
      </button>      

      <div className="space-y-4 max-lg:mt-4">
        <button
          type="button"
          className={getButtonClass('Landing Starter')}
          onClick={() => handlePackageSelect('Landing Starter')}
          aria-label="Select Landing Starter package"
        >
          Landing Starter
        </button>
        <button
          type="button"
          className={getButtonClass('Business Starter')}
          onClick={() => handlePackageSelect('Business Starter')}
          aria-label="Select Business Starter package"
        >
          Business Starter
        </button>
        <button
          type="button"
          className={getButtonClass('Professional E-Commerce')}
          onClick={() => handlePackageSelect('Professional E-Commerce')}
          aria-label="Select Professional E-Commerce package"
        >
          Professional E-Commerce
        </button>
      </div>

      {formStatus === 'loading' && <p>Sending your message...</p>}
      {formStatus === 'success' && <p>Your message has been sent!</p>}
      {formStatus === 'error' && <p>There was an error submitting your message. Please try again.</p>}

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"
        />
        <textarea
          placeholder="Message"
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"
        ></textarea>
        <button
          type="submit"
          className="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-2" viewBox="0 0 548.244 548.244">
            <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" />
          </svg>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
