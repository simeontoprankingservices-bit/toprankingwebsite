"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold text-lg">Simeon</span>
            <span className="text-foreground font-semibold">Top Ranking Services</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#results" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Our Results
            </Link>
            <Link href="#answers" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Answers
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              FAQ
            </Link>
          </nav>
          
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Contact Simeon
          </a>
        </div>
      </div>
    </header>
  );
}
