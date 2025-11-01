
import React from 'react';
import { QuoteIcon } from './icons';

const CareersSection: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative min-h-[500px] md:min-h-0">
                    <img src="https://placehold.co/800x600/101828/FFFFFF?text=Modern+Office" alt="Modern Detech Office" className="absolute inset-0 w-full h-full object-cover"/>
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
                    <h2 className="text-3xl font-bold my-4">Innovating Swiftly and Courageously in Every Project</h2>
                    <p className="text-gray-300 mb-8">
                        Vel ultrices venenatis velit dictumst quam mollis vulputate dolor primis bibendum. Sollicitudin viverra elementum ligula sapien velit sed phasellus fames potenti molestie. Hendrerit lobortis id mauris aenean lacus.
                    </p>
                    <div className="relative bg-brand-blue-light p-6 rounded-lg">
                        <QuoteIcon className="absolute top-4 left-4 w-12 h-12 text-brand-blue-dark opacity-50" />
                        <p className="relative italic">
                            A gravida ante efficitur pretium facilisi praesent ultrices ornare curabitur feugiat. Nulla tortor lobortis imperdiet laoreet praesent pharetra. Curabitur semper adipiscing iaculis conubia massa inceptos a non lobortis praesent dignissim.
                        </p>
                        <div className="flex items-center mt-4">
                            <img src="https://i.pravatar.cc/40?u=marie" alt="Marie R. Winters" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <p className="font-bold">Marie R. Winters</p>
                                <p className="text-sm text-gray-400">Lead Architect</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
