export function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/30">
          <div className="text-center py-6 md:py-0 md:px-8">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 italic">Top 3</div>
            <p className="text-muted-foreground text-sm">
              Where 75% of all clicks go
            </p>
          </div>
          <div className="text-center py-6 md:py-0 md:px-8">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 italic">90 days</div>
            <p className="text-muted-foreground text-sm">
              Typical time to first-page results
            </p>
          </div>
          <div className="text-center py-6 md:py-0 md:px-8">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 italic">R0</div>
            <p className="text-muted-foreground text-sm">
              Cost of your strategy session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
