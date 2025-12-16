import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SupplementsSection from './components/SupplementsSection';
import RevolutionSection from './components/RevolutionSection';
import MarketStatsSection from './components/MarketStatsSection';
import ValidationSection from './components/ValidationSection';
import DiscoverSection from './components/DiscoverSection';
import ImpactSection from './components/ImpactSection';
import WellnessRevolutionSection from './components/WellnessRevolutionSection';
import CTASection from './components/CTASection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SupplementsSection />
        <RevolutionSection />
        <MarketStatsSection />
        <ValidationSection />
        <DiscoverSection />
        <ImpactSection />
        <WellnessRevolutionSection />
        <CTASection />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
