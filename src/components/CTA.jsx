import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="md:w-1/2 p-12 md:p-24 bg-gray-50 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ambil Peranmu.</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Mahreen Indonesia mencari talenta yang siap mengubah ide menjadi teknologi yang inovatif dan bermanfaat. Saatnya berkarya untuk Indonesia.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-start">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Kirimkan Karyamu</h3>
          
          <div className="w-full space-y-6">
            <div className="border-b border-gray-300 pb-2">
              <span className="text-gray-400 text-sm">Posisi Dilamar</span>
              <p className="font-medium mt-1">Web Developer Intern</p>
            </div>
            
            <button className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold tracking-wide hover:bg-blue-700 transition-colors mt-8">
              SUBMIT
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}