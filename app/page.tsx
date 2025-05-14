"use client";

import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import Header from './components/Header';
import HeroSection from './components/Hero';
import ServicesSection from './components/Services';
import PricingSection from './components/Pricing';
import DemoSections from './components/Demo';
import FAQSection from './components/Faq';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from "./components/Theme-provider";

const App = () => {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <PricingSection />
          <DemoSections />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default App;