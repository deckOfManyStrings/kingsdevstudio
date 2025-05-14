import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Check, Search, ArrowRight, ChevronDown, ChevronUp, Star, Menu, X, ShoppingCart, Heart, User, Filter } from 'lucide-react';
import Link from 'next/link';

const PremiumDemoPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [filters, setFilters] = useState({
    price: [0, 100],
    type: [],
    dietary: []
  });

  // Product images carousel
  const productImages = [
    '/api/placeholder/650/500?text=Product+Image+1',
    '/api/placeholder/650/500?text=Product+Image+2',
    '/api/placeholder/650/500?text=Product+Image+3',
    '/api/placeholder/650/500?text=Product+Image+4',
  ];

  // Automatic image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [productImages.length]);

  // Cart items state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Sourdough Loaf",
      price: 8.99,
      quantity: 1,
      image: "/api/placeholder/80/80"
    }
  ]);

  // Add to cart function
  const addToCart = () => {
    // Animation for cart button
    const button = document.getElementById('addToCartButton');
    if (button) {
      button.classList.add('animate-ping');
      setTimeout(() => {
        button.classList.remove('animate-ping');
      }, 300);
    }
    
    // Show notification
    const notification = document.getElementById('cartNotification');
    if (notification) {
      notification.classList.remove('opacity-0');
      notification.classList.add('opacity-100');
      setTimeout(() => {
        notification.classList.remove('opacity-100');
        notification.classList.add('opacity-0');
      }, 2000);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle cart sidebar
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Organic Sourdough Loaf",
      category: "bread",
      price: 8.99,
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Chocolate Croissant",
      category: "pastry",
      price: 4.50,
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Rustic Baguette",
      category: "bread",
      price: 5.99,
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "Cinnamon Roll",
      category: "pastry",
      price: 3.99,
      image: "/api/placeholder/300/300"
    },
    {
      id: 5,
      name: "Artisan Rye Bread",
      category: "bread",
      price: 7.50,
      image: "/api/placeholder/300/300"
    },
    {
      id: 6,
      name: "Berry Tart",
      category: "dessert",
      price: 6.99,
      image: "/api/placeholder/300/300"
    },
    {
      id: 7,
      name: "Almond Croissant",
      category: "pastry",
      price: 4.99,
      image: "/api/placeholder/300/300"
    },
    {
      id: 8,
      name: "Olive Focaccia",
      category: "bread",
      price: 6.50,
      image: "/api/placeholder/300/300"
    }
  ];

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
            Premium Package Demo - $2,799+
          </div>
        </div>
      </div>

      {/* Header with Mega Menu */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <a className="flex items-center gap-2 font-bold text-2xl" href="#">
            <span className="text-primary">Noble</span>Grain
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            <div className="group relative">
              <button className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Shop <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-50 mt-2 hidden w-80 rounded-lg border bg-background p-6 shadow-lg group-hover:block">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Categories</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Breads</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Pastries</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Cakes</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Desserts</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Savory Items</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Collections</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">New Arrivals</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Best Sellers</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Gift Boxes</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Seasonal</a></li>
                      <li><a href="#" className="text-sm hover:text-primary transition-colors">Special Diets</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <a href="#" className="text-primary text-sm font-medium hover:underline">View All Products</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Our Story</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Locations</a>
            <div className="group relative">
              <button className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-50 mt-2 hidden w-56 rounded-lg border bg-background p-6 shadow-lg group-hover:block">
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm hover:text-primary transition-colors">Catering</a></li>
                  <li><a href="#" className="text-sm hover:text-primary transition-colors">Wholesale</a></li>
                  <li><a href="#" className="text-sm hover:text-primary transition-colors">Corporate Gifts</a></li>
                  <li><a href="#" className="text-sm hover:text-primary transition-colors">Classes</a></li>
                  <li><a href="#" className="text-sm hover:text-primary transition-colors">Private Events</a></li>
                </ul>
              </div>
            </div>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Search className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
            </div>
            
            <button className="p-2 relative" aria-label="My Account">
              <User className="h-5 w-5" />
            </button>
            
            <button className="p-2 relative" aria-label="Favorites">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">2</span>
            </button>
            
            <button className="p-2 relative" aria-label="Shopping Cart" onClick={toggleCart}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">1</span>
            </button>
          </div>
          
          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <button className="p-2 relative" aria-label="Shopping Cart" onClick={toggleCart}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">1</span>
            </button>
            
            <button 
              className="p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="container py-4 lg:hidden flex flex-col gap-4 animate-in slide-in-from-top">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="py-2 space-y-1">
              <button className="flex w-full items-center justify-between rounded-md p-2 text-sm font-medium hover:bg-muted">
                Shop
                <ChevronDown className="h-4 w-4" />
              </button>
              <a href="#" className="block rounded-md p-2 text-sm font-medium hover:bg-muted">About</a>
              <a href="#" className="block rounded-md p-2 text-sm font-medium hover:bg-muted">Our Story</a>
              <a href="#" className="block rounded-md p-2 text-sm font-medium hover:bg-muted">Locations</a>
              <button className="flex w-full items-center justify-between rounded-md p-2 text-sm font-medium hover:bg-muted">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <a href="#" className="block rounded-md p-2 text-sm font-medium hover:bg-muted">Blog</a>
              <a href="#" className="block rounded-md p-2 text-sm font-medium hover:bg-muted">Contact</a>
            </div>
            
            <div className="flex gap-2 pt-2 border-t">
              <a href="#" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Sign In
              </a>
              <a href="#" className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Create Account
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20"></div>
          <div className="container relative z-10 py-16 md:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-4 max-w-xl animate-in slide-in-from-left duration-500">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  New Season Collection
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Artisanal Bread <br />& Pastry Collection
                </h1>
                <p className="text-xl text-muted-foreground">
                  Handcrafted with passion using time-honored techniques and the finest organic ingredients.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href="#featured"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#story"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/80 backdrop-blur px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Our Story
                  </a>
                </div>
              </div>
              <div className="relative animate-in slide-in-from-right duration-500">
                <img
                  src="/api/placeholder/700/500"
                  alt="Artisan bread collection"
                  className="rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold">Shop by Category</h2>
              <p className="text-muted-foreground max-w-lg">
                Explore our artisanal offerings crafted with passion and expertise
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Breads",
                  image: "/api/placeholder/300/300",
                  count: 12
                },
                {
                  name: "Pastries",
                  image: "/api/placeholder/300/300",
                  count: 18
                },
                {
                  name: "Cakes",
                  image: "/api/placeholder/300/300",
                  count: 9
                },
                {
                  name: "Savory",
                  image: "/api/placeholder/300/300",
                  count: 7
                }
              ].map((category, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="group relative overflow-hidden rounded-xl transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent flex flex-col justify-end p-4">
                    <h3 className="font-bold text-lg">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} products</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="featured" className="py-12 bg-muted">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground max-w-lg">
                Our best-selling items loved by customers
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === 'all' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background hover:bg-background/80'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory('bread')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === 'bread' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background hover:bg-background/80'
                  }`}
                >
                  Breads
                </button>
                <button
                  onClick={() => setSelectedCategory('pastry')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === 'pastry' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background hover:bg-background/80'
                  }`}
                >
                  Pastries
                </button>
                <button
                  onClick={() => setSelectedCategory('dessert')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === 'dessert' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background hover:bg-background/80'
                  }`}
                >
                  Desserts
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <button className="rounded-full bg-background p-2 shadow-sm transition-transform hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                        <button className="rounded-full bg-background p-2 shadow-sm transition-transform hover:scale-110">
                          <Heart className="h-5 w-5" />
                        </button>
                        <button className="rounded-full bg-background p-2 shadow-sm transition-transform hover:scale-110">
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="inline-block rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                        New
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-base group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="font-semibold">${product.price.toFixed(2)}</div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-muted text-muted" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="#" 
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View All Products
              </a>
            </div>
          </div>
        </section>

        {/* Product Detail Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Product Images */}
              <div>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={productImages[currentImageIndex]}
                    alt="Product image"
                    className="w-full h-auto"
                  />
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-sm hover:bg-background transition-colors"
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? productImages.length - 1 : prev - 1)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-sm hover:bg-background transition-colors"
                    onClick={() => setCurrentImageIndex(prev => prev === productImages.length - 1 ? 0 : prev + 1)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      className={`${
                        currentImageIndex === index 
                          ? 'ring-2 ring-primary' 
                          : 'hover:ring-1 hover:ring-primary/50'
                      } rounded-md overflow-hidden transition-all`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`Product thumbnail ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <div className="mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Bakery / Artisan Breads</div>
                      <h1 className="text-3xl font-bold mb-2">Organic Sourdough Country Loaf</h1>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary/40 text-primary/40" />
                        </div>
                        <span className="text-sm text-muted-foreground">(128 reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="rounded-full bg-background border p-1.5 hover:bg-muted transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="rounded-full bg-background border p-1.5 hover:bg-muted transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold">$8.99</span>
                    <span className="text-lg line-through text-muted-foreground">$10.99</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Save 18%
                    </span>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <p className="text-muted-foreground">
                      Our signature organic sourdough loaf, naturally leavened for 24 hours and baked to perfection in our stone hearth oven. Features a crackling crust and tender, tangy interior with a complex flavor profile.
                    </p>
                    
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="text-sm font-medium mb-1">Weight</div>
                        <div className="text-muted-foreground">800g</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">Ingredients</div>
                        <div className="text-muted-foreground">Organic flour, water, salt</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium mb-2">Size</div>
                      <div className="flex gap-2">
                        <button className="rounded-md border px-3 py-1 text-sm hover:border-primary transition-colors">
                          Small
                        </button>
                        <button className="rounded-md border border-primary bg-primary/5 px-3 py-1 text-sm">
                          Medium
                        </button>
                        <button className="rounded-md border px-3 py-1 text-sm hover:border-primary transition-colors">
                          Large
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium mb-2">Quantity</div>
                      <div className="flex items-center w-36 h-10">
                        <button 
                          className="flex h-full w-10 items-center justify-center rounded-l-md border border-r-0 hover:bg-muted transition-colors"
                          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"></path></svg>
                        </button>
                        <input
                          className="h-full w-full border-y text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        />
                        <button 
                          className="flex h-full w-10 items-center justify-center rounded-r-md border border-l-0 hover:bg-muted transition-colors"
                          onClick={() => setQuantity(prev => prev + 1)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <button
                      id="addToCartButton"
                      className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring min-w-[200px]"
                      onClick={addToCart}
                    >
                      Add to Cart
                    </button>
                    <button className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                      Subscribe & Save 10%
                    </button>
                  </div>
                  
                  <div 
                    id="cartNotification" 
                    className="fixed top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg opacity-0 transition-opacity duration-300"
                  >
                    Item added to cart!
                  </div>
                </div>
                
                <div className="border-t pt-8">
                  <div className="flex border-b">
                    <button
                      className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                        activeTab === 'description' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent hover:text-primary'
                      }`}
                      onClick={() => setActiveTab('description')}
                    >
                      Description
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                        activeTab === 'ingredients' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent hover:text-primary'
                      }`}
                      onClick={() => setActiveTab('ingredients')}
                    >
                      Ingredients
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                        activeTab === 'reviews' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent hover:text-primary'
                      }`}
                      onClick={() => setActiveTab('reviews')}
                    >
                      Reviews (128)
                    </button>
                  </div>
                  
                  <div className="py-4">
                    {activeTab === 'description' && (
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Our Organic Sourdough Country Loaf is the cornerstone of our bakery. Made with a starter that's been nurtured for over a decade, this bread represents the pinnacle of traditional artisan baking methods.
                        </p>
                        <p>
                          Each loaf is naturally leavened for 24 hours, allowing the flavors to develop fully. The slow fermentation process not only enhances taste but also improves digestibility and extends shelf life naturally, without additives.
                        </p>
                        <p>
                          Baked in our stone hearth oven, this bread develops a crackling crust that protects the tender, open crumb structure inside. The result is a loaf with complex flavor, subtle sourness, and a wonderfully chewy texture.
                        </p>
                        <p>
                          Pairs beautifully with artisanal cheeses, quality olive oil, or hearty soups. Also makes exceptional toast and sandwiches.
                        </p>
                      </div>
                    )}
                    
                    {activeTab === 'ingredients' && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Ingredients</h4>
                          <p className="text-muted-foreground">
                            Organic unbleached wheat flour, organic whole wheat flour, water, sea salt.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Allergen Information</h4>
                          <p className="text-muted-foreground">
                            Contains wheat gluten. Made in a facility that also processes tree nuts and dairy.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Nutrition Facts (per 100g)</h4>
                          <div className="mt-2 space-y-1 text-sm">
                            <div className="flex justify-between border-b py-1">
                              <span>Calories</span>
                              <span>260 kcal</span>
                            </div>
                            <div className="flex justify-between border-b py-1">
                              <span>Total Fat</span>
                              <span>1.2g</span>
                            </div>
                            <div className="flex justify-between border-b py-1">
                              <span>Saturated Fat</span>
                              <span>0.2g</span>
                            </div>
                            <div className="flex justify-between border-b py-1">
                              <span>Carbohydrates</span>
                              <span>51g</span>
                            </div>
                            <div className="flex justify-between border-b py-1">
                              <span>Sugars</span>
                              <span>1.5g</span>
                            </div>
                            <div className="flex justify-between border-b py-1">
                              <span>Fiber</span>
                              <span>2.8g</span>
                            </div>
                            <div className="flex justify-between border-b py-1">
                              <span>Protein</span>
                              <span>9.4g</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span>Salt</span>
                              <span>1.2g</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'reviews' && (
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div>
                            <div className="text-3xl font-bold">4.8</div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary/40 text-primary/40" />
                            </div>
                            <div className="text-sm text-muted-foreground">128 reviews</div>
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="text-sm">5 stars</div>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[85%]"></div>
                              </div>
                              <div className="text-sm">85%</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm">4 stars</div>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[10%]"></div>
                              </div>
                              <div className="text-sm">10%</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm">3 stars</div>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[5%]"></div>
                              </div>
                              <div className="text-sm">5%</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm">2 stars</div>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[0%]"></div>
                              </div>
                              <div className="text-sm">0%</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm">1 star</div>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[0%]"></div>
                              </div>
                              <div className="text-sm">0%</div>
                            </div>
                          </div>
                        </div>
                        
                        <button className="w-full py-2.5 px-4 text-sm font-medium border rounded-md hover:bg-muted transition-colors">
                          Write a Review
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-16 bg-muted">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute inset-0 -translate-x-4 -translate-y-4 border-2 border-primary rounded-lg"></div>
                <img
                  src="/api/placeholder/600/400"
                  alt="Our bakery"
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Noble Grain began as a small bakery in 2005, founded by master baker Thomas Noble with a simple mission: to create extraordinary bread using time-honored techniques and the finest ingredients.
                </p>
                <p className="text-muted-foreground">
                  What started as a passion project has grown into a beloved institution, but our values remain unchanged. Every loaf is still shaped by hand, fermented slowly, and baked on stone. We believe that good bread takes time, and some things shouldn't be rushed.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to honor baking traditions while embracing innovation. Our team of dedicated artisans works through the night to ensure fresh, exceptional products are ready for our customers each morning.
                </p>
                <a 
                  href="#" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Shop By Collections */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold">Curated Collections</h2>
              <p className="text-muted-foreground max-w-lg">
                Discover specially curated selections for every occasion
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Breakfast Bundle",
                  description: "Start your day with our selection of morning favorites",
                  image: "/api/placeholder/400/300"
                },
                {
                  title: "Gift Boxes",
                  description: "Thoughtfully arranged assortments perfect for gifting",
                  image: "/api/placeholder/400/300"
                },
                {
                  title: "Seasonal Specials",
                  description: "Limited-time offerings featuring the best of the season",
                  image: "/api/placeholder/400/300"
                }
              ].map((collection, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-bold text-xl mb-2">{collection.title}</h3>
                    <p className="text-muted-foreground mb-4">{collection.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Shop Collection 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary/5 border-y">
          <div className="container">
            <div className="max-w-xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
              <p className="text-muted-foreground">
                Subscribe to receive updates on new products, special offers, and baking tips
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 sm:w-auto">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
              <p className="text-muted-foreground max-w-lg">
                @noblegrainartizan
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={`/api/placeholder/200/200?text=Instagram+${index + 1}`}
                    alt={`Instagram post ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Shopping Cart Sidebar */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-background shadow-xl transform transition-transform duration-300 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-medium">Shopping Cart (1)</h3>
            <button 
              className="p-2 hover:bg-muted rounded-md transition-colors"
              onClick={toggleCart}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                <div>
                  <h4 className="text-lg font-medium">Your cart is empty</h4>
                  <p className="text-muted-foreground">Add items to your cart to continue</p>
                </div>
                <button 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  onClick={toggleCart}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Qty: {item.quantity}</span>
                        <span>·</span>
                        <button className="hover:text-primary transition-colors">Remove</button>
                      </div>
                      <div className="mt-1 font-medium">${item.price.toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="border-t p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">$8.99</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="border-t pt-3 flex items-center justify-between">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold">$8.99</span>
              </div>
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                Checkout
              </button>
              <button 
                className="w-full py-2 text-center text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={toggleCart}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a className="flex items-center gap-2 font-bold text-2xl" href="#">
                <span className="text-primary">Noble</span>Grain
              </a>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Artisanal bakery specializing in naturally leavened breads and pastries made with organic ingredients and traditional methods.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a>
                <a href="#" className="rounded-full bg-background border p-2 text-foreground hover:bg-muted transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Shop</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">All Products</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Breads</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Pastries</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Cakes</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Gift Cards</a>
                </nav>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">About Us</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Blog</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Careers</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Press</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Sustainability</a>
                </nav>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Customer Service</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">FAQs</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Store Locator</a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground order-2 md:order-1">
              © 2025 Noble Grain Artisan Bakery. All rights reserved.
            </p>
            <div className="flex gap-6 mb-4 md:mb-0 order-1 md:order-2">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Accessibility</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Payment Methods */}
      <div className="bg-background py-4 border-t">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs text-muted-foreground">We accept:</span>
            <div className="flex gap-2">
              <div className="h-6 w-10 rounded bg-muted"></div>
              <div className="h-6 w-10 rounded bg-muted"></div>
              <div className="h-6 w-10 rounded bg-muted"></div>
              <div className="h-6 w-10 rounded bg-muted"></div>
              <div className="h-6 w-10 rounded bg-muted"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature List Overlay */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg">
        <div className="container mx-auto">
          <h3 className="text-lg font-bold mb-2">Premium Package Features ($2,799+):</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Fully custom website design</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">E-commerce functionality</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Custom content management system</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Performance optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Advanced security features</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Unlimited revisions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Local business listing setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">4-6 weeks delivery</span>
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

export default PremiumDemoPage;