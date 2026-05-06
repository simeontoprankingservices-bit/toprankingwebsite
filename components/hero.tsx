import { MessageCircle, Phone, MapPin, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
              LOCAL GOOGLE RANKING DOMINANCE
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Your</span>{" "}
              <span className="text-foreground">Competitors</span>
              <br />
              <span className="text-foreground">Are </span>
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                Getting
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                Your Calls.
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              {"If your business isn't in Google's Top 3, you're handing 70% of local leads to someone else — even if your work is better."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://wa.me/27123456789"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                {"WhatsApp Simeon — It's Free"}
              </a>
              <a
                href="tel:+27123456789"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent text-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get the details
              </a>
            </div>
            
            <p className="text-muted-foreground text-sm">
              Or, if a quick call works better:{" "}
              <a href="tel:+27123456789" className="text-accent hover:underline">
                +27 12 345 6789
              </a>
            </p>
          </div>
          
          <div className="relative">
            <GoogleMapsMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleMapsMockup() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
      {/* Search bar */}
      <div className="bg-white p-3 border-b border-gray-200">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-gray-700 text-sm">plumber near me</span>
        </div>
      </div>
      
      <div className="flex">
        {/* Map area */}
        <div className="w-1/2 bg-[#e8f4e8] relative h-64">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <path d="M0 100 Q50 80 100 100 T200 100" fill="none" stroke="#94a3b8" strokeWidth="1"/>
              <path d="M0 120 Q50 100 100 120 T200 120" fill="none" stroke="#94a3b8" strokeWidth="1"/>
              <path d="M50 0 L50 200" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              <path d="M100 0 L100 200" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              <path d="M150 0 L150 200" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute top-8 left-8">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">A</div>
          </div>
          <div className="absolute top-16 right-12">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">B</div>
          </div>
          <div className="absolute bottom-12 left-16">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">C</div>
          </div>
        </div>
        
        {/* Results panel */}
        <div className="w-1/2 bg-white p-3 space-y-3">
          <div className="text-xs text-gray-500 mb-2">Top 3 24</div>
          
          <BusinessListing
            rank="A"
            name="QuickFix Plumbing"
            rating={4.9}
            reviews={127}
            highlighted
          />
          <BusinessListing
            rank="B"
            name="Pro Plumbers JHB"
            rating={4.7}
            reviews={89}
          />
          <BusinessListing
            rank="C"
            name="Reliable Plumbing Co"
            rating={4.6}
            reviews={64}
          />
          
          <div className="text-xs text-gray-400 pt-2">View all results →</div>
        </div>
      </div>
    </div>
  );
}

function BusinessListing({
  rank,
  name,
  rating,
  reviews,
  highlighted = false,
}: {
  rank: string;
  name: string;
  rating: number;
  reviews: number;
  highlighted?: boolean;
}) {
  return (
    <div className={`p-2 rounded-lg ${highlighted ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"}`}>
      <div className="flex items-start gap-2">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${highlighted ? "bg-green-500" : "bg-red-500"}`}>
          {rank}
        </div>
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-medium truncate ${highlighted ? "text-green-700" : "text-gray-900"}`}>
            {name}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-700">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="w-3 h-3" />
            <span>Sandton</span>
          </div>
        </div>
      </div>
    </div>
  );
}
