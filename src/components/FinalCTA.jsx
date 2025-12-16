import React from 'react';

const FinalCTA = () => {
  return (
    <section className="w-full bg-[#1a1a1a] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-wide">
          I'M INTERESTED AND READY TO TAKE THE NEXT STEP
        </h2>
        <a
          href="https://kerrye.gethealthyusa.com/calendar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 md:px-16 py-4 md:py-5 bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-lg md:text-xl font-bold rounded-full hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          SCHEDULE A CALL
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
