import React from 'react';
import { TelkomLogo, GeekKulchaLogo } from './icons';

const partners = [
  {
    name: 'Telkom',
    logo: <TelkomLogo className="h-10 text-[#0094C8]" />,
    description: 'Strategic partner for nationwide IoT connectivity and network infrastructure.',
    website: 'https://www.telkom.co.za/'
  },
  {
    name: 'Geekulcha',
    logo: <GeekKulchaLogo className="h-12 text-white" />,
    description: 'Partnering to empower the next generation of tech innovators through hackathons and skills development programs.',
    website: 'https://www.geekulcha.com/'
  }
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-bold text-brand-blue-light tracking-widest uppercase mb-12">
          Trusted By Industry Leaders & Innovators
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about our partnership with ${partner.name}`}
              className="relative group"
            >
              <div className="bg-brand-blue-dark h-28 w-56 rounded-xl flex items-center justify-center p-6 shadow-md transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
                {partner.logo}
              </div>
              {/* Tooltip */}
              <div 
                role="tooltip"
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 text-sm text-left text-white bg-brand-blue-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pointer-events-none"
              >
                <p className="font-bold text-brand-orange">{partner.name}</p>
                <p className="text-gray-300">{partner.description}</p>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-brand-blue-dark"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;