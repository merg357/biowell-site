import React from 'react';
import { marketStats } from '../data/mock';
import { ChevronRight } from 'lucide-react';

const MarketStatsSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-8 italic">
            {marketStats.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto italic">
            {marketStats.description}
          </p>
        </div>

        {/* Stats Grid with Center Image */}
        <div className="relative">
          {/* Center Image */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] z-10">
            <img
              src={marketStats.modelImage}
              alt="Opportunity Model"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Top Left - $9T */}
            <div className="text-center lg:text-left lg:pr-32">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  {marketStats.stats[0].value}
                </span>
                <span className="text-gray-400 text-4xl">—</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {marketStats.stats[0].description}
              </p>
              <div className="text-xs text-gray-500">
                <span>Source:</span>
                <a href={marketStats.stats[0].sourceLink} className="ml-1 underline hover:text-gray-700 inline-flex items-center">
                  {marketStats.stats[0].source}
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Top Right - $200B */}
            <div className="text-center lg:text-right lg:pl-32">
              <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                <span className="text-gray-400 text-4xl">—</span>
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  {marketStats.stats[1].value}
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {marketStats.stats[1].description}
              </p>
              <div className="text-xs text-gray-500">
                <span>Source:</span>
                <a href={marketStats.stats[1].sourceLink} className="ml-1 underline hover:text-gray-700 inline-flex items-center">
                  {marketStats.stats[1].source}
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Bottom Left - $54B */}
            <div className="text-center lg:text-left lg:pr-32 mt-8 lg:mt-16">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  {marketStats.stats[2].value}
                </span>
                <span className="text-gray-400 text-4xl">—</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {marketStats.stats[2].description}
              </p>
              <div className="text-xs text-gray-500">
                <span>Source:</span>
                <a href={marketStats.stats[2].sourceLink} className="ml-1 underline hover:text-gray-700 inline-flex items-center">
                  {marketStats.stats[2].source}
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Bottom Right - 91% */}
            <div className="text-center lg:text-right lg:pl-32 mt-8 lg:mt-16">
              <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
                <span className="text-gray-400 text-4xl">—</span>
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  {marketStats.stats[3].value}
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {marketStats.stats[3].description}
              </p>
              <div className="text-xs text-gray-500">
                <span>Source:</span>
                <a href={marketStats.stats[3].sourceLink} className="ml-1 underline hover:text-gray-700 inline-flex items-center">
                  {marketStats.stats[3].source}
                  <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Center Image */}
          <div className="lg:hidden flex justify-center my-12">
            <img
              src={marketStats.modelImage}
              alt="Opportunity Model"
              className="w-64 h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStatsSection;
