import type { Metadata } from "next";

import SearchHeader from "./components/SearchHeader";
import PropertyExplorer from "./components/PropertyExplorer";

export const metadata: Metadata = {
  title: "Properties · Zoiko Realty",
  description:
    "Intent-parsed property discovery across jurisdictions — every candidate scored for ownership eligibility, yield, close speed, and all-in cost, with a full query trace.",
};

export default function PropertiesPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <SearchHeader />
      <PropertyExplorer />
    </main>
  );
}
