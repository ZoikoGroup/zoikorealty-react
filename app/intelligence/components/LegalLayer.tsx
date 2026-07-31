import LayerCard from "./LayerCard";
import FactTile, { type Fact } from "./FactTile";

const FACTS: Fact[] = [
  {
    label: "Title",
    value: "Freehold (Pleno)",
    detail: "Conservatória reg. 87421",
    source: "Land Reg",
  },
  {
    label: "Encumbrances",
    value: "None active",
    detail: "1 historic mortgage cleared 2019",
    source: "Land Reg",
  },
  {
    label: "Foreigner ownership",
    value: "Permitted",
    detail: "EU + non-EU residents",
    source: "Rule v2026.04",
  },
  {
    label: "Cadastral ref",
    value: "2750-374-A-412",
    detail: "1,840 m² plot",
    source: "IGT",
  },
  {
    label: "Coastal protection",
    value: "Setback noted",
    detail: "15m POOC zone — verified compliant",
    source: "POOC",
    flagged: true,
  },
  {
    label: "Energy certificate",
    value: "EPC · A",
    detail: "Valid through 2034-09",
    source: "ADENE",
  },
  {
    label: "Habitation license",
    value: "Issued 2018",
    detail: "Câmara M. Cascais · 18-A/CMC",
    source: "CMC",
  },
  {
    label: "Tenancy",
    value: "Vacant possession",
    detail: "Available at completion",
    source: "Seller decl.",
  },
  {
    label: "HOA / Condomínio",
    value: "None (single villa)",
    detail: "Independent road access",
    source: "Inferred",
  },
];

const CHARGES = [
  {
    lead: "IMI",
    rest: " annual property tax · €4,235 / year (0.18%)",
    tag: "Up to date",
    warn: false,
  },
  {
    lead: "Title insurance",
    rest: " available · est. €2,900 one-off",
    tag: "Recommended",
    warn: false,
  },
  {
    lead: "AIMI wealth tax",
    rest: " may apply (taxable value > €600k threshold)",
    tag: "Holding cost",
    warn: true,
  },
];

export default function LegalLayer() {
  return (
    <LayerCard
      id="legal"
      name="legal"
      title="Legal layer"
      updated="Updated 3h ago"
      basis="4 sources"
      confidence="94%"
    >
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {FACTS.map((f) => (
          <FactTile key={f.label} {...f} />
        ))}
      </div>

      <h3 className="mt-8 text-xs font-bold uppercase tracking-wide text-sky-800">
        Charges &amp; obligations
      </h3>
      <ul className="mt-3.5 space-y-3.5">
        {CHARGES.map((c) => (
          <li key={c.lead} className="rounded-lg bg-slate-50 p-3.5">
            <p className="flex items-start gap-3 text-xs text-sky-950">
              {c.warn ? (
                <span
                  aria-hidden
                  className="grid size-4 shrink-0 place-items-center rounded-lg bg-amber-700/20 text-xs font-bold text-amber-700"
                >
                  !
                </span>
              ) : (
                <span aria-hidden className="shrink-0 text-green-600">
                  ✓
                </span>
              )}
              <span>
                <span className="font-bold">{c.lead}</span>
                {c.rest}
              </span>
            </p>
            <span
              className={
                c.warn
                  ? "mt-2.5 ml-7 inline-block rounded-[100px] bg-amber-700/10 px-2.5 py-1 text-xs font-medium tracking-tight text-amber-700 outline-1 -outline-offset-1 outline-amber-700/30"
                  : "mt-2.5 ml-7 inline-block rounded-[100px] bg-white px-2.5 py-1 text-xs font-medium tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-blue-100"
              }
            >
              {c.tag}
            </span>
          </li>
        ))}
      </ul>
    </LayerCard>
  );
}
