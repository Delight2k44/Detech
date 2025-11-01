
import React, { useState } from 'react';
import { ClockIcon, MailIcon, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, PhoneIcon, ChevronDownIcon, ShieldCheckIcon, MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', current: true },
    { name: 'About Us', href: '#', current: false },
    { name: 'Services', href: '#', current: false, dropdown: true },
    { name: 'Careers', href: '#', current: false },
    { name: 'Pages', href: '#', current: false, dropdown: true },
  ];

  return (
    <header className="relative z-20">
      {/* Top bar */}
      <div className="hidden md:block bg-gradient-to-r from-brand-blue-dark via-brand-blue-light to-brand-blue-dark text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4" />
              <span>Everyday 24 Hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="w-4 h-4" />
              <span>info@detech.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-brand-red transition-colors">Office Locator</a>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-brand-red transition-colors"><FacebookIcon className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><TwitterIcon className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><LinkedInIcon className="w-4 h-4" /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><InstagramIcon className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <ShieldCheckIcon className="h-10 w-10 text-brand-red" />
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
               <div className="flex items-center space-x-2">
                <div className="bg-brand-red text-white rounded-full p-2">
                    <PhoneIcon className="w-5 h-5"/>
                </div>
                <div>
                    <p className="text-xs text-gray-500">Emergency Call 24/7</p>
                    <p className="font-bold text-brand-blue-dark">+1-555-707-1234</p>
                </div>
               </div>
            </div>
            
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${item.current ? 'bg-brand-red text-white' : 'text-gray-700 hover:bg-gray-200 hover:text-brand-red'}`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                </a>
              ))}
            </div>
             <div className="px-4 py-4 border-t border-gray-200">
               <div className="flex items-center space-x-2">
                <div className="bg-brand-red text-white rounded-full p-2">
                    <PhoneIcon className="w-5 h-5"/>
                </div>
                <div>
                    <p className="text-xs text-gray-500">Emergency Call 24/7</p>
                    <p className="font-bold text-brand-blue-dark">+1-555-707-1234</p>
                </div>
               </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
