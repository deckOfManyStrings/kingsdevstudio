import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
                <Button asChild variant="link" className="h-auto p-0 justify-start">
                  <a href="#services" className="text-sm">Services</a>
                </Button>
                <Button asChild variant="link" className="h-auto p-0 justify-start">
                  <a href="#work" className="text-sm">Our Work</a>
                </Button>
                <Button asChild variant="link" className="h-auto p-0 justify-start">
                  <a href="#pricing" className="text-sm">Pricing</a>
                </Button>
                <Button asChild variant="link" className="h-auto p-0 justify-start">
                  <a href="#testimonials" className="text-sm">Testimonials</a>
                </Button>
                <Button asChild variant="link" className="h-auto p-0 justify-start">
                  <a href="#contact" className="text-sm">Contact</a>
                </Button>
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
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 DevStudio. All rights reserved.</p>
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;