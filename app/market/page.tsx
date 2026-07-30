import type { Metadata } from "next";

import PageHeader from "./components/PageHeader";
import MarketExplorer from "./components/MarketExplorer";
import CompareTable from "./components/CompareTable";
import RulePacks from "./components/RulePacks";

export const metadata: Metadata = {
  title: "Markets · Zoiko Realty",
  description:
    "Country-level intelligence with ownership eligibility, legal-complexity scoring, tax and fee calculators, FX sensitivity, and governed rule-packs.",
};

export default function MarketPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <PageHeader />
      <MarketExplorer />
      <CompareTable />
      <RulePacks />
    </main>
  );
}
