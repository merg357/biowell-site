import React from 'react';
import { validationSection } from '../data/mock';
import { Check } from 'lucide-react';

const ValidationSection = () => {
  return (
    <section className="w-full bg-[#e8f4f8] py-0">
      <div className="flex flex-col lg:flex-row">
        {/* Video */}
        <div className="lg:w-1/2 flex items-center justify-center bg-black">
          <div className="w-full h-full flex items-center justify-center p-4 lg:p-8">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto max-h-[500px] rounded-lg shadow-xl object-contain"
            >
              <source 
                src="https://customer-assets.emergentagent.com/job_prysm-replica/artifacts/ykt914yg_AQPdwO-ebUmviYktyhCl3z2y5RapRc14s2hw4g8kvEq3smGSHl6GD3krcRl-PMf2QBjvCxk2j0fGMojwoy6yOFDkAWocYh41Lr-FyHXk7t92jA.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 flex items-center">
          <div className="px-8 md:px-12 lg:px-16 py-12 lg:py-16">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-8 italic">
              {validationSection.title}
            </h2>
            <div className="space-y-6">
              {validationSection.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-gray-600" strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
