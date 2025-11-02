import React, { useState, useRef } from 'react';
import { ArrowRightIcon, PlayIcon, PauseIcon } from './icons';

type HeroProps = {
  onGetStartedClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative h-[80vh] min-h-[600px] text-white overflow-hidden group"
    >
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/8043729/8043729-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/80 via-brand-blue-dark/70 to-brand-blue-dark/90"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4">
            <hr className="w-16 border-t-2 border-brand-orange" />
            <p className="text-lg font-semibold tracking-wider">ESTABLISHED 2025</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold my-6 leading-tight">
            Protecting Communities Through <span className="text-brand-orange transition-opacity hover:opacity-80">Innovation</span> & <span className="text-brand-orange transition-opacity hover:opacity-80">Purpose</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
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

      {/* Play/Pause Button */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={handlePlayPause}
          className="bg-white/20 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;