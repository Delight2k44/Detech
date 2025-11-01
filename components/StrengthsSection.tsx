
import React from 'react';
import { ServerIcon, ShieldCheckIcon, ClockIcon } from './icons';

const StrengthsSection: React.FC = () => {
  const strengths = [
    {
      icon: <ClockIcon className="w-8 h-8 text-brand-red" />,
      title: 'Always Connected, Always Ready',
      description: 'Our system operates 24/7, sending instant alerts to users and emergency services even without stable internet.'
    },
    {
      icon: <ServerIcon className="w-8 h-8 text-brand-red" />,
      title: 'Driven by Passionate Innovators',
      description: 'Created by young South African engineers who understand the challenges of township fires and are committed to real impact.'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-brand-red" />,
      title: 'Proven Reliability',
      description: 'Built with secure hardware and tested software to ensure dependable performance in any environment.'
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content Section */}
        <div>
          <p className="text-sm font-bold text-brand-blue-light tracking-widest uppercase">WHY CHOOSE US</p>
          <h2 className="text-4xl font-bold text-brand-blue-dark my-4">Smart, Reliable Fire Safety</h2>
          <p className="text-gray-600 mb-8">
            FireLink uses IoT technology to detect and alert communities instantly, reducing fire damage and saving lives.
          </p>
          <div className="space-y-8">
            {strengths.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-blue-dark">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          {/* TODO: Add image of the Detech team collaborating */}
          <img src="https://placehold.co/700x550/344054/FFFFFF?text=Detech+Team" alt="Detech team collaborating" className="w-full h-auto rounded-lg shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
