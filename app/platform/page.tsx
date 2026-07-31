import type { Metadata } from "next";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import MarketsEngine from "./components/MarketsEngine";
import PlatformPillars from "./components/PlatformPillars";
import DigitalTwin from "./components/DigitalTwin";
import DealRoom from "./components/DealRoom";
import Pams from "./components/Pams";
import Pricing from "./components/Pricing";

export const metadata: Metadata = {
  title: "Platform · Zoiko Realty",
  description:
    "Zoiko is the global infrastructure for real estate intelligence, execution and trust — jurisdiction-aware, AI-augmented, with built-in compliance and explainable scoring.",
};

export default function PlatformPage() {
  // Sections are ordered by their y-offset on the Figma canvas, which differs
  // from the export's DOM order (the trust strip is declared first but sits
  // at y=817, below the hero).
  return (
    <main className="flex-1 bg-slate-50">
      <Hero />
      <TrustStrip />
      <MarketsEngine />
      <PlatformPillars />
      <DigitalTwin />
      <DealRoom />
      <Pams />
      <Pricing />
    </main>
  );
}
