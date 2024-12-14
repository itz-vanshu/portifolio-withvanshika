 import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Message sent!');
    };
  
    return (
      <section className="bg-[url('https://tse1.mm.bing.net/th?id=OIP.70qtFqJr5x0lKOkKViwufAHaE8&pid=Api&P=0&h=180')]  bg-cover py-16 text-center">
                 {/* <div className="bg-[url('https://example.com/your-image.jpg')] bg-cover bg-center h-screen"> */}

        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Send
          </button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  