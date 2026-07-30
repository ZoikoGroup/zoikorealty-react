import Container from "./Container";
import FilterSidebar from "./FilterSidebar";
import PropertyCard, { type Property } from "./PropertyCard";

const SORTS = ["Yield", "Confidence", "Risk", "Liquidity", "Strategic Fit"];

const PROPERTIES: Property[] = [
  {
    id: "downtown-tower-34b",
    location: "Dubai, UAE · MENA",
    title: "Downtown Tower — Unit 34B",
    price: "$485,000",
    assetClass: "Residential",
    gradient: "bg-linear-71 from-sky-700 to-sky-800",
    image: "/home/property-dubai.png",
    verified: true,
    fdiEligible: true,
    metrics: [
      { label: "Gross Yield", value: "7.2%" },
      { label: "Liq. Score", value: "84/100" },
      { label: "Risk Score", value: "Low" },
    ],
  },
  {
    id: "midtown-office-12f",
    location: "New York, US · Americas",
    title: "Midtown Office Suite — 12F",
    price: "$1,240,000",
    assetClass: "Commercial",
    gradient: "bg-linear-71 from-zinc-800 to-neutral-800",
    image: "/home/property-newyork.png",
    verified: true,
    metrics: [
      { label: "Gross Yield", value: "5.6%" },
      { label: "Liq. Score", value: "71/100" },
      { label: "Risk Score", value: "Medium" },
    ],
  },
  {
    id: "victoria-island-block-c",
    location: "Lagos, Nigeria · EMEA",
    title: "Victoria Island — Block C",
    price: "$320,000",
    assetClass: "Multifamily",
    gradient: "bg-linear-71 from-gray-800 to-gray-900",
    image: "/home/property-lagos.png",
    fdiEligible: true,
    metrics: [
      { label: "Gross Yield", value: "9.4%" },
      { label: "Liq. Score", value: "52/100" },
      { label: "Risk Score", value: "High" },
    ],
  },
  {
    id: "east-london-dev-site",
    location: "London, UK · EMEA",
    title: "East London Development Site",
    price: "$2,100,000",
    assetClass: "Dev. Land",
    gradient: "bg-linear-71 from-stone-800 to-stone-900",
    image: "/home/property-london.png",
    verified: true,
    fdiEligible: true,
    metrics: [
      { label: "Proj. Yield", value: "4.1%" },
      { label: "Liq. Score", value: "66/100" },
      { label: "Risk Score", value: "Low" },
    ],
  },
];

export default function Discovery() {
  return (
    <section className="bg-slate-50 py-16 lg:py-[65px]">
      <Container>
        <h2 className="text-center text-3xl font-bold leading-tight text-sky-950 sm:text-4xl lg:text-5xl lg:leading-[48.30px]">
          Controlled, Intelligence Driven Discovery
        </h2>
        <p className="mx-auto mt-5 max-w-[495px] text-center text-sm leading-7 text-zinc-500 sm:text-base">
          AI-filtered property discovery across jurisdictions with financial,
          legal, and risk visibility at every card.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[288px_minmax(0,1fr)]">
          <FilterSidebar />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs leading-5 text-zinc-500">
                <span className="font-bold text-slate-500">847</span>{" "}
                properties — filtered results
              </p>
              <div className="flex flex-wrap gap-2">
                {SORTS.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={i === 0}
                    className={
                      i === 0
                        ? "rounded-[100px] bg-sky-800 px-4 py-1.5 text-xs text-white outline-1 -outline-offset-1 outline-sky-800"
                        : "rounded-[100px] bg-white px-4 py-1.5 text-xs text-slate-500 outline-1 -outline-offset-1 outline-blue-100 transition-colors hover:text-sky-800"
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-8 xl:grid-cols-2">
              {PROPERTIES.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="rounded-sm px-8 py-3 text-sm font-medium text-sky-800 outline-1 -outline-offset-1 outline-blue-100 transition-colors hover:bg-white"
              >
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
