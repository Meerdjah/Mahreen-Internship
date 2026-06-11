// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-blue-200 scroll-smooth">
      <Navbar />
      <Hero />
      <div className="relative bg-white z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <About />
        <Showcase />
        <CTA />
      </div>
      
      <footer className="relative bg-gray-950 py-8 text-center text-gray-400 text-sm z-10">
        <p>© 2026 Mahreen Indonesia. Berkarya Untuk Indonesia.</p>
      </footer>
    </div>
  );
}

export default App;