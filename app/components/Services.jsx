import React from 'react';
import { Code, Paintbrush, Rocket, Star, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Custom websites built with modern frameworks and technologies that perform flawlessly across all devices.",
      categories: ['development']
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Intuitive, engaging interfaces and experiences that delight users and keep them coming back.",
      categories: ['design']
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description: "Speed up your existing website with our specialized optimization techniques.",
      categories: ['development', 'maintenance']
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Branding & Identity",
      description: "Create a cohesive brand identity that resonates with your target audience.",
      categories: ['design']
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your digital presence running smoothly.",
      categories: ['maintenance']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Expertise</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services We Offer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive web solutions tailored to your specific needs and goals
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;