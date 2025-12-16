import React from 'react';
import { wellnessRevolution } from '../data/mock';

const WellnessRevolutionSection = () => {
  return (
    <section className="w-full bg-[#e8f4f8] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 italic">
            {wellnessRevolution.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {wellnessRevolution.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {wellnessRevolution.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <span className="font-serif text-7xl md:text-8xl lg:text-9xl text-gray-900">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg md:text-xl text-gray-900 font-medium">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessRevolutionSection;
