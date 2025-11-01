
import React from 'react';
import { ServerIcon, ShieldCheckIcon, ClockIcon } from './icons';

const StrengthsSection: React.FC = () => {
  const strengths = [
    {
      icon: <ClockIcon className="w-8 h-8 text-brand-red" />,
      title: '24/7 Technical Support',
      description: 'Nullam curabitur morbi mauris fringilla sagittis lorem. Ultrices velit mus litora vivamus leo lorem.'
    },
    {
      icon: <ServerIcon className="w-8 h-8 text-brand-red" />,
      title: 'Veteran Engineers',
      description: 'Nullam curabitur morbi mauris fringilla sagittis lorem. Ultrices velit mus litora vivamus leo lorem.'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-brand-red" />,
      title: 'Guaranteed Uptime',
      description: 'Nullam curabitur morbi mauris fringilla sagittis lorem. Ultrices velit mus litora vivamus leo lorem.'
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content Section */}
        <div>
          <p className="text-sm font-bold text-brand-blue-light tracking-widest uppercase">WHY CHOOSE US</p>
          <h2 className="text-4xl font-bold text-brand-blue-dark my-4">Robust Solutions for Mission-Critical Systems</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
          <img src="https://placehold.co/700x550/344054/FFFFFF?text=Detech+Team" alt="Detech team collaborating" className="w-full h-auto rounded-lg shadow-2xl" />
          <div className="absolute top-8 right-8 bg-brand-red text-white p-6 text-center rounded-lg shadow-lg">
            <p className="text-5xl font-bold">10+</p>
            <p className="font-semibold">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
