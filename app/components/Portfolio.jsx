import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const portfolio = [
    {
      title: "E-commerce Redesign",
      category: "development",
      image: "/api/placeholder/400/320",
      description: "Increased conversion rates by 34% through UX improvements and mobile optimization"
    },
    {
      title: "Brand Identity System",
      category: "design",
      image: "/api/placeholder/400/320",
      description: "Complete rebrand for a tech startup entering their Series B funding round"
    },
    {
      title: "SaaS Platform UI",
      category: "design",
      image: "/api/placeholder/400/320",
      description: "Intuitive interface design for a project management platform serving 50k+ users"
    },
    {
      title: "Performance Optimization",
      category: "maintenance",
      image: "/api/placeholder/400/320",
      description: "Reduced load time by 73% for a high-traffic content website"
    },
    {
      title: "Healthcare Portal",
      category: "development",
      image: "/api/placeholder/400/320",
      description: "HIPAA-compliant patient portal with secure messaging and appointment scheduling"
    },
    {
      title: "Mobile App Interface",
      category: "design",
      image: "/api/placeholder/400/320",
      description: "Award-winning fitness app UI with gamification elements that increased user retention"
    }
  ];

  const filteredPortfolio = activeTab === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeTab);

  return (
    <section id="work" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Showcase of Our Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our recent projects and see the quality we deliver
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex gap-2 p-1 rounded-md bg-muted">
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-sm px-3 py-1 text-sm font-medium ${
                activeTab === 'all' ? 'bg-background shadow' : 'hover:bg-background/40'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('development')}
              className={`rounded-sm px-3 py-1 text-sm font-medium ${
                activeTab === 'development' ? 'bg-background shadow' : 'hover:bg-background/40'
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`rounded-sm px-3 py-1 text-sm font-medium ${
                activeTab === 'design' ? 'bg-background shadow' : 'hover:bg-background/40'
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`rounded-sm px-3 py-1 text-sm font-medium ${
                activeTab === 'maintenance' ? 'bg-background shadow' : 'hover:bg-background/40'
              }`}
            >
              Maintenance
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPortfolio.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-background shadow-sm hover:shadow-md">
              <img
                alt={item.title}
                className="h-60 w-full object-cover transition-all group-hover:scale-105"
                src={item.image}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;