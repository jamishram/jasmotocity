import React from 'react';

export enum ProductCategory {
  TYRES = 'Track Tyres',
  EXHAUST = 'Performance Exhausts',
  AESTHETICS = 'Body Modifications',
  BRAKES = 'Braking Systems'
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: ProductCategory;
  image: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}