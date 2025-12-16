import React from 'react';
import { Home } from 'lucide-react';
import { navigation, heroData } from '../data/mock';

const Header = () => {
  return (
    <header className="w-full bg-white relative z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <button className="text-xs text-gray-600 border border-gray-300 px-3 py-1 rounded hover:bg-gray-50 transition-colors">
            {navigation.regionText}
          </button>
        </div>
      </div>

      {/* Main Header with Hero Text */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col items-center text-center">
            {/* Hero Text Centered */}
            <div className="max-w-2xl">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight italic">
                {heroData.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                {heroData.subtitle}
              </p>
              <a
                href="https://kerrye.gethealthyusa.com/gorep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {heroData.ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Home size={16} />
          <a href="/" className="hover:underline underline-offset-4">Home</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
