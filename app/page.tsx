import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { PhoneRinging } from "@/components/phone-ringing";
import { LocalTrades } from "@/components/local-trades";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <PhoneRinging />
      <LocalTrades />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
