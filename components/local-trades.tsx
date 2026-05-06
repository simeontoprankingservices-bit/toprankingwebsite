import { TrendingUp, Star, Users } from "lucide-react";

export function LocalTrades() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Local trades who own page{" "}
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            one.
          </span>
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          {"A few success stories. Same playbook, different suburbs — Google Business Profile, local citations, reviews, and on-page SEO that actually targets your area."}
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <RankingCard
            title="Plumber"
            location="Sandton"
            position={1}
            change="+8"
            color="green"
          />
          <RankingCard
            title="Electrician"
            location="Randburg"
            position={1}
            change="+11"
            color="green"
          />
          <RankingCard
            title="Roofer"
            location="Fourways"
            position={2}
            change="NEW"
            color="cyan"
          />
          <RankingCard
            title="Garage Door Installer"
            location="Centurion"
            position={1}
            change="+6"
            color="green"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <MetricCard
            icon={<TrendingUp className="w-6 h-6" />}
            value="5.4x"
            label="more calls per week"
            description="Plumber in Sandton decided to rank locally — results followed."
          />
          <MetricCard
            icon={<Star className="w-6 h-6" />}
            value="+38"
            label="5-star Google reviews"
            description={"Collected through simple ask-for-review campaigns."}
          />
          <MetricCard
            icon={<Users className="w-6 h-6" />}
            value="R1,426"
            label="cost per booked job (before)"
            description={"Now free/organic. He landed the same jobs without ad spend — all organic."}
          />
        </div>
      </div>
    </section>
  );
}

function RankingCard({
  title,
  location,
  position,
  change,
  color,
}: {
  title: string;
  location: string;
  position: number;
  change: string;
  color: "green" | "cyan";
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-muted-foreground text-sm">Position</span>
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${
            color === "green"
              ? "bg-primary/20 text-primary"
              : "bg-accent/20 text-accent"
          }`}
        >
          {change}
        </span>
      </div>
      <div className="text-4xl font-bold text-foreground mb-1">#{position}</div>
      <div className="text-foreground font-medium">{title}</div>
      <div className="text-muted-foreground text-sm">{location}</div>
    </div>
  );
}

function MetricCard({
  icon,
  value,
  label,
  description,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-muted-foreground text-sm mb-3">{label}</div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
