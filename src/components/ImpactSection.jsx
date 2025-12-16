import React from 'react';
import { impactFactors } from '../data/mock';
import { Apple, Pill, Zap, Scale } from 'lucide-react';

const ImpactSection = () => {
  // Fallback icons using lucide-react
  const getIcon = (iconType) => {
    const iconClass = "w-16 h-16 md:w-20 md:h-20 text-gray-700 stroke-[1]";
    switch(iconType) {
      case 'dietary':
        return <Apple className={iconClass} />;
      case 'supplements':
        return <Pill className={iconClass} />;
      case 'oxidative':
        return <Zap className={iconClass} />;
      case 'bmi':
        return <Scale className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#f5f0e8] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 text-center mb-16 italic">
          {impactFactors.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {impactFactors.factors.map((factor, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 mb-4 flex items-center justify-center rounded-full border-2 border-gray-300">
                <img
                  src={factor.iconUrl}
                  alt={factor.title}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling && (e.target.nextSibling.style.display = 'block');
                  }}
                />
                <div className="hidden">
                  {getIcon(factor.icon)}
                </div>
              </div>
              <h3 className="text-sm md:text-base text-gray-800">
                {factor.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
