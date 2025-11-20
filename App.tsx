import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-black">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;