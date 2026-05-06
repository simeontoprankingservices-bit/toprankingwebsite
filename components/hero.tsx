"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-accent text-sm font-medium tracking-wide">FOR SOUTH AFRICAN TRADESPEOPLE</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 font-serif">
              <span className="text-foreground block">Your</span>
              <span className="text-foreground block">Competitors</span>
              <span className="text-foreground">Are </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">Getting</span>
                <svg className="absolute top-1/2 left-0 w-full h-3 -translate-y-1/2" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 6 Q50 2, 100 6 T200 6" stroke="#ef4444" strokeWidth="3" fill="none" />
                </svg>
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">Your Calls.</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              {"If your business isn't in "}
              <span className="text-foreground font-medium">{"Google's Top 3"}</span>
              {", you're handing "}
              <span className="text-foreground font-medium">70% of local leads</span>
              {" to someone else — every single day."}
            </p>
            
            {/* CTA Button */}
            <a
              href="https://wa.me/27123456789"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-colors text-lg mb-4"
            >
              <MessageCircle className="w-5 h-5" />
              {"WhatsApp Simeon — It's Free"}
            </a>
            
            {/* Urgency Timer */}
            <UrgencyTimer />
          </div>
          
          {/* Google Search Mockup */}
          <div className="relative lg:mt-8">
            <GoogleSearchMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 11,
    minutes: 10,
    seconds: 4,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 bg-background border border-border/50 rounded-full px-4 py-2 mt-4">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
      <span className="text-muted-foreground text-sm">
        Only <span className="text-foreground font-semibold">3 spots left</span> this month —
      </span>
      <span className="text-accent text-sm font-medium">
        {timeLeft.days}d {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
      </span>
    </div>
  );
}

function GoogleSearchMockup() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md ml-auto">
      {/* Search bar */}
      <div className="p-4">
        <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2.5 shadow-sm">
          <span className="text-gray-700 text-sm flex-1">plumber near me</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="px-4 flex gap-6 border-b border-gray-100">
        <span className="text-sm text-blue-600 pb-2">All</span>
        <span className="text-sm text-blue-600 pb-2 border-b-2 border-blue-600 font-medium">Maps</span>
        <span className="text-sm text-blue-600 pb-2">Images</span>
        <span className="text-sm text-blue-600 pb-2">News</span>
      </div>
      
      {/* Map area */}
      <div className="relative h-24 bg-[#e8f4e8]">
        {/* Map background with roads */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
          <path d="M0 50 Q100 40, 200 50 T400 45" fill="none" stroke="#d1d5db" strokeWidth="2"/>
          <path d="M0 70 Q150 65, 300 70 T400 68" fill="none" stroke="#d1d5db" strokeWidth="1.5"/>
          <path d="M50 0 L80 100" fill="none" stroke="#d1d5db" strokeWidth="1"/>
          <path d="M200 0 L180 100" fill="none" stroke="#d1d5db" strokeWidth="1"/>
          <path d="M320 0 L350 100" fill="none" stroke="#d1d5db" strokeWidth="1"/>
        </svg>
        
        {/* Map pins */}
        <div className="absolute top-4 left-12">
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
        </div>
        <div className="absolute top-6 left-1/2">
          <div className="w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-md"></div>
        </div>
        <div className="absolute top-3 right-20">
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
        </div>
        <div className="absolute top-8 right-8">
          <div className="w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-md"></div>
        </div>
        
        {/* 75% callout */}
        <div className="absolute top-2 right-4 bg-red-500 text-white text-xs px-3 py-1.5 rounded-md shadow-lg font-medium">
          75% of clicks go here ↑
        </div>
      </div>
      
      {/* Business listings */}
      <div className="p-4 space-y-4">
        <BusinessListing
          name="QuickFix Plumbing"
          rating={4.9}
          reviews={128}
          location="Sandton"
        />
        <BusinessListing
          name="Pipe Pros SA"
          rating={4.8}
          reviews={94}
          location="Rosebank"
        />
        <BusinessListing
          name="Joburg Plumbers Co."
          rating={4.7}
          reviews={61}
          location="Bryanston"
        />
        
        {/* Your business - page 2 */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-orange-500">Your Business — Page 2</div>
              <div className="text-xs text-gray-400">Customers never scroll this far.</div>
            </div>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded font-medium">YOU</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessListing({
  name,
  rating,
  reviews,
  location,
}: {
  name: string;
  rating: number;
  reviews: number;
  location: string;
}) {
  return (
    <div>
      <div className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">{name}</div>
      <div className="flex items-center gap-1 mt-0.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-600">{rating} ({reviews})</span>
        <span className="text-xs text-gray-400">·</span>
        <span className="text-xs text-gray-500">{location}</span>
      </div>
    </div>
  );
}
