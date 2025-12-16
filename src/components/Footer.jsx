import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_prysm-replica/artifacts/dewbb5pm_Untitled%20design%20%2829%29.png" 
              alt="BioWell Solutions" 
              className="h-48 md:h-60 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
