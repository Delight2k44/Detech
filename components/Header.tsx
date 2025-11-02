import React, { useState, useEffect } from 'react';
import { DetechLogo, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, ChevronDownIcon, MenuIcon, XIcon, DownloadIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#', current: true },
    { name: 'About Us', href: '#', current: false },
    { name: 'Services', href: '#', current: false, dropdown: true },
    { name: 'Careers', href: '#', current: false },
    { name: 'Pages', href: '#', current: false, dropdown: true },
  ];

  return (
    <header className="relative z-20">
      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <DetechLogo className="h-10 w-10 text-brand-blue-dark" />
              <span className="ml-2 text-2xl font-bold text-brand-blue-dark">Detech</span>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center font-medium transition-colors ${item.current ? 'text-brand-red' : 'text-gray-700 hover:text-brand-red'}`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
               <button className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition-colors">
                  <DownloadIcon className="w-5 h-5" />
                  <span>Get The App</span>
              </button>
            </div>
            
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-red hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex-shrink-0 flex items-center">
                    <DetechLogo className="h-8 w-8 text-brand-blue-dark" />
                    <span className="ml-2 text-xl font-bold text-brand-blue-dark">Detech</span>
                </div>
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <nav className="flex flex-col space-y-2">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                                item.current
                                ? 'bg-red-50 text-brand-red'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'
                            }`}
                        >
                            <span>{item.name}</span>
                            {item.dropdown && <ChevronDownIcon className="w-5 h-5" />}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t">
                <button className="w-full bg-brand-orange text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors">
                    <DownloadIcon className="w-5 h-5" />
                    <span>Get The App</span>
                </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;