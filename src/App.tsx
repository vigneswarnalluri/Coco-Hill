import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import MediaSection from './components/MediaSection';
import LifestyleSection from './components/LifestyleSection';
import SustainabilitySection from './components/SustainabilitySection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <MediaSection />
        <LifestyleSection />
        <SustainabilitySection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
