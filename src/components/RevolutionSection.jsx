import React from 'react';
import { revolutionSection } from '../data/mock';

const RevolutionSection = () => {
  return (
    <section className="w-full bg-white py-0">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-1/2 relative">
          <div className="aspect-square lg:aspect-auto lg:h-full w-full bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={revolutionSection.image}
              alt="Prysm iO Device"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 flex items-center bg-gray-50">
          <div className="px-8 md:px-12 lg:px-16 py-16 lg:py-24">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-6 italic">
              {revolutionSection.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
              {revolutionSection.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionSection;
