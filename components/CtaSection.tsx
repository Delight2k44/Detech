
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-brand-blue-light">
      <img src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Abstract technology background" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-extrabold max-w-3xl mx-auto">
          Don't Worry, Our Engineers Are Here To Architect The Future. Let's Build It Now!
        </h2>
        <button className="mt-8 bg-brand-orange text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
