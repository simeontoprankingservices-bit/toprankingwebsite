export function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-foreground mb-2">Top 3</div>
            <p className="text-muted-foreground">
              Where we get clients, inside the local map pack
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-foreground mb-2">90 days</div>
            <p className="text-muted-foreground">
              Typical time to reach first page rankings
            </p>
          </div>
          <div>
            <div className="text-5xl font-bold text-foreground mb-2">80</div>
            <p className="text-muted-foreground">
              Local trades we&apos;ve helped dominate their area
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
