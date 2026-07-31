import type { Metadata } from "next";

import PageHeader from "./components/PageHeader";
import TrustLadder from "./components/TrustLadder";
import VerificationFlow from "./components/VerificationFlow";

export const metadata: Metadata = {
  title: "Verify Identity · Zoiko Realty",
  description:
    "ZoikoID — a trust-progressive identity engine. Each verified state (S0 → S5) unlocks new capabilities, with jurisdiction-aware KYC, source-of-funds EDD, and continuous screening.",
};

export default function VerifyIdentityPage() {
  return (
    <main className="flex-1 bg-slate-50">
      <PageHeader />
      <TrustLadder />
      <VerificationFlow />
    </main>
  );
}
