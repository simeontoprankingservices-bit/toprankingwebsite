"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "I've tried SEO before and it didn't work.",
    answer:
      "Most \"SEO\" sold to businesses is generic and not focused on local results. We specialize specifically in local Google ranking — Google Business Profile, local citations, reviews, and on-page SEO. Different game, different results.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most clients see meaningful movement within 30-60 days, with significant results within 90 days. Local SEO moves faster than traditional SEO because we're targeting a smaller, specific geographic area.",
  },
  {
    question: "What does it cost?",
    answer:
      "We offer straightforward monthly packages based on your competition level and target area size. No long-term contracts — you stay because it works, not because you're locked in. Contact us for a custom quote.",
  },
  {
    question: "Do I need a website already?",
    answer:
      "Not necessarily. While a website helps, we can start with just your Google Business Profile and build from there. We can also help you get a simple, conversion-focused website if needed.",
  },
  {
    question: "What if my business isn't in Joburg?",
    answer:
      "We work with local trades across South Africa. The strategy works the same whether you're in Cape Town, Durban, Pretoria, or smaller towns. Local is local.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Answers before you reach out.
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Common questions from trades considering local SEO.
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
