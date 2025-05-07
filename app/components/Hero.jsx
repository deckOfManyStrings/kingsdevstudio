import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Elevate Your Digital Presence With Expert Web Solutions
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              We craft stunning, high-performance websites that connect with your audience and drive business growth.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </a>
              <a
                href="#work"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Our Work
              </a>
            </div>
          </div>
          <div className="mx-auto lg:order-last">
            <img
              alt="Hero Image"
              className="aspect-video overflow-hidden rounded-xl object-cover"
              src="/api/placeholder/600/400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;