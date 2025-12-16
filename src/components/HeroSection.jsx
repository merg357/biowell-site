import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero Video */}
      <div className="w-full flex justify-center px-4 py-8">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
        >
          <source 
            src="https://customer-assets.emergentagent.com/job_prysm-replica/artifacts/t9zbqcr5_Prysm%20iO%20The%20Future%20of%20Nutritional%20Wellness%20%20SPIRIT-1920x1080-avc1-mp4a.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
