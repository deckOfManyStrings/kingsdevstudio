import React from 'react';
import { Phone, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Contact Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Discuss Your Project</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to take your online presence to the next level? Get in touch with us today.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@devstudio.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="rounded-full bg-background p-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">Github</span>
                </a>
                <a href="#" className="rounded-full bg-background p-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="rounded-full bg-background p-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none" htmlFor="name">
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none" htmlFor="email">
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="subject"
                  placeholder="What's this about?"
                  type="text"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;