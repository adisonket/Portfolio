import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 text-white max-w-4xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          className="bg-neutral-800 p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          className="bg-neutral-800 p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          className="bg-neutral-800 p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400 h-32"
          required
        />
        <button
          type="submit"
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 rounded transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
