import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simeon Top Ranking Services | Get Your Business to Google's Top 3",
  description:
    "Stop losing calls to competitors. We help local trades rank in Google's Top 3 and dominate local search results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">{children}</body>
    </html>
  );
}
