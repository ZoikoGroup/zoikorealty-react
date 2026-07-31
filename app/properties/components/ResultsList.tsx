import PropertyResultCard, {
  type PropertyResult,
} from "./PropertyResultCard";

const SORTS = ["Relevance", "Price ↑", "Yield ↓", "Confidence", "Close speed"];

const RESULTS: PropertyResult[] = [
  {
    id: "seaside-villa-cascais",
    rank: "01",
    tag: "Waterfront",
    confidence: "94%",
    title: "Seaside Villa · Cascais, Portugal",
    meta: "4 BR · 5 BA · 412 m² · Freehold · Listed 8 days ago · Verified title",
    gradient: "bg-linear-71 from-sky-700 to-sky-800",
    stats: [
      { label: "Price", value: "€2,350,000" },
      { label: "Gross yield", value: "5.2%" },
      { label: "Est. close", value: "42 days" },
      { label: "All-in cost", value: "+9.7%" },
    ],
    badges: [
      { label: "✓ FOP permitted", tone: "ok" },
      { label: "✓ Title clear", tone: "ok" },
      { label: "✓ NHR 2.0 eligible owner", tone: "ok" },
      { label: "+ Waterfront match", tone: "ok" },
      { label: "Coastal protection: clear", tone: "info" },
    ],
    price: "€2,350,000",
    priceNote: "€5,704 / m²",
    cta: "Open",
  },
  {
    id: "marina-sky-apartment-dubai",
    rank: "02",
    tag: "Marina",
    confidence: "91%",
    title: "Marina Sky Apartment · Dubai Marina, UAE",
    meta: "3 BR · 3.5 BA · 186 m² · Freehold zone · Listed 3 days ago · Oqood registered",
    gradient: "bg-linear-71 from-zinc-700 to-zinc-800",
    stats: [
      { label: "Price", value: "AED 8,900,000" },
      { label: "Gross yield", value: "6.2%" },
      { label: "Est. close", value: "28 days" },
      { label: "All-in cost", value: "+5.2%" },
    ],
    badges: [
      { label: "✓ Freehold zone", tone: "ok" },
      { label: "✓ Golden Visa eligible", tone: "ok" },
      { label: "✓ High yield", tone: "ok" },
      { label: "! No mortgage for non-resident buyers", tone: "warn" },
    ],
    price: "€2,240,000",
    priceNote: "€12,043 / m² · AED 8.9M",
    cta: "Open",
  },
  {
    id: "hilltop-residence-lagos",
    rank: "03",
    tag: "Hilltop",
    confidence: "89%",
    title: "Hilltop Residence · Lagos, Portugal",
    meta: "3 BR · 3 BA · 288 m² · Freehold · Listed 14 days ago · Price reduced €50k",
    gradient: "bg-linear-53 from-stone-600 to-stone-800",
    stats: [
      { label: "Price", value: "€1,850,000" },
      { label: "Gross yield", value: "4.8%" },
      { label: "Est. close", value: "46 days" },
      { label: "All-in cost", value: "+9.5%" },
    ],
    badges: [
      { label: "✓ FOP permitted", tone: "ok" },
      { label: "✓ Waterfront match (sea view)", tone: "ok" },
      { label: "! Partial coastal zone setback", tone: "warn" },
      { label: "Algarve tourist license available", tone: "info" },
    ],
    price: "€1,850,000",
    priceNote: "€6,423 / m²",
    cta: "Open PIP",
  },
  {
    id: "palm-jumeirah-townhouse",
    rank: "04",
    tag: "Relaxed match",
    tagRelaxed: true,
    confidence: "86%",
    title: "Palm Jumeirah Townhouse · Dubai, UAE",
    meta: "4 BR · 5 BA · 325 m² · Freehold · Listed 22 days ago · Furnished",
    gradient: "bg-linear-71 from-gray-600 to-gray-800",
    stats: [
      { label: "Price", value: "AED 11,200,000" },
      { label: "Gross yield", value: "5.6%" },
      { label: "Est. close", value: "35 days" },
      { label: "All-in cost", value: "+5.1%" },
    ],
    badges: [
      { label: "✓ Waterfront match", tone: "ok" },
      { label: "✓ Freehold", tone: "ok" },
      { label: "! €2.82M — above €2.5M budget (+12%)", tone: "warn" },
    ],
    price: "€2,820,000",
    priceNote: "€8,677 / m² · AED 11.2M",
    cta: "Open",
  },
];

export default function ResultsList() {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="max-w-[230px] text-xs leading-5">
          <span className="font-bold text-sky-950">284 candidates</span>
          <span className="text-slate-500">
            {" "}
            · 12 exact · 272 within relaxed constraints ·{" "}
          </span>
          <a href="#query-trace" className="font-semibold text-sky-800 underline">
            Why?
          </a>
        </p>

        <div
          role="group"
          aria-label="Sort results"
          className="flex gap-0.5 rounded-lg bg-white p-[3px] outline-1 -outline-offset-1 outline-blue-100"
        >
          {SORTS.map((s, i) => (
            <button
              key={s}
              type="button"
              aria-pressed={i === 0}
              className={
                i === 0
                  ? "shrink-0 whitespace-nowrap rounded-md bg-sky-950 px-2.5 py-2.5 text-xs text-white"
                  : "shrink-0 whitespace-nowrap rounded-md px-2.5 py-2.5 text-xs text-slate-500 transition-colors hover:text-sky-800"
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        {RESULTS.map((p) => (
          <PropertyResultCard key={p.id} property={p} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="rounded-md bg-white px-4 py-2 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-sky-800/5"
        >
          Load 24 more
        </button>
      </div>
    </div>
  );
}
