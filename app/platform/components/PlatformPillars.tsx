import Image from "next/image";
import Container from "./Container";

// The Figma text layers clipped their final characters ("coheren", "candidat",
// "augmente", "scenari", "Mgm", "an"). Restored to whole words here.
type Engine = {
  title: string;
  body: string;
  link: string;
  /** Only set where the destination page exists. */
  href?: string;
  tile: string;
  /** Supplied PNG; icons for dark tiles are white, for light tiles dark blue. */
  icon?: string;
  iconSize?: number;
  /** Fallback when no icon was supplied. */
  glyph?: string;
};

const ENGINES: Engine[] = [
  {
    title: "Search & Discover",
    body: "Natural-language intent, constraint extraction, candidate retrieval, explainable ranking — with confidence scores on every match.",
    link: "Open Discovery →",
    href: "/properties",
    tile: "bg-slate-50",
    icon: "/platform/icon-search.png",
  },
  {
    title: "Property Intelligence",
    body: "Every asset has a digital twin: legal, financial, physical, market, and predictive layers — each with confidence, provenance, and lineage.",
    link: "Open PIP →",
    href: "/intelligence",
    tile: "bg-sky-800",
    icon: "/platform/icon-property-intelligence.png",
  },
  {
    title: "Deal Room",
    body: "Governed transaction workspace with timeline, vault, compliance center, escrow ledger, and full audit trail — jurisdiction-aware end to end.",
    link: "Enter Deal Room →",
    tile: "bg-linear-to-br from-green-400 to-green-600",
    icon: "/platform/icon-deal-room.png",
  },
  {
    title: "Portfolio & Asset Mgmt",
    body: "Institutional PAMS: asset register, valuation center, scenario lab, covenant monitoring, investor reporting, and distribution rails.",
    link: "Open PAMS →",
    href: "/investors",
    tile: "bg-lime-400",
    icon: "/platform/icon-portfolio.png",
    iconSize: 15,
  },
  {
    title: "Treasury & Ledger",
    body: "Wallets, escrow, double-entry ledger, FX, reconciliations, and global distribution — with reconciled audit trail.",
    link: "Open Treasury →",
    tile: "bg-sky-950",
    icon: "/platform/icon-treasury.png",
  },
  {
    title: "Data Governance",
    body: "Source hierarchy, lifecycle state machine, confidence engine, RAG boundaries, GDPR retention, versioned audit — zero hallucinated facts.",
    link: "Open Governance →",
    tile: "bg-white outline-1 -outline-offset-1 outline-blue-100",
    icon: "/platform/icon-data-governance.png",
  },
];

export default function PlatformPillars() {
  return (
    <section className="bg-slate-50 py-16 lg:py-[72px]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Platform pillars
            </p>
            <h2 className="mt-5 max-w-[537px] text-3xl font-bold leading-tight text-sky-950 sm:text-4xl lg:text-[41px] lg:leading-[48px]">
              Four engines, one coherent workflow.
            </h2>
          </div>
          <p className="max-w-[479px] text-base leading-7 text-slate-500 lg:justify-self-end">
            From intent to post-close reporting — every step runs on shared
            governance, a single data model, and consistent trust semantics.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ENGINES.map((e) => (
            <div
              key={e.title}
              className="flex h-full flex-col rounded-2xl bg-white p-7 outline-1 -outline-offset-1 outline-blue-100"
            >
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-[10px] text-lg ${e.tile}`}
                aria-hidden
              >
                {e.icon ? (
                  <Image
                    src={e.icon}
                    alt=""
                    width={e.iconSize ?? 20}
                    height={e.iconSize ?? 20}
                    className="object-contain"
                  />
                ) : (
                  e.glyph
                )}
              </span>
              <h3 className="mt-6 text-lg font-bold text-sky-950">{e.title}</h3>
              <p className="mt-4 text-xs leading-6 text-slate-500">{e.body}</p>
              {/* Deal Room, Treasury and Governance have no page yet, so those
                  three render as buttons rather than links to nowhere. */}
              <div className="mt-auto pt-8">
                {e.href ? (
                  <a
                    href={e.href}
                    className="text-xs font-semibold text-sky-800 hover:underline"
                  >
                    {e.link}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="text-xs font-semibold text-sky-800 hover:underline"
                  >
                    {e.link}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
