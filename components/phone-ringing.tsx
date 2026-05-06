import { Search, Phone, Banknote } from "lucide-react";

export function PhoneRinging() {
  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4 text-center">
          THE PROBLEM
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          Your phone should be{" "}
          <br className="hidden sm:block" />
          ringing more than it is.
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
          {"You do great work. But if Google doesn't show you when someone nearby searches for what you offer, that work never gets seen — and the call goes somewhere else."}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Invisible on Google
            </h3>
            <p className="text-muted-foreground">
              {"Customers are searching for you, but you're buried on page 2 where no one looks."}
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Calls going to rivals
            </h3>
            <p className="text-muted-foreground">
              {"Your competitors rank higher and get the job, even if they're not better than you."}
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Banknote className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Wasting money on ads
            </h3>
            <p className="text-muted-foreground">
              {"You've tried Google Ads, but the ROI is unpredictable and stops when you stop paying."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
