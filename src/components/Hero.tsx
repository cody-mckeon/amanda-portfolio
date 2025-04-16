// src/components/Hero.tsx

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Amanda McKeon
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6">
        Product Designer crafting intuitive digital experiences.
      </p>
      <a
        href="#portfolio"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
      >
        View Work
      </a>
    </section>
  );
};

export default Hero;
