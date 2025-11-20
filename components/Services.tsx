import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-gray/80 backdrop-blur-sm border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            TYRE <span className="text-brand-yellow">SERVICES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center">
            We specialize exclusively in super bike tyres. Expert fitting and advice to keep you safe on the track and road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-brand-dark/90 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors text-center group flex flex-col items-center w-full max-w-xs">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 group-hover:bg-brand-yellow/20 mb-6 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};