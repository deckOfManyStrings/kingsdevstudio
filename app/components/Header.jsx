import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a className="m-10 flex items-center gap-2 font-bold text-2xl" href="#">
          <span className="text-primary">King's </span>Dev Studio
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium hover:text-primary transition-colors">Our Work</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90">Get Quote</a>
        </nav>
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="container py-4 md:hidden flex flex-col gap-4">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium hover:text-primary transition-colors">Our Work</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 w-full text-center">Get Quote</a>
        </div>
      )}
    </header>
  );
};

export default Header;