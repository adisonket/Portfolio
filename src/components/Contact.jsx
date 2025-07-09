import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="scroll-mt-28 py-16 container mx-auto px-4" data-aos="fade-up">
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-neutral-800 p-3 rounded text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-neutral-800 p-3 rounded text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-neutral-800 p-3 rounded text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-400 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;