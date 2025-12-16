import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieChoice', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieChoice', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-l-4 border-l-gray-300 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              Your cookie preferences
            </h3>
            <p className="text-sm text-gray-600">
              We use cookies to optimize our website, personalize and measure the effectiveness of advertising and collect statistics on usage.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-xs text-gray-600 underline hover:text-gray-900">Privacy notice</a>
              <a href="#" className="text-xs text-gray-600 underline hover:text-gray-900">Cookie policy</a>
              <a href="#" className="text-xs text-gray-600 underline hover:text-gray-900">My rights</a>
              <a href="#" className="text-xs text-gray-600 underline hover:text-gray-900">Don't sell my data</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-2 border border-gray-300 text-gray-700 text-sm hover:bg-gray-50 transition-colors min-w-[120px]"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors min-w-[120px]"
            >
              Accept all
            </button>
            <button
              className="px-6 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors min-w-[120px]"
            >
              Cookie preferences
            </button>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-2 right-2 md:relative md:top-0 md:right-0 p-1 hover:bg-gray-100 rounded"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
