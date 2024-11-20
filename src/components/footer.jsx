import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you can handle form submission (e.g., sending data to a server)
    console.log(formData);

    // After submission, reset the form
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      alert('Thank you for your message!');
    }, 2000);
  };

  return (
    <div className='lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:w-full lg:mx-[50px] lg:overflow-hidden'>
        <div className="sm:max-w-lg sm:mx-auto lg:w-full sm:p-6 sm:border-white sm:shadow-lg sm:rounded-md sm:mt-8 ">
      <h2 className="text-3xl font-semibold text-center text-white mb-4 lg:hidden">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-500">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-500">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-500">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 my-1 rounded-md w-full py-2 px-4 text-white font-semibold rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
    <div className='lg:flex flex-col align-start justify-start hidden'>
    <h2 className="text-3xl font-semibold text-end text-white mb-4 ">Contact Us Here<p>Let's work together<br></br>We get back to you in few minutes</p></h2>
    </div>
    </div>
    
  );
};

export default ContactForm;
