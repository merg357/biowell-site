import React from 'react';
import { discoverSection } from '../data/mock';

const DiscoverSection = () => {
  return (
    <section id="discover" className="w-full">
      {/* Dark Header */}
      <div className="bg-[#1a1a1a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 italic">
            {discoverSection.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            {discoverSection.subtitle}
          </p>
        </div>
      </div>

      {/* How It Works - White/Gray Background */}
      <div className="bg-white py-0">
        <div className="flex flex-col lg:flex-row">
          {/* Content */}
          <div className="lg:w-1/2 flex items-center bg-gray-50">
            <div className="px-8 md:px-12 lg:px-16 py-16 lg:py-24">
              <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6">
                {discoverSection.howItWorks.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {discoverSection.howItWorks.description}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full bg-gradient-to-br from-pink-100 via-purple-100 to-green-100 overflow-hidden">
              <img
                src={discoverSection.howItWorks.image}
                alt="Prysm iO Device"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carotenoids Section */}
      <div className="bg-[#f5f0e8] py-0">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
            <img
              src="https://customer-assets.emergentagent.com/job_prysm-replica/artifacts/a795i3ba_Screenshot%202025-12-16%20141438.jpg"
              alt="Carotenoids"
              className="w-full h-auto object-contain max-h-[600px]"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 flex items-center bg-[#f5f0e8]">
            <div className="px-8 md:px-12 lg:px-16 py-16 lg:py-24">
              <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6">
                {discoverSection.carotenoids.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {discoverSection.carotenoids.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
