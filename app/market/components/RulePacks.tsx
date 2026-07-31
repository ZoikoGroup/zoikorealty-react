import Container from "./Container";

// This section sits past the point where the code export was truncated —
// transcribed from the full-page render.
const PACKS = [
  {
    title: "Ownership & Eligibility",
    meta: "12 rule modules / jurisdiction",
    points: [
      "Nationality & residency matrix",
      "Asset-class restrictions (agri, coastal, etc)",
      "Freehold vs leasehold zones",
      "Corp / trust / fund structures",
    ],
    footL: "Versioned v2026.04",
    footR: "Audited weekly",
  },
  {
    title: "Taxes, Fees & Duties",
    meta: "Live calculator + brackets",
    points: [
      "Transfer tax / stamp duty / VAT",
      "Annual holding taxes (ATED, AIMI, IBI…)",
      "Capital gains & inheritance",
      "Notary, registry, agent commissions",
    ],
    footL: "All rates source-linked",
    footR: "Conf. 91–97%",
  },
  {
    title: "Residency & Golden Visa",
    meta: "11 active paths",
    points: [
      "Investment thresholds & asset types",
      "Physical presence requirements",
      "Pathway to permanent residency",
      "Tax residency implications",
    ],
    footL: "Cross-check with tax pack",
    footR: "Updated daily",
  },
  {
    title: "AML / KYC / Sanction",
    meta: "S0–S5 compatible",
    points: [
      "PEP, sanctions, adverse media",
      "Beneficial-ownership thresholds",
      "Source-of-funds documentation",
      "EDD triggers per jurisdiction",
    ],
    footL: "Integrated with Deal Room",
    footR: "Audited per deal",
  },
  {
    title: "Notarization & Registration",
    meta: "Flow orchestration",
    points: [
      "Required documents per stage",
      "Notary / registry integration",
      "E-sign eligibility & wet-ink gates",
      "Title priority & recording",
    ],
    footL: "Maps to Deal Room",
    footR: "Deal-stage aware",
  },
  {
    title: "FX & Treasury",
    meta: "28 currency pairs live",
    points: [
      "Cross-border settlement paths",
      "Escrow currency & hedging options",
      "Remittance & repatriation rules",
      "FX sensitivity in underwriting",
    ],
    footL: "Feeds Treasury",
    footR: "Intraday rates",
  },
];

export default function RulePacks() {
  return (
    <section className="bg-slate-50 py-14 lg:py-[53px]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Governed rule-packs
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-8 text-sky-950 sm:text-3xl">
              Every market ships with auditable logic
            </h2>
          </div>
          {/* No governance route yet — button, not a link to nowhere. */}
          <button
            type="button"
            className="rounded-md bg-white px-3.5 py-2 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-slate-50"
          >
            See governance →
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PACKS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-blue-100"
            >
              <h3 className="text-base font-bold text-sky-950">{p.title}</h3>
              <p className="mt-2 text-xs text-slate-500">{p.meta}</p>

              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-1.5 size-[5px] shrink-0 rounded-xs bg-slate-500" />
                    <span className="text-xs leading-4 text-neutral-700">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between border-t border-blue-100 pt-3.5 text-xs text-slate-500 lg:mt-6">
                <span>{p.footL}</span>
                <span>{p.footR}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
