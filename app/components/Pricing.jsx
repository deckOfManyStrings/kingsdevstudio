import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$699",
      description: "Perfect for small businesses just getting started online",
      features: [
        "Responsive 5-page website",
        "Basic SEO setup",
        "Mobile-friendly design",
        "Contact form",
        "Social media integration",
        "2 revision rounds",
        "2 weeks delivery"
      ],
      demoLink: "#starter-demo",
      cta: "Get Started",
      popular: false
    },
    {
      title: "Business",
      price: "$1,499",
      description: "Ideal for growing businesses needing more features",
      features: [
        "Responsive 10-page website",
        "Advanced SEO package",
        "Contact form & booking system",
        "Custom animations",
        "Blog setup",
        "Google Analytics integration",
        "3 revision rounds",
        "3 weeks delivery"
      ],
      demoLink: "#business-demo",
      cta: "Get Started",
      popular: true
    },
    {
      title: "Premium",
      price: "$2,799+",
      description: "Custom solutions for established businesses with complex needs",
      features: [
        "Fully custom website design",
        "E-commerce functionality",
        "Custom content management system",
        "Performance optimization",
        "Advanced security features",
        "Unlimited revisions",
        "Local business listing setup",
        "4-6 weeks delivery"
      ],
      demoLink: "#premium-demo",
      cta: "Contact Us",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent Pricing Plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the package that fits your needs and budget
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm ${
                plan.popular ? 'border-primary ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-4 flex flex-col gap-1">
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {!plan.title.includes('Premium') && <span className="text-muted-foreground"> / project</span>}
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.demoLink}
                className="mt-2 text-sm text-primary hover:underline block"
                target="_blank"
              >
                View Demo Website
              </a>
              <a
                href="#contact"
                className={`mt-4 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;