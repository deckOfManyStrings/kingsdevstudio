import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
            <Badge variant="outline" className="bg-muted">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent Pricing Plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the package that fits your needs and budget
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={
                plan.popular 
                  ? "relative border-primary shadow-md" 
                  : "relative"
              }
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 z-10">
                  <Badge className="rounded-tl-none rounded-br-none rounded-tr-md" variant="default">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {!plan.title.includes('Premium') && <span className="text-muted-foreground"> / project</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <Button 
                  asChild 
                  variant="link" 
                  className="h-auto p-0"
                >
                  <a href={plan.demoLink} target="_blank" rel="noopener noreferrer">
                    View Demo Website
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                >
                  <a href="#contact">
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;