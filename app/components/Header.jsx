import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./Theme-Toggle"
import { 
  Sheet,
  SheetContent,
  SheetTrigger 
} from "@/components/ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  // Added FAQ to the navigation links
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the mobile menu if it's open
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a className="flex items-center gap-2 font-bold text-2xl" href="#">
          <span className="ml-2 text-primary">King's Ventures </span>Dev Studio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="link"
              className="text-sm font-medium p-0 h-auto"
            >
              <a 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            </Button>
          ))}
          <Button asChild size="sm">
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Get Quote
            </a>
          </Button>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Navigation with Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant="ghost"
                  className="justify-start"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
              <Button asChild className="mt-2">
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, "#contact")}
                >
                  Get Quote
                </a>
              </Button>
              <div className="mt-4">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;