import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { SHOP_NAME, CONTACT_DISPLAY, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black/90 backdrop-blur-lg border-t border-gray-800 text-gray-400 py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          
          {/* Brand */}
          <div className="flex flex-col items-center w-full">
            <h3 className="font-heading text-3xl font-bold text-white mb-4 text-center">{SHOP_NAME}</h3>
            <p className="mb-6 leading-relaxed max-w-xs mx-auto text-center">
              Your one-stop shop for premium two-wheeler modification parts and track-specific tyres. We bring the racetrack to the road.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col items-center w-full">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xl text-center">Contact Us</h4>
            <ul className="space-y-6 w-full flex flex-col items-center">
              <li className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-1">
                  <Phone className="w-5 h-5 text-brand-yellow" />
                </div>
                <div className="text-center">
                  <p className="text-white text-lg font-medium">{CONTACT_DISPLAY}</p>
                  <p className="text-sm text-gray-500">Call or WhatsApp for bookings</p>
                </div>
              </li>
              <li className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-1">
                   <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div className="text-center">
                  <p className="text-white text-lg font-medium">Kanyakumari, India</p>
                  <p className="text-sm text-gray-500">Visit our garage for custom consults.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center w-full">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xl text-center">Garage Hours</h4>
            <ul className="space-y-4 w-full max-w-xs mx-auto flex flex-col items-center">
              <li className="flex flex-col items-center border-b border-gray-800 pb-2 w-full">
                <span className="text-gray-500 text-sm uppercase tracking-wide mb-1">Monday - Saturday</span>
                <span className="text-white text-lg">10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-col items-center pb-2 w-full">
                <span className="text-gray-500 text-sm uppercase tracking-wide mb-1">Sunday</span>
                <span className="text-brand-yellow font-bold text-lg">Open (10:00 AM - 8:00 PM)</span>
              </li>
            </ul>
            <div className="mt-8 w-full max-w-xs mx-auto flex justify-center">
               <a 
                 href={WHATSAPP_URL} 
                 className="block w-full text-center py-3 border border-gray-700 rounded-lg hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow/10 transition-all font-bold uppercase tracking-wider"
               >
                 Message on WhatsApp
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-600 flex justify-center">
          <p>&copy; {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};