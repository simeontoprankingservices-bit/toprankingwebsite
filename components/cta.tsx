import { MessageCircle, Check } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
          Stop losing calls to competitors.
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            {"Let's fix your ranking."}
          </span>
        </h3>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          {"Send me a WhatsApp, tell me what you do and where you work. I'll check how you rank on Google and what it takes to reach the top 3 — no cost, no obligation."}
        </p>
        
        <div className="bg-card border border-border rounded-xl p-8 max-w-xl mx-auto mb-8">
          <h4 className="text-foreground font-semibold mb-6">
            After this message you will know:
          </h4>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-muted-foreground">
                Your current Google ranking audit
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-muted-foreground">
                3 clear actions you could take yourself
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-muted-foreground">
                A clear pricing estimate (if we work together)
              </span>
            </li>
          </ul>
        </div>
        
        <a
          href="https://wa.me/27123456789"
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-medium transition-colors text-lg"
        >
          <MessageCircle className="w-6 h-6" />
          {"WhatsApp Simeon — It's Free"}
        </a>
        
        <p className="text-muted-foreground text-sm mt-6">
          {"No hard sell. No spam. Just straight talk about what works."}
        </p>
      </div>
    </section>
  );
}
