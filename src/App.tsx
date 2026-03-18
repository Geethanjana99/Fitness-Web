import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TrainersSection } from './components/TrainersSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
export function App() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  useScrollReveal();
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-gold/30 selection:text-gold">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <AboutSection />
        <TrainersSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>);

}