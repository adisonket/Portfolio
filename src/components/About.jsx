import React from "react";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section
      id='about'
      className="py-20 px-8 text-white max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
      <p className="text-neutral-300 text-lg">{ABOUT_TEXT}</p>
    </section>
  );
};

export default About;
