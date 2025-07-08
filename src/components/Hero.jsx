import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Photo from '../assets/Photo.jpg';
import { HERO_CONTENT } from '../constants/index';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20 px-4 md:px-8 gap-10"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-10 shadow-lg w-full md:max-w-[55%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          Sanket Adhikary
        </h1>

        <div className="text-blue-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold h-[50px] mb-6">
          <TypeAnimation
            sequence={[
              'Web Developer', 1500,
              'Programmer', 1500,
              'Web Programming Enthusiast', 1500,
            ]}
            speed={50}
            deletionSpeed={30}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl">
          {HERO_CONTENT}
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={Photo}
          alt="Sanket Adhikary"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
