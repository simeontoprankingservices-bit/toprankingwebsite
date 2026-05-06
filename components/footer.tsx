export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">Simeon</span>
            <span className="text-foreground font-semibold">Top Ranking Services</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Helping local trades dominate Google rankings across South Africa.
          </p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
