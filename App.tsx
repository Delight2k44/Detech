
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import StrengthsSection from './components/StrengthsSection';
import CareersSection from './components/CareersSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const nextSectionRef = React.useRef<HTMLDivElement>(null);

  const handleGetStartedClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero onGetStartedClick={handleGetStartedClick} />
        <div ref={nextSectionRef}>
          <AboutSection />
        </div>
        <StrengthsSection />
        <CareersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
