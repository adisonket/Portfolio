import React from "react";
import { ABOUT_TEXT, CONTACT } from "../constants/index";

const About = () => {
  return (
    <section
      id='about'
      className="scroll-mt-28 py-12 md:py-20 px-4 md:px-8 flex justify-center items-center"
      data-aos="fade-up"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-10 shadow-lg max-w-6xl w-full">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-neutral-300 text-base sm:text-lg mb-6">{ABOUT_TEXT}</p>

        <div className="mt-6 space-y-2">
          <p className="text-neutral-300 text-base sm:text-lg">
            <span className="font-semibold text-white">Email:</span> {CONTACT.email}
          </p>
          <p className="text-neutral-300 text-base sm:text-lg">
            <span className="font-semibold text-white">Phone:</span> {CONTACT.phoneNo}
          </p>
          <p className="text-neutral-300 text-base sm:text-lg">
            <span className="font-semibold text-white">Address:</span> {CONTACT.address}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
