import Hero from "./home/components/Hero";

import Discovery from "./home/components/Discovery";
import MarketIntelligence from "./home/components/MarketIntelligence";
import DigitalTwin from "./home/components/DigitalTwin";
import ExecutionVisibility from "./home/components/ExecutionVisibility";
import CtaBand from "./home/components/CtaBand";
import AccessTiers from "./home/components/AccessTiers";
import Pillars from "./home/components/Pillars";
import Pathways from "./home/components/Pathways";
import ComplianceTable from "./home/components/ComplianceTable";
import PortfolioTable from "./home/components/PortfolioTable";

export default function Home() {
  return (
    <main className="flex-1 bg-slate-50">
      <Hero />
      <Discovery />
      <MarketIntelligence />
      <DigitalTwin />
      <ExecutionVisibility />
      {/* Frames 2-6 in supplied order; the CTA band closes the page. */}
<PortfolioTable />
      <ComplianceTable />
      <Pathways />
      <Pillars />
      <AccessTiers />
       <CtaBand />
        </main>
  );
}
