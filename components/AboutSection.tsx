
import React from 'react';
import { PhoneIcon, CheckIcon } from './icons';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative h-full min-h-[450px]">
          <div className="absolute top-0 left-0 w-[80%] h-[90%] shadow-2xl rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x800/101828/FFFFFF?text=Detech+Engineer" alt="Detech Engineer at work" className="w-full h-full object-cover" />
             <div className="absolute top-4 right-4 bg-brand-red text-white p-6 rounded-lg shadow-lg max-w-[200px]">
                <PhoneIcon className="w-8 h-8 mx-auto mb-2"/>
                <p className="text-center font-bold">24/7 Support</p>
                <p className="text-center text-xl font-bold mt-1">+1-555-707-1234</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[55%] border-8 border-white rounded-lg shadow-2xl overflow-hidden">
             <img src="https://placehold.co/400x300/344054/FFFFFF?text=Server+Room" alt="Detech Server Room" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content Section */}
        <div>
          <p className="text-sm font-bold text-brand-blue-light tracking-widest uppercase">WHO WE ARE</p>
          <h2 className="text-4xl font-bold text-brand-blue-dark my-4">Engineering the Future with Unwavering Innovation</h2>
          <p className="text-gray-600 mb-6">
            Vitae quis letius eleifend parturient facilisis. Pulvinar curabitur feugiat ligula velit ex condimentum primis.
          </p>
          <p className="text-gray-600 mb-8">
            Finibus facilisis si elementum nisi nascetur aenean. Velit ultricies dapibus aplent mauris consequat. Hendrerit ut lobortis commodo netus laoreet. Donec arcu consectetuer odio himenaeos suspendisse quis parturient.
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
