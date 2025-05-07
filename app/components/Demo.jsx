import React from 'react';
import { Check } from 'lucide-react';

const StarterDemo = () => {
  return (
    <section id="starter-demo" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Starter Package</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Starter Demo</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's what you can expect with our $699 Starter package
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/800/600"
              alt="Starter Demo Website"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold">Professional 5-Page Website</h3>
            <p className="text-muted-foreground">
              Our Starter package includes a professionally designed website with up to 5 pages - perfect for small businesses 
              looking to establish an online presence without breaking the bank.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Clean, modern design that reflects your brand</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Mobile responsive layout that works on all devices</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Basic SEO optimization to help customers find you</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Contact form for customer inquiries</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Social media integration</span>
              </li>
            </ul>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get This Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessDemo = () => {
  return (
    <section id="business-demo" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Business Package</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Business Demo</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's what you can expect with our $1,499 Business package
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
            <h3 className="text-2xl font-bold">Enhanced 10-Page Business Website</h3>
            <p className="text-muted-foreground">
              Our Business package provides a comprehensive website solution with up to 10 pages, 
              perfect for growing businesses that need more features and functionality.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Premium design with custom animations and transitions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Advanced SEO package to boost rankings</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Blog setup with content management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Advanced contact form with booking system</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Google Analytics integration for performance tracking</span>
              </li>
            </ul>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get This Package
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
            <img
              src="/api/placeholder/800/600"
              alt="Business Demo Website"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PremiumDemo = () => {
  return (
    <section id="premium-demo" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Premium Package</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Premium Demo</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's what you can expect with our $2,799+ Premium package
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/800/600"
              alt="Premium Demo Website"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold">Custom Enterprise-Grade Website</h3>
            <p className="text-muted-foreground">
              Our Premium package delivers a fully custom, enterprise-level website solution with all the 
              advanced features and functionality your business needs to dominate online.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Fully custom design tailored to your exact requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>E-commerce functionality with secure payment processing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Custom content management system</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Advanced security features and SSL implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Performance optimization for lightning-fast load times</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>Local business listing setup and optimization</span>
              </li>
            </ul>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get This Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DemoSections = () => {
  return (
    <>
      <StarterDemo />
      <BusinessDemo />
      <PremiumDemo />
    </>
  );
};

export default DemoSections;