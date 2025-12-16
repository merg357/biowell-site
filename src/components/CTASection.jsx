import React from 'react';
import { ctaSection, footerNotes } from '../data/mock';

const CTASection = () => {
  return (
    <section className="w-full">
      {/* CTA with Image */}
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-1/2">
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden">
            <img
              src="https://customer-assets.emergentagent.com/job_prysm-replica/artifacts/whiq30pe_Screenshot%202025-12-16%20141404.jpg"
              alt="BioWell Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content - replaced with image */}
        <div className="lg:w-1/2">
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden">
            <img
              src="https://customer-assets.emergentagent.com/job_prysm-replica/artifacts/4qzf6aze_Screenshot%202025-12-16%20141550.jpg"
              alt="Prysm iO Benefits"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-xs text-gray-500 space-y-1">
            {footerNotes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
