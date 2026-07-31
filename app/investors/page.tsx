import type { Metadata } from "next";

import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioTabs from "./components/PortfolioTabs";
import PortfolioOverview from "./components/PortfolioOverview";

export const metadata: Metadata = {
  title: "Investor Portfolio · Zoiko Realty",
  description:
    "PAMS portfolio view for ZR Capital Partners I — NAV, yield, IRR and occupancy across 12 assets in 6 jurisdictions, with governed performance, cashflow, and risk reporting.",
};

export default function InvestorsPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <PortfolioHeader />
      <PortfolioTabs />
      <PortfolioOverview />
    </main>
  );
}
