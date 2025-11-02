
import React from 'react';
import { QuoteIcon } from './icons';

const CareersSection: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative min-h-[500px] md:min-h-0">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern Detech Office" className="absolute inset-0 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="relative h-full flex flex-col justify-end p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Be Prepared for the Next Big Thing</h3>
                        <p className="mb-6">Massa laoreet maximus viverra pharetra arcu. Inceptos magna auctor laoreet malesuada.</p>
                        <button className="bg-brand-orange text-white font-bold py-3 px-6 rounded-lg self-start hover:bg-opacity-90 transition-colors">
                            Join Our Team
                        </button>
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="bg-brand-blue-dark text-white p-12 md:p-16 flex flex-col justify-center">
                    <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">CAREERS AT DETECH</p>
                    <h2 className="text-3xl font-bold my-4">Building Safer Communities Through Innovation</h2>
                    <div className="text-gray-300 mb-8 space-y-4">
                        <p>
                            At DETECH, we’re not just creating technology — we’re creating impact. Our team is passionate about developing smart, affordable solutions that protect lives and empower communities. Every project is driven by purpose, creativity, and a bold spirit of innovation.
                        </p>
                        <p>
                           If you’re ready to make a real difference and help shape the future of fire safety in Africa, then DETECH is where you belong. Together, we’re turning ideas into life-saving solutions.
                        </p>
                        <p>
                            Join us — and let’s engineer a safer tomorrow.
                        </p>
                    </div>
                    <div className="relative bg-brand-blue-light p-6 rounded-lg">
                        <QuoteIcon className="absolute top-4 left-4 w-12 h-12 text-brand-blue-dark opacity-50" />
                        <p className="relative italic">
                            We believe innovation should have purpose  every design, line of code, and device we create is built to make communities safer, stronger, and more connected. At DETECH, progress isn’t just about technology  it’s about impact
                        </p>
                        <div className="flex items-center mt-4">
                            {/* TODO: Add image of the person giving the testimonial */}
                            <img src="https://i.pravatar.cc/40?u=delight" alt="Delight Chetter" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <p className="font-bold">Delight Chetter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
