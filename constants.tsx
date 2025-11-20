import React from 'react';
import { Product, ProductCategory, ServiceItem } from './types';
import { Disc, Activity, ShieldCheck, Gauge } from 'lucide-react';

export const SHOP_NAME = "JASMOTOCITY";
export const CONTACT_NUMBER = "9599760305";
export const CONTACT_DISPLAY = "+91 95997 60305";
export const WHATSAPP_URL = `https://wa.me/919599760305?text=Hi%20Jasmotocity%2C%20I%20am%20interested%20in%20your%20track%20tyres`;
export const INSTAGRAM_URL = "https://www.instagram.com/jasmotocity";

export const PRODUCTS: Product[] = [
  {
    id: 'offer-pair',
    name: 'Track Tyre Pair (Front & Rear)',
    price: '₹3,400',
    category: ProductCategory.TYRES,
    image: 'https://images.unsplash.com/photo-1552352394-762409d75c4b?q=80&w=800&auto=format&fit=crop',
    description: 'OFFER PRICE: Complete set for ultimate grip and performance.'
  },
  {
    id: 'rear-tyre',
    name: 'Rear Track Tyre',
    price: '₹2,500',
    category: ProductCategory.TYRES,
    image: 'https://images.unsplash.com/photo-1584646728703-33b112b20d3a?q=80&w=800&auto=format&fit=crop',
    description: 'High-performance rear tyre for stability.'
  },
  {
    id: 'front-tyre',
    name: 'Front Track Tyre',
    price: '₹1,500',
    category: ProductCategory.TYRES,
    image: 'https://images.unsplash.com/photo-1619556848407-2dc973402788?q=80&w=800&auto=format&fit=crop',
    description: 'Precision steering front tyre.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Professional Fitting",
    description: "Expert tyre mounting and balancing for high-speed safety.",
    icon: <Disc className="w-8 h-8 text-brand-yellow" />
  },
  {
    title: "Track Grip Advice",
    description: "Consultation on best compounds for your riding style.",
    icon: <Activity className="w-8 h-8 text-brand-yellow" />
  },
  {
    title: "Air Pressure Check",
    description: "Precision inflation for optimal track footprint.",
    icon: <Gauge className="w-8 h-8 text-brand-yellow" />
  },
  {
    title: "Safety Inspection",
    description: "Wheel alignment and tyre condition checks.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-yellow" />
  }
];