import React, { useState } from 'react';
import { DetechLogo, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, CheckCircleIcon } from './icons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    if (!email) {
      setError('Email address is required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted with email:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // Reset success message after 5 seconds
  };

  return (
    <footer className="bg-brand-blue-dark text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About & Newsletter */}
          <div>
            <div className="flex items-center mb-4">
              <DetechLogo className="h-10 w-10 text-brand-red" />
              <span className="ml-2 text-2xl font-bold text-white">Detech</span>
            </div>
            <p className="text-sm mb-6">
              At DETECH, we’re dedicated to creating smart, affordable fire safety solutions that protect lives and empower communities across Africa. Innovation, impact, and accessibility drive everything we do.
            </p>
            <h4 className="font-bold text-white mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-sm mb-3">Stay updated on our latest innovations, community projects, and partnership opportunities.</p>
            <div>
              <form className="flex" onSubmit={handleSubmit} noValidate>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                    setIsSubmitted(false);
                  }}
                  className={`w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 ${isSubmitted ? 'ring-green-500' : error ? 'ring-red-500' : 'focus:ring-brand-orange'}`}
                  aria-invalid={!!error}
                  aria-describedby="email-error email-success"
                />
                <button type="submit" className="bg-brand-orange text-white font-bold px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                  Go
                </button>
              </form>
              {error && <p id="email-error" className="text-red-500 text-xs mt-1">{error}</p>}
              {isSubmitted && (
                <div id="email-success" className="flex items-center text-green-400 text-sm mt-2">
                  <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Our Solutions</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Research & Development</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Future Plans</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Coverage Areas</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">How We Serve</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Community Updates</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">DETECH HQ, Bloemfontein, South Africa</li>
              <li className="flex items-start">📧 detechfirelink@outlook.com</li>
              <li className="flex items-start">📞 +27 65 987 6543</li>
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