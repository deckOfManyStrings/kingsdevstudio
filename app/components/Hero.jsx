import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
              <Button asChild size="lg">
                <a href="#contact">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
          <Card className="mx-auto lg:order-last overflow-hidden border-0 shadow-lg">
            <img
              alt="Hero Image"
              className="aspect-video w-full object-cover"
              src="/api/placeholder/600/400"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;