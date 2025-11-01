
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="bg-brand-blue-dark min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
