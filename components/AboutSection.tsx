import React from 'react';
import { CheckIcon, ShieldCheckIcon, StarIcon, ServerIcon } from './icons';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative h-full min-h-[450px]">
          <div className="absolute top-0 left-0 w-[80%] h-[90%] shadow-2xl rounded-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/5439427/pexels-photo-5439427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Detech Engineer at work" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[55%] border-8 border-white rounded-lg shadow-2xl overflow-hidden">
             <img src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Detech Server Room" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content Section */}
        <div>
          <p className="text-sm font-bold text-brand-blue-light tracking-widest uppercase">WHO WE ARE</p>
          <h2 className="text-4xl font-bold text-brand-blue-dark my-4">Transforming community safety through smart, affordable innovation.</h2>
          <p className="text-gray-600 mb-8">
            DETECH, we’re driven by a passion to create real solutions for real problems. Our flagship innovation, FireLink, combines smart engineering and community-driven design to make fire detection faster, smarter, and more accessible. We believe technology should save lives, empower people, and build safer futures for every community.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckIcon className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h3 className="font-bold text-brand-blue-dark">Agile Development</h3>
                <p className="text-gray-600 text-sm mt-1">Enim ipsum sociosqu quisque sem molestie potenti.</p>
              </div>
            </div>
             <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <CheckIcon className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h3 className="font-bold text-brand-blue-dark">Proactive Security</h3>
                <p className="text-gray-600 text-sm mt-1">Sem tristique suscipit duis magnis maximus.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <ShieldCheckIcon className="w-10 h-10 mx-auto text-brand-orange mb-2" />
              <p className="text-2xl font-bold text-brand-blue-dark">10,000+</p>
              <p className="text-gray-600">Lives Protected</p>
            </div>
            <div>
              <StarIcon className="w-10 h-10 mx-auto text-brand-orange mb-2" />
              <p className="text-2xl font-bold text-brand-blue-dark">5-Star</p>
              <p className="text-gray-600">Rated App</p>
            </div>
            <div>
              <ServerIcon className="w-10 h-10 mx-auto text-brand-orange mb-2" />
              <p className="text-2xl font-bold text-brand-blue-dark">99.9%</p>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;