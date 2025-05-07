import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-2xl">
              <span className="text-primary">Dev</span>Studio
            </div>
            <p className="text-sm text-muted-foreground">
              Professional web development and design services that transform your digital presence.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="grid gap-3">
              <h3 className="text-sm font-medium">Explore</h3>
              <nav className="grid gap-3">
                <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
                <a href="#work" className="text-sm hover:text-primary transition-colors">Our Work</a>
                <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
                <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Testimonials</a>
                <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
              </nav>
            </div>
            <div className="grid gap-3">
              <h3 className="text-sm font-medium">Contact</h3>
              <nav className="grid gap-3">
                <span className="text-sm">hello@devstudio.com</span>
                <span className="text-sm">(555) 123-4567</span>
                <span className="text-sm">123 Web Lane, Digital City</span>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2025 DevStudio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
              <span className="sr-only">Github</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;