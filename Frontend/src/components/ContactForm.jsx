import React, { useState } from 'react';
import { Link } from "react-router-dom";


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    alert(`Thanks for contacting us, ${name}! We'll be in touch soon.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl mb-8 font-bold text-center">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 h-24 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
      <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back To Home
            </button>
          </Link>
    </div>
  );
};

export default ContactForm;
