import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Check, Search, Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const BusinessDemoPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const portfolioItems = [
    {
      title: "Corporate Events",
      category: "events",
      image: "/api/placeholder/400/300",
      description: "Catering for corporate meetings and events"
    },
    {
      title: "Weddings",
      category: "weddings",
      image: "/api/placeholder/400/300",
      description: "Custom wedding cakes and dessert tables"
    },
    {
      title: "Birthdays",
      category: "birthdays",
      image: "/api/placeholder/400/300",
      description: "Birthday cakes and party treats for all ages"
    },
    {
      title: "Holiday Specials",
      category: "holidays",
      image: "/api/placeholder/400/300",
      description: "Seasonal treats for holidays and special occasions"
    },
    {
      title: "Wholesale Supply",
      category: "wholesale",
      image: "/api/placeholder/400/300",
      description: "Bulk orders for cafes and restaurants"
    },
    {
      title: "Gift Baskets",
      category: "gifts",
      image: "/api/placeholder/400/300",
      description: "Custom gift baskets for any occasion"
    }
  ];

  const filteredPortfolio = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  const faqs = [
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we deliver within a 20-mile radius of our bakery. For orders over $50, delivery is free. For smaller orders, a delivery fee of $5-10 applies depending on distance."
    },
    {
      question: "How far in advance should I order a custom cake?",
      answer: "For custom cakes, we recommend placing your order at least 1 week in advance. For wedding cakes or large events, 1-2 months advance notice is preferred, especially during busy seasons."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Absolutely! We offer a variety of options including gluten-free, dairy-free, nut-free, and vegan items. Please inform us of any allergies or dietary needs when placing your order."
    },
    {
      question: "Can I schedule a cake tasting?",
      answer: "Yes, we offer cake tastings by appointment. Tastings are complimentary for wedding cakes with a deposit, and $25 for all other occasions (fee is applied to your order if you book with us)."
    }
  ];

  const blogPosts = [
    {
      title: "The Art of Sourdough: Tips from Our Master Baker",
      date: "May 2, 2025",
      excerpt: "Learn the secrets behind our award-winning sourdough bread and how to maintain your own starter at home.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Seasonal Baking: Spring Edition",
      date: "April 15, 2025",
      excerpt: "Discover the freshest flavors of spring and how we incorporate seasonal ingredients into our baked goods.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Decorating Tips: Taking Your Cakes to the Next Level",
      date: "March 28, 2025",
      excerpt: "Professional techniques to elevate your cake decorating skills from our pastry chef.",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Animation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a className="flex items-center gap-2 font-bold text-2xl" href="#">
            <span className="text-primary">Artisan</span>Bakehouse
          </a>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search..."
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Search className="absolute right-3 top-2 h-5 w-5 text-muted-foreground" />
            </div>
            <a href="#book" className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Book Consultation
            </a>
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              }
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="container py-4 md:hidden flex flex-col gap-4 bg-background border-t animate-in slide-in-from-top">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            <a href="#book" className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 w-full text-center">
              Book Consultation
            </a>
          </div>
        )}
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
            Business Package Demo - $1,499
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section with Animation */}
        <section id="home" className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-muted overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center relative z-10">
              <div className="flex flex-col gap-5 animate-in slide-in-from-left duration-500">
                <div className="inline-flex items-center rounded-full border px-3 py-1 w-fit text-sm">
                  <span className="block bg-primary rounded-full w-2 h-2 mr-2"></span>
                  Artisanal Baking Since 2005
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  Exceptional Artisan Breads & Pastries
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                  Experience the difference of time-honored baking traditions combined with innovative techniques and premium ingredients.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <a
                    href="#book"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Book Consultation
                  </a>
                  <a
                    href="#portfolio"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    View Our Work
                  </a>
                </div>
              </div>
              <div className="relative animate-in slide-in-from-right duration-500">
                <div className="absolute inset-0 -left-5 -top-5 bg-primary/10 rounded-2xl transform rotate-6"></div>
                <img
                  alt="Artisan Bread Selection"
                  className="relative z-10 rounded-2xl object-cover w-full shadow-xl"
                  src="/api/placeholder/700/500"
                />
                <div className="absolute -right-3 -bottom-3 bg-background border p-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Next Tasting</p>
                    <p className="text-xs text-muted-foreground">May 20th • 2PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="/api/placeholder/400/550" 
                      alt="Bakery interior" 
                      className="rounded-lg object-cover h-full shadow-lg"
                    />
                    <div className="grid grid-rows-2 gap-4">
                      <img 
                        src="/api/placeholder/400/260" 
                        alt="Baker working" 
                        className="rounded-lg object-cover h-full shadow-lg"
                      />
                      <img 
                        src="/api/placeholder/400/260" 
                        alt="Artisan bread" 
                        className="rounded-lg object-cover h-full shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-background border p-4 rounded-lg shadow-lg max-w-[200px]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Years of Excellence</div>
                      <div className="text-xl font-bold text-primary">20</div>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Baking Philosophy</h2>
                <p className="text-muted-foreground">
                  At Artisan Bakehouse, we believe that exceptional baking requires three essential elements: time, quality ingredients, and masterful technique. Founded in 2005, our bakery has been committed to creating bread and pastries that honor old-world traditions while embracing innovative approaches.
                </p>
                <p className="text-muted-foreground">
                  Every loaf of bread is naturally leavened and fermented for a minimum of 24 hours, developing complex flavors and ensuring digestibility. Our pastries showcase seasonal, locally-sourced ingredients whenever possible, supporting regional farmers and providing the freshest flavors.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded-full">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Naturally Leavened</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">No commercial yeast, only wild fermentation</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded-full">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Organic Flour</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">Sustainably grown and stone-milled</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded-full">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Local Ingredients</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">Supporting regional farmers and producers</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded-full">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">Hand-Crafted</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">Each item shaped and cared for individually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                Our Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Showcasing Our Finest Work</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Browse through our gallery of custom creations and specialty items
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background hover:bg-background/80'
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setActiveTab('weddings')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === 'weddings' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background hover:bg-background/80'
                }`}
              >
                Weddings
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === 'events' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background hover:bg-background/80'
                }`}
              >
                Corporate Events
              </button>
              <button
                onClick={() => setActiveTab('birthdays')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === 'birthdays' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background hover:bg-background/80'
                }`}
              >
                Birthdays
              </button>
              <button
                onClick={() => setActiveTab('holidays')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === 'holidays' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background hover:bg-background/80'
                }`}
              >
                Holiday Specials
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredPortfolio.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl bg-background shadow-md transition-all hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                      src={item.image}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex items-center text-primary">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-medium shadow-sm">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Offer</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                From daily fresh-baked goods to custom catering options, we provide a range of services to meet your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Artisan Bread Program",
                  description: "Weekly subscription service delivering fresh bread to your door",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M17 8a5 5 0 0 0-10 0"></path><line x1="12" x2="12" y1="2" y2="8"></line><circle cx="12" cy="14" r="6"></circle></svg>
                },
                {
                  title: "Custom Cake Design",
                  description: "Personalized cakes for special occasions and celebrations",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path><path d="M2 21h20"></path><path d="M7 8v2"></path><path d="M12 8v2"></path><path d="M17 8v2"></path><path d="M7 4h.01"></path><path d="M12 4h.01"></path><path d="M17 4h.01"></path></svg>
                },
                {
                  title: "Catering Services",
                  description: "Full-service catering for events of all sizes",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2"></path><path d="M18 15h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4z"></path></svg>
                },
                {
                  title: "Baking Classes",
                  description: "Learn the art of artisan baking from our master bakers",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2"></path><path d="M10 8v6"></path><path d="M14 8v6"></path><path d="M20 12H8"></path><path d="M8 16h12"></path></svg>
                },
                {
                  title: "Corporate Gifting",
                  description: "Custom gift baskets and branded treats for your clients and team",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
                },
                {
                  title: "Wedding Consultations",
                  description: "Personalized tastings and planning for your special day",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M19 8.71 14 3.71a2 2 0 0 0-2.83 0L6 8.71a2 2 0 0 0-.59 1.41V18a2 2 0 0 0 2 2h5"></path><path d="M16 15a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path><path d="m20 16-1.5 1.5"></path></svg>
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                >
                  <div className="mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="mt-4">
                    <a href="#contact" className="text-primary font-medium inline-flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                Latest Articles
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">From Our Blog</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Discover baking tips, recipes, and stories from our kitchen
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="group overflow-hidden rounded-xl bg-background shadow-md transition-all hover:shadow-xl">
                  <div className="overflow-hidden">
                    <img
                      alt={post.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
                      src={post.image}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <a href="#" className="text-primary font-medium inline-flex items-center">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#" 
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View All Articles
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Read what our satisfied customers have to say about our products and services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Emily Johnson",
                  role: "Bride",
                  quote: "The wedding cake exceeded all our expectations. Not only was it stunning, but every guest commented on how delicious it was. The team was professional, responsive, and helped bring our vision to life.",
                  image: "/api/placeholder/64/64"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Corporate Event Planner",
                  quote: "Artisan Bakehouse has been our go-to caterer for client meetings and corporate events for years. Their pastries are always fresh, beautifully presented, and a hit with everyone. Highly recommend their corporate catering services.",
                  image: "/api/placeholder/64/64"
                },
                {
                  name: "Sarah Chen",
                  role: "Bread Subscription Member",
                  quote: "The weekly bread subscription has been a game-changer for our family. We've been able to enjoy fresh, artisanal bread that's far superior to anything available in stores. Worth every penny!",
                  image: "/api/placeholder/64/64"
                }
              ].map((testimonial, index) => (
                <div key={index} className="rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md relative">
                  <div className="mb-6">
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
                      className="h-10 w-10 text-primary/20"
                    >
                      <path d="M10 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
                      <path d="M20 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
                      <path d="M10 21h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
                      <path d="M20 21h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
                    </svg>
                  </div>
                  <blockquote className="text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      alt={testimonial.name}
                      className="rounded-full"
                      height="48"
                      src={testimonial.image}
                      style={{
                        aspectRatio: "1/1",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Find answers to common questions about our services and products
              </p>
            </div>
            
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-background transition-all">
                  <button
                    className="flex w-full items-center justify-between p-4 md:p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-medium">{faq.question}</h3>
                    {activeFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {activeFAQ === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Don't see your question? Reach out to us directly.</p>
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Booking/Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Contact Us</h2>
                <p className="text-muted-foreground max-w-[500px] mb-8">
                  Ready to discuss your custom order or have questions about our services? 
                  Reach out to our team and we'll be happy to assist you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground">123 Artisan Street, Bakersville, BA 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-muted-foreground">hello@artisanbakehouse.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">Mon-Fri: 7AM-6PM</p>
                      <p className="text-muted-foreground">Sat: 8AM-5PM</p>
                      <p className="text-muted-foreground">Sun: 8AM-2PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div id="book" className="bg-muted rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Book a Consultation</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        id="name"
                        placeholder="Enter your name"
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
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        id="phone"
                        placeholder="Enter your phone"
                        type="tel"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="service">
                        Service Interested In
                      </label>
                      <select
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        id="service"
                      >
                        <option value="">Select a service</option>
                        <option value="wedding">Wedding Cake</option>
                        <option value="catering">Catering</option>
                        <option value="subscription">Bread Subscription</option>
                        <option value="classes">Baking Classes</option>
                        <option value="corporate">Corporate Gifting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium leading-none" htmlFor="date">
                      Preferred Date
                    </label>
                    <input
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      id="date"
                      type="date"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium leading-none" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="mt-1 flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      id="message"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <button
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    type="button"
                  >
                    Schedule Consultation
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    We'll respond to your inquiry within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="col-span-2 lg:col-span-1">
              <a className="flex items-center gap-2 font-bold text-2xl" href="#">
                <span className="text-primary">Artisan</span>Bakehouse
              </a>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Crafting exceptional artisan breads and pastries since 2005. Using traditional methods and the finest ingredients for an authentic baking experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Navigation</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
                  <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                  <a href="#portfolio" className="block text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
                  <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
                  <a href="#blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</a>
                </nav>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Services</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Wedding Cakes</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Bread Subscription</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Catering</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Baking Classes</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Corporate Gifting</a>
                </nav>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Contact</h3>
                <nav className="space-y-2 text-sm">
                  <span className="block text-muted-foreground">123 Artisan Street, Bakersville, BA 12345</span>
                  <span className="block text-muted-foreground">(555) 123-4567</span>
                  <span className="block text-muted-foreground">hello@artisanbakehouse.com</span>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">© 2025 Artisan Bakehouse. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Feature List Overlay */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg">
        <div className="container mx-auto">
          <h3 className="text-lg font-bold mb-2">Business Package Features ($1,499):</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Responsive 10-page website</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Advanced SEO package</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Contact form & booking system</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Custom animations</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Blog setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Google Analytics integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">3 revision rounds</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">3 weeks delivery</span>
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

export default BusinessDemoPage;