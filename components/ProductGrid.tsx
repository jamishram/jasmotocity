import React from 'react';
import { PRODUCTS, WHATSAPP_URL } from '../constants';
import { MessageCircle } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md text-center">
            FEATURED <span className="text-brand-yellow">OFFERS</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6 shadow-lg shadow-yellow-500/50"></div>
          <p className="mt-4 text-xl text-white bg-red-600/40 inline-block px-6 py-2 rounded-full border border-red-600/50 backdrop-blur-md text-center">
            ⚠️ Orders accepted exclusively via WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group bg-black/60 backdrop-blur-md rounded-lg overflow-hidden border border-gray-800 hover:border-brand-yellow transition-all duration-300 hover:-translate-y-1 flex flex-col items-center shadow-xl w-full max-w-sm"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded text-xs font-bold text-brand-yellow uppercase border border-brand-yellow/30">
                  {product.category}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col flex-grow items-center text-center w-full">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                
                {/* Big Price Display */}
                <div className="my-4">
                   <span className="text-5xl font-heading font-bold text-brand-yellow drop-shadow-md">
                     {product.price}
                   </span>
                </div>

                <p className="text-gray-300 text-sm mb-6 flex-grow max-w-xs">{product.description}</p>
                
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white font-bold rounded uppercase tracking-wider hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center flex justify-center">
          <p className="text-gray-300 bg-black/40 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
            Clicking "Order" will open a WhatsApp chat with our shop manager.
          </p>
        </div>
      </div>
    </section>
  );
};