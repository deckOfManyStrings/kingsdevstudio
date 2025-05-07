import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your typical process for new projects?",
      answer: "Our process typically includes an initial consultation, proposal and agreement phase, design mockups, development, revisions, and launch. We believe in collaborative development with regular updates and clear communication throughout."
    },
    {
      question: "How long does it take to complete a website?",
      answer: "Project timelines vary based on complexity and scope. A basic website might take 2-3 weeks, while more complex projects could take 6-8 weeks or more. We'll provide a specific timeline during our consultation based on your requirements."
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer: "Yes, we offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally. These can be customized based on your specific needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, bank transfers, and crypto payments. Typically, we require a 50% deposit to begin work, with the remaining balance due upon project completion."
    },
    {
      question: "Do you help with content creation?",
      answer: "Yes, we offer content creation services including copywriting, photo sourcing, and graphic design. These can be included in your package or added as needed."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our services and process
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                className="flex w-full items-center justify-between text-left"
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
                <div className="mt-2 text-muted-foreground">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;