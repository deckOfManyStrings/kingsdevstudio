import React from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Check } from 'lucide-react';
import Link from 'next/link';

const StarterDemoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a className="flex items-center gap-2 font-bold text-2xl" href="#">
            <span className="text-primary">Bakery</span>Delights
          </a>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Products</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Order Now
            </a>
            <button className="md:hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Back to Main Site Banner */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <Link href="/" className="text-sm font-medium hover:underline">
              Back to Main Site
            </Link>
          </div>
          <div className="text-sm font-medium">
            Starter Package Demo - $699
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Freshly Baked Goods For Every Occasion
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Handcrafted with love using only the finest ingredients. Our bakery brings you delicious treats that will brighten your day.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Order Now
                  </a>
                  <a
                    href="#products"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    View Products
                  </a>
                </div>
              </div>
              <div className="mx-auto lg:order-last">
                <img
                  alt="Bakery Showcase"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  src="/api/placeholder/600/400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <div className="w-12 h-1 bg-primary my-4"></div>
              <p className="max-w-[800px] text-muted-foreground">
                BakeryDelights has been serving the community with love and passion since 2010. What started as a small family business has grown into a beloved local bakery.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <img
                  alt="Our bakery shop"
                  className="rounded-lg object-cover w-full h-auto"
                  src="/api/placeholder/500/400"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Handcrafted With Love</h3>
                <p className="text-muted-foreground">
                  Every pastry, cake, and bread that leaves our kitchen is made with the finest ingredients and crafted with attention to detail. Our bakers wake up early each morning to ensure that you get the freshest baked goods.
                </p>
                <p className="text-muted-foreground">
                  We believe in the power of good food to bring people together. That's why we put so much care into everything we make. Whether it's a birthday cake, morning pastry, or daily bread, we want our creations to be part of your special moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
              <div className="w-12 h-1 bg-primary my-4"></div>
              <p className="max-w-[800px] text-muted-foreground">
                Discover our range of freshly baked goods made daily with premium ingredients
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Artisan Breads",
                  description: "Handcrafted sourdough, whole grain, and specialty breads",
                  image: "/api/placeholder/300/300"
                },
                {
                  title: "Sweet Pastries",
                  description: "Croissants, Danish pastries, and morning buns",
                  image: "/api/placeholder/300/300"
                },
                {
                  title: "Custom Cakes",
                  description: "Special occasion cakes made to order",
                  image: "/api/placeholder/300/300"
                },
                {
                  title: "Cookies & Treats",
                  description: "Assorted cookies, brownies, and bars",
                  image: "/api/placeholder/300/300"
                },
                {
                  title: "Savory Items",
                  description: "Quiches, sandwiches, and savory pastries",
                  image: "/api/placeholder/300/300"
                },
                {
                  title: "Seasonal Specials",
                  description: "Limited edition items that change with the seasons",
                  image: "/api/placeholder/300/300"
                }
              ].map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow">
                  <img
                    alt={product.title}
                    className="h-48 w-full object-cover"
                    src={product.image}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p className="mt-2 text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery</h2>
              <div className="w-12 h-1 bg-primary my-4"></div>
              <p className="max-w-[800px] text-muted-foreground">
                Take a peek at some of our delicious creations
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    alt={`Gallery image ${index + 1}`}
                    className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                    src={`/api/placeholder/400/300?text=Gallery+${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <div className="w-12 h-1 bg-primary my-4"></div>
              <p className="max-w-[800px] text-muted-foreground">
                Have questions or want to place an order? Get in touch with us!
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Bakery Lane, Sweet City, SC 12345</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@bakerydelights.com</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Hours</h3>
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium leading-none" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      id="name"
                      placeholder="Your name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium leading-none" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      id="email"
                      placeholder="Your email"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium leading-none" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="mt-1 flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      id="message"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a className="flex items-center gap-2 font-bold text-2xl" href="#">
                <span className="text-primary">Bakery</span>Delights
              </a>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Bringing joy through freshly baked goods since 2010. Made with love in Sweet City.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm text-muted-foreground">© 2025 BakeryDelights. All rights reserved.</p>
              <div className="mt-2 flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Feature List Overlay */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg">
        <div className="container mx-auto">
          <h3 className="text-lg font-bold mb-2">Starter Package Features ($699):</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Responsive 5-page website</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Basic SEO setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Mobile-friendly design</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Contact form</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Social media integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">2 revision rounds</span>
            </div>
          </div>
          <div className="mt-2 text-center">
            <Link href="/#pricing" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Get Started With This Package
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterDemoPage;