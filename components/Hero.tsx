import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay for better text readability on top of global background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto mt-16 flex flex-col items-center">
        
        {/* Shop Name - Big Size, Full Width */}
        <h1 className="font-heading text-[15vw] md:text-[12rem] font-bold text-white mb-4 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] uppercase leading-[0.85] w-full">
          JASMOTOCITY
        </h1>

        <div className="inline-block mb-8 px-8 py-2 border border-brand-yellow rounded-full bg-black/50 backdrop-blur-sm">
          <span className="text-brand-yellow text-lg md:text-xl font-bold uppercase tracking-[0.2em]">
            Track Tyres Only
          </span>
        </div>
        
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 mb-6 leading-tight drop-shadow-lg">
          ULTIMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-600">GRIP</span>
        </h2>
        
        <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto font-light drop-shadow-md">
          Premium track tyres for street and track. Unbeatable prices. 
          <br />Based in Kanyakumari.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-[#25D366] text-white font-bold rounded-full text-xl hover:bg-[#128C7E] transition-transform hover:scale-105 flex items-center gap-3 shadow-xl"
          >
             <MessageCircle className="w-7 h-7" />
            ORDER ON WHATSAPP
          </a>
          <a
            href="#products"
            className="px-10 py-5 border-2 border-white text-white font-bold rounded-full text-xl hover:bg-white/10 hover:border-brand-yellow hover:text-brand-yellow transition-all backdrop-blur-sm"
          >
            VIEW PRICE LIST
          </a>
        </div>
      </div>
    </section>
  );
};