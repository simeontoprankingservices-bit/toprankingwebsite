const { useState, useEffect, useMemo } = React;

// ===== Helpers =====
function waLink(num, msg = "Hi Simeon, I want a free SEO strategy session") {
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

// ===== Countdown =====
function useCountdown() {
  // Counts down to end of current month
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = useMemo(() => {
    const d = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    return d;
  }, [now.getFullYear(), now.getMonth()]);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}

function pad(n) { return String(n).padStart(2, "0"); }

// ===== Components =====
function Nav({ name, waNumber }) {
  const [first, ...rest] = name.split(" ");
  const middle = rest.slice(0, rest.length - 1).join(" ");
  const last = rest[rest.length - 1] || "";
  return (
    <nav className="nav">
      <div className="logo">
        {first} <span>{middle || "Top Ranking"}</span> {last}
      </div>
      <div className="nav-links">
        <a href="#problem">The Problem</a>
        <a href="#results">Results</a>
        <a href="#faq">FAQ</a>
      </div>
      <a className="nav-btn" href={waLink(waNumber)} target="_blank" rel="noopener">
        <i className="ti ti-brand-whatsapp"></i> WhatsApp Simeon
      </a>
    </nav>
  );
}

function Countdown({ spots }) {
  const { days, hours, mins, secs } = useCountdown();
  return (
    <div className="urgency" role="status" aria-live="polite">
      <span className="live-dot" aria-hidden="true"></span>
      <span>Only <strong>{spots} spots left</strong> this month —</span>
      <span className="countdown">{pad(days)}d {pad(hours)}h {pad(mins)}m {pad(secs)}s</span>
    </div>
  );
}

function HeroCopy({ waNumber, spots }) {
  return (
    <div className="hero-copy">
      <span className="badge"><span className="dot" aria-hidden="true"></span> For South African Tradespeople</span>
      <h1 className="hero-h1">
        Your Competitors<br/>
        Are <span className="strike">Getting</span><br/>
        <span className="blue">Your Calls.</span>
      </h1>
      <p className="hero-sub">
        If your business isn't in <strong>Google's Top 3</strong>, you're handing
        <strong> 70% of local leads </strong> to someone else — every single day.
      </p>
      <div className="cta-row">
        <a className="wa-btn" href={waLink(waNumber)} target="_blank" rel="noopener">
          <i className="ti ti-brand-whatsapp"></i> WhatsApp Simeon — It's Free
        </a>
        <Countdown spots={spots} />
      </div>
    </div>
  );
}

function SerpMock() {
  return (
    <div className="serp-mock-wrap">
      <div className="serp-mock" aria-hidden="true">
        <div className="serp-bar">
          <i className="ti ti-search"></i>
          <span>plumber near me</span>
        </div>
        <div className="serp-tabs">
          <span>All</span><span>Maps</span><span>Images</span><span>News</span>
        </div>
        <div className="map-pack">
          <div className="map-img">
            <span className="map-pin p1"></span>
            <span className="map-pin p2"></span>
            <span className="map-pin p3"></span>
          </div>
          <div className="map-result">
            <div style={{flex:1}}>
              <div className="map-name">QuickFix Plumbing</div>
              <div className="map-meta"><span className="stars">★★★★★</span> 4.9 (128) · Sandton</div>
            </div>
          </div>
          <div className="map-result">
            <div style={{flex:1}}>
              <div className="map-name">Pipe Pros SA</div>
              <div className="map-meta"><span className="stars">★★★★★</span> 4.8 (94) · Rosebank</div>
            </div>
          </div>
          <div className="map-result">
            <div style={{flex:1}}>
              <div className="map-name">Joburg Plumbers Co.</div>
              <div className="map-meta"><span className="stars">★★★★☆</span> 4.7 (61) · Bryanston</div>
            </div>
          </div>
          <div className="map-result you">
            <div style={{flex:1}}>
              <div className="map-name">Your Business — Page 2</div>
              <div className="map-meta">Customers never scroll this far.</div>
            </div>
            <span className="you-tag">You</span>
          </div>
        </div>
      </div>
      <div className="arrow-callout">75% of clicks go here ↑</div>
    </div>
  );
}

function Hero({ layout, waNumber, spots }) {
  if (layout === "split") {
    return (
      <section className={`hero layout-split`}>
        <div className="wrap hero-inner">
          <div className="hero-grid">
            <HeroCopy waNumber={waNumber} spots={spots} />
            <SerpMock />
          </div>
        </div>
      </section>
    );
  }
  if (layout === "left") {
    return (
      <section className={`hero layout-left`}>
        <div className="wrap hero-inner">
          <HeroCopy waNumber={waNumber} spots={spots} />
        </div>
      </section>
    );
  }
  return (
    <section className={`hero layout-centered`}>
      <div className="wrap hero-inner">
        <HeroCopy waNumber={waNumber} spots={spots} />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div className="wrap" style={{ padding: 0 }}>
      <div className="stats-row">
        <div className="stat-cell">
          <div className="stat-num">Top 3</div>
          <div className="stat-lbl">Where 75% of all clicks go</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">90 days</div>
          <div className="stat-lbl">Typical time to first-page results</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">R0</div>
          <div className="stat-lbl">Cost of your strategy session</div>
        </div>
      </div>
    </div>
  );
}

const PAIN = [
  { icon: "ti-search-off", title: "Invisible on Google", desc: "Customers search for your service, scroll past you, and call your competitor instead." },
  { icon: "ti-phone-off",   title: "Calls going to rivals", desc: "Every day you're stuck below the top 3 is paying jobs walking out the door." },
  { icon: "ti-coin-off",    title: "Wasting money on ads",  desc: "Paid ads stop the moment your card stops. SEO keeps bringing leads 24/7." },
];

function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">The problem</div>
          <h2 className="sec-h2">Your phone should be ringing more than it is.</h2>
          <p className="sec-p">
            You do great work. But if Google doesn't show you when someone nearby searches for what you offer,
            that work never gets seen — and the call goes somewhere else.
          </p>
        </div>
        <div className="pain-grid">
          {PAIN.map((p) => (
            <div className="pain-card" key={p.title}>
              <div className="pain-icon-wrap"><i className={`ti ${p.icon}`}></i></div>
              <div className="pain-title">{p.title}</div>
              <div className="pain-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CASES = [
  {
    trade: "Plumber",
    area: "Sandton, Johannesburg",
    before: "Page 3",
    after: "#1",
    metric: "5.4×",
    label: "more calls per week",
    quote: "“Phone hasn't stopped. Booked out 3 weeks ahead.”",
  },
  {
    trade: "Electrician",
    area: "Cape Town CBD",
    before: "#11",
    after: "#2",
    metric: "+38",
    label: "leads per month",
    quote: "“Cancelled my Google Ads. Don't need them anymore.”",
  },
  {
    trade: "Garage Door Installer",
    area: "Pretoria East",
    before: "Not listed",
    after: "#1",
    metric: "R142k",
    label: "extra revenue in 90 days",
    quote: "“Best money I've spent on the business — full stop.”",
  },
];

function Results() {
  return (
    <section className="section" id="results">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Real results</div>
          <h2 className="sec-h2">Local trades who own page <span className="blue">one</span>.</h2>
          <p className="sec-p">
            A few recent clients. Same playbook, different suburbs — Google Business Profile,
            local citations, reviews, and on-page SEO that actually targets your area.
          </p>
        </div>
        <div className="case-grid">
          {CASES.map((c) => (
            <div className="case-card" key={c.trade + c.area}>
              <div className="case-head">
                <div>
                  <div className="case-trade">{c.trade}</div>
                  <div className="case-area">{c.area}</div>
                </div>
                <span className="case-tag">90 days</span>
              </div>
              <div className="case-body">
                <div className="rank-row">
                  <div className="rank-pill before">
                    <div className="label">Before</div>
                    <div className="val">{c.before}</div>
                  </div>
                  <i className="ti ti-arrow-right rank-arrow"></i>
                  <div className="rank-pill after">
                    <div className="label">After</div>
                    <div className="val">{c.after}</div>
                  </div>
                </div>
                <div className="case-metric">
                  <span className="num">{c.metric}</span>
                  <span className="label">{c.label}</span>
                </div>
                <p className="case-quote">{c.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "I've tried SEO before and it didn't work.",
    a: "Most \"SEO\" sold to small businesses is generic and slow. We focus only on local search — the map pack, your Google Business Profile, and your suburb — which is where your customers actually look. Different game, different results.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see meaningful movement within 60–90 days. Local SEO is faster than national campaigns because the competition is smaller and we know exactly which levers to pull for South African search terms.",
  },
  {
    q: "What does it cost?",
    a: "We tailor packages to each business — a one-man electrician needs different work to a 12-truck plumbing outfit. The strategy session is completely free. We'll only discuss options if you want to after the call.",
  },
  {
    q: "Do I need a website already?",
    a: "Not necessarily. A strong Google Business Profile alone will rank you in the map pack for many trades. If you do need a simple site to support it, we'll tell you upfront — no surprises.",
  },
  {
    q: "What if my business isn't in Joburg?",
    a: "We work with tradespeople across South Africa — Cape Town, Durban, PE, Pretoria, smaller towns. Local SEO is location-based by definition, so it works the same anywhere people search on Google.",
  },
];

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Common questions</div>
          <h2 className="sec-h2">Answers before you reach out.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <details className="faq" key={i} open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <i className="ti ti-chevron-down chev"></i>
              </summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ waNumber, spots }) {
  return (
    <section className="final-cta">
      <div className="wrap">
        <h2 className="final-h">
          Stop losing calls to competitors.<br/>
          <span className="blue">Let's fix your ranking.</span>
        </h2>
        <p className="final-sub">
          Free WhatsApp strategy session. We'll show you exactly where you stand on Google
          and what it takes to reach the top 3 — at no cost, no obligation.
        </p>
        <div className="offer-box">
          <div className="offer-title">Your free session includes</div>
          <ul className="offer-items">
            <li><span className="check-circle"><i className="ti ti-check"></i></span> Your current Google ranking audit</li>
            <li><span className="check-circle"><i className="ti ti-check"></i></span> Competitor gap analysis for your area</li>
            <li><span className="check-circle"><i className="ti ti-check"></i></span> A clear action plan to reach top 3</li>
            <li><span className="check-circle"><i className="ti ti-check"></i></span> Zero obligation to sign up</li>
          </ul>
        </div>
        <a className="wa-btn" href={waLink(waNumber)} target="_blank" rel="noopener">
          <i className="ti ti-brand-whatsapp"></i> WhatsApp Simeon — It's Free
        </a>
        <div style={{ marginTop: 18 }}>
          <Countdown spots={spots} />
        </div>
      </div>
    </section>
  );
}

function Footer({ name, waNumber }) {
  // Format number like "082 557 1970"
  const local = "0" + waNumber.slice(2);
  const formatted = local.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  return (
    <footer className="footer-bar">
      <p>{name} · South Africa · {formatted}</p>
    </footer>
  );
}

// ===== App =====
function App() {
  const [t, setTweak] = window.useTweaks(window.__TWEAKS_DEFAULTS);

  // Apply accent color as CSS var
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accentColor);
    const hex = t.accentColor.replace("#", "");
    const r = parseInt(hex.slice(0,2), 16);
    const g = parseInt(hex.slice(2,4), 16);
    const b = parseInt(hex.slice(4,6), 16);
    root.style.setProperty("--accent-soft", `rgba(${r},${g},${b},0.10)`);
    root.style.setProperty("--accent-line", `rgba(${r},${g},${b},0.28)`);
  }, [t.accentColor]);

  return (
    <>
      <Nav name={t.businessName} waNumber={t.whatsappNumber} />
      <Hero layout={t.heroLayout} waNumber={t.whatsappNumber} spots={t.spotsLeft} />
      <Stats />
      <Problem />
      <Results />
      <FAQ />
      <FinalCTA waNumber={t.whatsappNumber} spots={t.spotsLeft} />
      <Footer name={t.businessName} waNumber={t.whatsappNumber} />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Brand" />
        <window.TweakColor
          label="Accent"
          value={t.accentColor}
          onChange={(v) => setTweak("accentColor", v)}
          options={["#00AEEF", "#F59E0B", "#22C55E", "#EF4444"]}
        />

        <window.TweakSection label="Hero" />
        <window.TweakRadio
          label="Layout"
          value={t.heroLayout}
          onChange={(v) => setTweak("heroLayout", v)}
          options={[
            { value: "split", label: "Split" },
            { value: "centered", label: "Center" },
            { value: "left", label: "Left" },
          ]}
        />

        <window.TweakSection label="Business" />
        <window.TweakText
          label="Name"
          value={t.businessName}
          onChange={(v) => setTweak("businessName", v)}
        />
        <window.TweakText
          label="WhatsApp #"
          value={t.whatsappNumber}
          onChange={(v) => setTweak("whatsappNumber", v)}
        />
        <window.TweakNumber
          label="Spots left"
          value={t.spotsLeft}
          min={1} max={20} step={1}
          onChange={(v) => setTweak("spotsLeft", v)}
        />
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
