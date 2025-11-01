import React from 'react';

type HeroProps = {
  onGetStartedClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '1M+', label: 'Users Served' },
    { value: '100+', label: 'Expert Engineers' },
  ];

  return (
    <div className="relative h-[80vh] min-h-[600px] text-white bg-brand-blue-dark">
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4">
            <hr className="w-16 border-t-2 border-brand-orange" />
            <p className="text-lg font-semibold tracking-wider">ESTABLISHED 2025</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold my-6 leading-tight">
            Protecting Communities Through <span className="text-brand-orange">Innovation</span> & <span className="text-brand-orange">Purpose</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            FireLink is redefining fire safety with smart, locally built IoT technology designed to detect fires early and save lives. Together, we’re building safer, more connected, and resilient communities.
          </p>
          <button 
            onClick={onGetStartedClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-red rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-brand-red-dark focus:outline-none focus:ring-4 focus:ring-red-300 animate-pulse-slow">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white opacity-10 group-hover:w-full group-hover:h-full"></span>
            <span className="relative">
                Get Started
            </span>
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <p className="text-5xl font-bold text-brand-red">{stat.value}</p>
                <p className="text-lg text-gray-200 mt-1">{stat.label}</p>
                 {index < stats.length - 1 && <div className="hidden md:block absolute top-1/2 right-0 h-16 w-px bg-gray-500 transform -translate-y-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;