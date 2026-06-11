import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Kolaborasi Tanpa Batas",
      desc: "Menyatukan berbagai keahlian dan perspektif untuk merancang dan membangun masa depan teknologi Indonesia.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
    },
    {
      title: "Infrastruktur Hardware",
      desc: "Membangun dasar fisik yang tangguh melalui integrasi desain yang inovatif dan teknologi terkini.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069"
    },
    {
      title: "Software Engineering",
      desc: "Mendesain kode yang efisien dan aman untuk mewujudkan ide-ide kompleks menjadi produk digital yang fungsional.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070"
    },
    {
      title: "Implementasi Solusi",
      desc: "Tidak berhenti di laboratorium. Kami menguji dan menerapkan teknologi secara langsung untuk menjawab tantangan nyata di masyarakat.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
    }
  ];

  // Optional: Auto-play functionality. It changes the slide every 5 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[70vh] min-h-150 bg-gray-950 overflow-hidden flex items-center">
      
      {/* 1. The Melting Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Centered the object position on mobile, kept it right on desktop */}
          <img 
            src={slides[activeIndex].image} 
            alt={slides[activeIndex].title} 
            className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
          />
          
          {/* THE FIX: Much lighter tint on mobile (from-gray-950/60). Desktop keeps the solid melt. */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent md:from-gray-950 md:via-gray-950/80"></div>
          
          {/* THE FIX: Strong vertical bottom-to-top gradient on mobile only to protect the text */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent md:hidden"></div>
        </motion.div>
      </AnimatePresence>

      {/* 2. The Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">
            Wujud Nyata Kreativitas Kita
          </span>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                {slides[activeIndex].title}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                {slides[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* 3. Navigation Controls (Dots) */}
          <div className="flex gap-4 items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="group relative flex items-center justify-center h-8 w-8 focus:outline-none"
              >
                {/* Background active indicator */}
                <span 
                  className={`absolute h-2 rounded-full transition-all duration-500 ${
                    activeIndex === idx ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600 group-hover:bg-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}