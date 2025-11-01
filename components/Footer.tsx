
import React from 'react';
import { ShieldCheckIcon, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-dark text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About & Newsletter */}
          <div>
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-10 w-10 text-brand-red" />
              <span className="ml-2 text-2xl font-bold text-white">Detech</span>
            </div>
            <p className="text-sm mb-6">
              Netus torquent habitant ligula fames bibendum tempor sit. Habitasse donec maecenas amet sit porttitor facilisi potenti justo montes.
            </p>
            <h4 className="font-bold text-white mb-3">Subscribe Newsletter</h4>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-brand-orange text-white font-bold px-4 py-2 rounded-r-md hover:bg-opacity-90">
                Go
              </button>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Our Projects</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Strategic Plan</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Coverage Area</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">How We Serve</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Community News</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">789 Tech Ave, Smalltown, TX 23456</li>
              <li className="flex items-start">info@detech.com</li>
              <li className="flex items-start">(555) 987-6543</li>
            </ul>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-brand-blue-light rounded-full hover:bg-brand-red transition-colors"><FacebookIcon className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-brand-blue-light rounded-full hover:bg-brand-red transition-colors"><TwitterIcon className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-brand-blue-light rounded-full hover:bg-brand-red transition-colors"><LinkedInIcon className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-brand-blue-light rounded-full hover:bg-brand-red transition-colors"><InstagramIcon className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <p>Copyright © 2024 Detech by AI</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
