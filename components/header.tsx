"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-foreground font-bold text-lg">Simeon </span>
            <span className="text-accent font-bold text-lg">Top Ranking </span>
            <span className="text-foreground font-bold text-lg">Services</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#problem" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              The Problem
            </Link>
            <Link href="#results" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Results
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              FAQ
            </Link>
          </nav>
          
          <a
            href="https://wa.me/27123456789"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            WhatsApp Simeon
          </a>
        </div>
      </div>
    </header>
  );
}
