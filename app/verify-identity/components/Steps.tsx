import Image from "next/image";

import StepCard from "./StepCard";
import DocCard, { type Doc } from "./DocCard";

const LIVENESS_CHECKS = [
  { label: "Front of ID", done: true },
  { label: "Back of ID", done: true },
  { label: "Look up", done: true },
  { label: "Look right", done: true },
  { label: "Smile", done: false },
];

const KYC_DOCS: Doc[] = [
  {
    title: "Government ID (passport)",
    detail: "Verified · MRZ + biometric · Tier 1",
    cleared: true,
  },
  {
    title: "Proof of address",
    detail: "Bank statement · < 90 days · OCR matched",
    cleared: true,
  },
  {
    title: "Tax identification number",
    detail: "NIF (PT) added · cross-checked finanças",
    cleared: true,
  },
  {
    title: "PEP / Sanctions screening",
    detail: "3 lists · all clear · refreshed daily",
    cleared: true,
  },
];

const SOF_DOCS: Doc[] = [
  {
    title: "Bank statements (6 months)",
    detail: "2 institutions · classified by AI",
    cleared: true,
  },
  {
    title: "Employer letter",
    detail: "HR-signed · cross-checked LinkedIn",
    cleared: true,
  },
  {
    title: "Tax return (last filed year)",
    detail: "Required for source-of-funds > €500k",
    action: "Upload",
  },
  {
    title: "Investment disposal proof",
    detail: "If applicable · brokerage statement",
    action: "Upload",
  },
  {
    title: "AML attestation (signed)",
    detail: "Self-certify funds origin",
    action: "Sign",
  },
];

const RISK_PROFILE = [
  {
    label: "PEP exposure",
    value: "None",
    detail: "Direct & family network · 3 lists",
  },
  {
    label: "Sanctions hit",
    value: "None",
    detail: "OFAC, UN, EU consolidated",
  },
  {
    label: "Adverse media",
    value: "None",
    detail: "Refreshed daily · Refinitiv WC",
  },
  {
    label: "Country of residence",
    value: "🇸🇬 Singapore (low-risk)",
    detail: "FATF white-list",
  },
  {
    label: "Country of funds",
    value: "🇸🇬 Singapore",
    detail: "Same · no cross-border flag",
  },
  {
    label: "Risk score",
    value: "2 / 10 (Low)",
    detail: "Auto-AML decision · audit-logged",
  },
];

const UBOS = [
  {
    initials: "ML",
    name: "Marcus Lee",
    detail: "Singapore · S3 verified · Director",
    share: "42%",
  },
  {
    initials: "EW",
    name: "Emma Walsh",
    detail: "UK · S2 — pending KYC",
    note: "⏱ awaiting docs",
    share: "31%",
  },
  {
    initials: "YC",
    name: "Yusuf Chen",
    detail: "UAE · S3 verified · Investor",
    share: "27%",
  },
];

export function Step1Account() {
  return (
    <StepCard
      marker="✓"
      done
      title="Step 1 · Account & email"
      meta="S0 → S1 · completed 14 Mar at 09:12"
    >
      <p className="mt-5 text-xs leading-5 text-neutral-700">
        Email verified{" "}
        <span className="font-bold text-green-600">marcus.lee@zr-cp.com</span> ·
        device fingerprint registered · GDPR consent recorded.
      </p>
    </StepCard>
  );
}

export function Step2Liveness() {
  return (
    <StepCard
      marker="✓"
      done
      title="Step 2 · Government ID & selfie liveness"
      meta="S1 → S2 · completed 14 Mar at 09:24"
    >
      <div className="mt-5 flex flex-col items-center gap-6 rounded-2xl bg-sky-950 p-6 sm:flex-row sm:items-start">
        <div className="relative grid size-48 shrink-0 place-items-center rounded-full bg-linear-to-br from-sky-800 to-emerald-400">
          <span
            aria-hidden
            className="absolute -inset-2 rounded-full border-[3px] border-dashed border-lime-400/60"
          />
          {/* Silhouette stands in for the captured selfie. The PNG already
              carries its 40% alpha, so no opacity class here. */}
          <Image
            src="/verify-identity/govt-id.png"
            alt=""
            width={90}
            height={90}
            className="size-24"
          />
        </div>

        <div className="min-w-0 flex-1 sm:pt-10">
          <h3 className="text-lg font-bold text-white">
            Liveness pass · 78% confidence
          </h3>
          <p className="mt-2 text-xs leading-5 text-white/70">
            5-step liveness check completed. Document MRZ matched, biometric
            similarity 94.2%. Issuing country verified against jurisdiction
            registry.
          </p>

          <div
            className="mt-6 h-1 overflow-hidden rounded-xs bg-white/10"
            role="progressbar"
            aria-valuenow={78}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Liveness confidence"
          >
            <span className="block h-full w-[78%] bg-linear-to-r from-lime-400 to-emerald-400" />
          </div>

          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs">
            {LIVENESS_CHECKS.map((c) => (
              <li
                key={c.label}
                className={c.done ? "text-white/90" : "font-semibold text-lime-400"}
              >
                {c.done && (
                  <span aria-hidden className="text-green-400">
                    ✓{" "}
                  </span>
                )}
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 text-xs leading-4 text-slate-500">
        ID document: <span aria-hidden>🇸🇬</span>{" "}
        <span className="font-bold">Singapore passport</span> · K12345678 ·
        expires 2032-04 · biometrics matched.
      </p>
    </StepCard>
  );
}

export function Step3KycMatrix() {
  return (
    <StepCard
      marker="✓"
      done
      title="Step 3 · KYC document matrix"
      meta="S2 → S3 · jurisdiction-aware · completed 14 Mar"
    >
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {KYC_DOCS.map((d) => (
          <DocCard key={d.title} {...d} />
        ))}
      </div>
    </StepCard>
  );
}

export function Step4SourceOfFunds() {
  return (
    <StepCard
      marker="4"
      active
      title="Step 4 · Source-of-Funds & EDD"
      meta="S3 → S4 · in progress · 2 of 5 done"
    >
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {SOF_DOCS.map((d) => (
          <DocCard key={d.title} {...d} />
        ))}
      </div>

      <h3 className="mt-8 text-xs font-bold uppercase tracking-wide text-sky-800">
        Enhanced Due Diligence — risk profile
      </h3>
      <dl className="mt-3.5 grid gap-4 rounded-2xl p-6 outline-1 -outline-offset-1 outline-blue-100 sm:grid-cols-2 xl:grid-cols-3">
        {RISK_PROFILE.map((r) => (
          <div key={r.label} className="rounded-[10px] bg-slate-50 p-3.5">
            <dt className="text-xs uppercase tracking-wider text-slate-500">
              {r.label}
            </dt>
            <dd>
              <span className="mt-1 block text-base font-bold text-sky-950">
                {r.value}
              </span>
              <span className="mt-1.5 block text-xs text-slate-500">
                {r.detail}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </StepCard>
  );
}

export function Step5Entity() {
  return (
    <StepCard
      marker="5"
      title="Step 5 · Institutional entity & UBOs (optional · S5)"
      meta="S4 → S5 · only if transacting via entity"
    >
      <p className="mt-5 text-xs text-slate-500">
        Add the legal entity through which you&apos;ll transact. We&apos;ll
        auto-fetch corporate registry data and identify UBOs &gt; 25% — each
        must individually pass S3.
      </p>

      <div className="mt-4 rounded-[10px] bg-slate-50 p-4">
        <h3 className="text-sm font-bold text-slate-900">
          ZR Capital Partners I LP
        </h3>
        <p className="mt-1.5 text-xs text-slate-500">
          Cayman Islands · Reg. CP-2024-08712 · auto-fetched · 3 UBOs identified
        </p>
      </div>

      <ul className="mt-3 space-y-2">
        {UBOS.map((u) => (
          <li
            key={u.name}
            className="flex items-center gap-4 rounded-[10px] bg-slate-50 p-3"
          >
            <span
              aria-hidden
              className="grid size-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-sky-800 to-emerald-400 text-xs font-bold text-white"
            >
              {u.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-sky-950">{u.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                {u.detail}
                {u.note && (
                  <span className="ml-2 text-[9.2px] text-amber-700">
                    {u.note}
                  </span>
                )}
              </p>
            </div>
            <span className="shrink-0 text-base font-bold text-sky-800">
              {u.share}
            </span>
          </li>
        ))}
      </ul>
    </StepCard>
  );
}
