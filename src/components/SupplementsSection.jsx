import React from 'react';
import { supplementsSection } from '../data/mock';

const SupplementsSection = () => {
  return (
    <section className="w-full bg-[#1a1a1a] text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 italic leading-tight">
          {supplementsSection.title}
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-16">
          {supplementsSection.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {supplementsSection.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img
                  src={feature.iconUrl}
                  alt={feature.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-white text-center leading-snug">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplementsSection;
