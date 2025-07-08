import React from "react";
import { CONTACT } from "../constants/index";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-8 text-white max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Me</h2>
      <ul className="text-neutral-300 text-lg space-y-4">
        <li><strong>Email:</strong> {CONTACT.email}</li>
        <li><strong>Phone:</strong> {CONTACT.phoneNo}</li>
        <li><strong>Address:</strong> {CONTACT.address}</li>
      </ul>
    </section>
  );
};

export default Contact;
