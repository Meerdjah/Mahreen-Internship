// Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* FIXED Background: This stays perfectly still while the user scrolls */}
      <div className="fixed top-0 left-0 w-full h-screen -z-20">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Floating Content */}
      <div className="max-w-4xl space-y-8 z-10 pt-20">
        <div className="inline-block px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white font-bold tracking-widest text-sm rounded-sm mb-4">
          MAHREEN INDONESIA
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
          Berkarya Untuk <br /> Indonesia.
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md">
          Membangun sistem terintegrasi dan solusi teknologi untuk memecahkan masalah nyata di masyarakat.
        </p>
      </div>
    </section>
  );
}