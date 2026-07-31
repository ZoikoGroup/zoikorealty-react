import type { Metadata } from "next";

import PropertyHeader from "./components/PropertyHeader";
import LayerTabs from "./components/LayerTabs";
import IntelligenceLayers from "./components/IntelligenceLayers";

export const metadata: Metadata = {
  title: "Property Intelligence · Zoiko Realty",
  description:
    "Layered property intelligence for Seaside Villa, Cascais — legal, financial, physical, market, and predictive views, each source-linked with its own confidence score.",
};

export default function IntelligencePage() {
  return (
    <main className="flex-1 bg-slate-50">
      <PropertyHeader />
      <LayerTabs />
      <IntelligenceLayers />
    </main>
  );
}
