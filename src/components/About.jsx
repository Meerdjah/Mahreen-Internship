import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advantages = [
    { 
      title: "Desain Interface Intuitif", 
      desc: "Membangun visual interaktif antara pengguna dan teknologi. Setiap interaksi dirancang agar mulus, responsif, dan dapat diakses oleh seluruh lapisan masyarakat.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071" 
    },
    { 
      title: "Arsitektur Backend Tangguh", 
      desc: "Keindahan visual harus didukung oleh mesin yang kuat. Kami fokus pada pengelolaan data yang efisien dan alur komunikasi server yang anti-kritis.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034"
    },
    { 
      title: "Automasi & Efisiensi", 
      desc: "Memanfaatkan logika pemrograman untuk memangkas proses manual yang repetitif. Sistem yang baik adalah sistem yang bekerja keras secara mandiri.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
    },
    { 
      title: "Keamanan Sistem Terpusat", 
      desc: "Melindungi informasi adalah prioritas utama. Mulai dari sanitasi input hingga enkripsi data, kode dirancang dengan kesadaran penuh terhadap celah keamanan.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070"
    },
    { 
      title: "Integrasi Skala Luas", 
      desc: "Dari platform web ke perangkat keras fisik di lapangan, kami memastikan sinkronisasi data terjadi secara real-time tanpa latensi yang berarti.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
    },
    { 
      title: "Dampak Berkelanjutan", 
      desc: "Teknologi bukanlah tujuan akhir, melainkan alat. Fokus utama kami adalah memastikan setiap produk digital memberikan manfaat nyata dan berjangka panjang bagi Indonesia.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Image Crossfader (Now Sticky on Mobile) */}
        {/* Added 'sticky top-20 z-10 bg-white pb-4' so it anchors to the screen */}
        <div className="lg:w-1/2 w-full space-y-4 md:space-y-8 sticky top-20 z-10 bg-white pb-4 pt-2">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2 md:mb-4 leading-tight">
              Tentang <br className="hidden md:block"/> Program
            </h2>
            {/* We hide this subtext on mobile so the image stays higher up */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed hidden md:block">
              Program internship ini dirancang bagi pemikir kritis yang tidak hanya bisa merangkai logika, tapi juga menerapkannya menjadi arsitektur sistem yang utuh.
            </p>
          </div>
          
          {/* Shorter height on mobile (h-[250px]) so the user can still see the accordion below it */}
          <div className="w-full h-[250px] md:h-[400px] bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeIndex}
                src={advantages[activeIndex].image}
                alt={advantages[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white pointer-events-none">
               <span className="text-xs md:text-sm font-bold tracking-widest text-blue-400">0{activeIndex + 1}</span>
               <h4 className="text-lg md:text-xl font-semibold drop-shadow-md">{advantages[activeIndex].title}</h4>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          {advantages.map((adv, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                activeIndex === idx 
                  ? 'border-blue-600 bg-blue-50 shadow-md' 
                  : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-2xl font-bold transition-colors ${
                  activeIndex === idx ? 'text-blue-700' : 'text-gray-700'
                }`}>
                  {adv.title}
                </h3>
                {/* Visual Indicator (Plus/Minus icon) */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  activeIndex === idx ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {activeIndex === idx ? '−' : '+'}
                </div>
              </div>

              {/* Smooth Dropdown for the Description */}
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {adv.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}