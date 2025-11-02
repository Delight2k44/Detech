import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from './icons';

type HeroProps = {
  onGetStartedClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="relative h-[80vh] min-h-[600px] text-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://storage.googleapis.com/aistudio-v2-dev-user-output/projects/a8169e6b-4263-4b82-97b7-6b4513758b29/requests/generation-919506691456_0.jpeg')",
          transform: `translateY(${offsetY * 0.3}px) scale(1.1)` 
        }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/80 to-brand-blue-dark/10"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4">
            <hr className="w-16 border-t-2 border-brand-orange" />
            <p 
              className="text-base font-semibold tracking-widest"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
              ESTABLISHED 2025
            </p>
          </div>
          <h1 
            className="text-4xl md:text-6xl font-extrabold my-8 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            Protecting Communities Through 
            <span className="text-brand-orange transition-all duration-300 ease-in-out hover:brightness-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_10px_rgba(247,144,9,0.8)]"> Innovation</span> & 
            <span className="text-brand-orange transition-all duration-300 ease-in-out hover:brightness-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_10px_rgba(247,144,9,0.8)]"> Purpose</span>
          </h1>
          <p 
            className="text-xl text-gray-200 mb-10 leading-relaxed"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
          >
            FireLink is redefining fire safety with smart, locally built IoT technology designed to detect fires early and save lives. Together, we’re building safer, more connected, and resilient communities.
          </p>
          <button 
            onClick={onGetStartedClick}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-red rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-brand-red-dark hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 animate-pulse-slow">
            Get Started
            <ArrowRightIcon className="w-6 h-6 ml-3 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;