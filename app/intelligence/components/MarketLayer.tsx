import LayerCard from "./LayerCard";
import FactTile, { type Fact } from "./FactTile";

const FACTS: Fact[] = [
  {
    label: "Cascais median € / m²",
    value: "€5,420",
    detail: "Sold last 90 days",
    source: "INE+ZR",
  },
  {
    label: "This property",
    value: "€5,704",
    detail: "+5.2% vs median",
    source: "Calc",
  },
  {
    label: "Avg time to sell",
    value: "62 days",
    detail: "This bracket",
    source: "ZR",
  },
];

const COMPS = [
  {
    name: "Marginal 388 · 4BR · 398m² (waterfront)",
    price: "€2,200,000",
    rate: "€5,528 / m²",
    delta: "+3.2%",
    up: true,
  },
  {
    name: "Quinta da Marinha 12 · 5BR · 460m²",
    price: "€2,650,000",
    rate: "€5,761 / m²",
    delta: "+1.0%",
    up: true,
  },
  {
    name: "Birre Lane 8 · 4BR · 380m²",
    price: "€1,990,000",
    rate: "€5,237 / m²",
    delta: "−3.3%",
    up: false,
  },
  {
    name: "Av. Aida 22 · 4BR · 425m² (waterfront)",
    price: "€2,475,000",
    rate: "€5,824 / m²",
    delta: "+2.1%",
    up: true,
  },
];

/** 36-month price/m² index for the micro-segment, plotted only. */
const TREND = [18, 24, 21, 30, 34, 31, 40, 46, 44, 52, 58, 63];

/**
 * The frame runs the line across the middle band of the box (x 221→605 of 842,
 * y 10→58 of 80) rather than edge to edge, so the wash reads as the backdrop
 * and the line as an inset detail.
 */
const WIDTH = 842;
const HEIGHT = 80;
const [LEFT, RIGHT] = [221, 605];
const [TOP, BOTTOM] = [10, 58];

const LOW = Math.min(...TREND);
const HIGH = Math.max(...TREND);

const px = (i: number) => LEFT + (i * (RIGHT - LEFT)) / (TREND.length - 1);
const py = (v: number) =>
  BOTTOM - ((v - LOW) / (HIGH - LOW)) * (BOTTOM - TOP);
const trendPath = TREND.map(
  (v, i) => `${i === 0 ? "M" : "L"}${px(i)},${py(v)}`,
).join(" ");

export default function MarketLayer() {
  return (
    <LayerCard
      id="market"
      name="market"
      title="Market layer"
      updated="Updated 12h ago"
      basis="14 comps"
      confidence="93%"
    >
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {FACTS.map((f) => (
          <FactTile key={f.label} {...f} />
        ))}
      </div>

      <h3 className="mt-8 text-xs font-bold uppercase tracking-wide text-sky-800">
        Comparable transactions (verified)
      </h3>
      <ul className="mt-3.5 space-y-1">
        {COMPS.map((c) => (
          <li
            key={c.name}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg bg-slate-50 px-3 py-2.5"
          >
            <span className="flex-1 text-xs font-bold text-sky-950">
              {c.name}
            </span>
            <span className="text-xs text-slate-900">{c.price}</span>
            <span className="w-24 text-xs text-slate-900">{c.rate}</span>
            <span
              className={
                c.up
                  ? "rounded-[100px] bg-green-400/20 px-2 py-0.5 text-xs font-semibold text-green-600"
                  : "rounded-[100px] bg-amber-700/10 px-2 py-0.5 text-xs font-semibold text-amber-700"
              }
            >
              {c.delta}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 overflow-hidden rounded-lg bg-linear-to-b from-emerald-400/20 to-emerald-400/0">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Price per square metre trend for Cascais waterfront 4-bedroom homes over 36 months, rising steadily."
          className="h-20 w-full"
        >
          <path
            d={trendPath}
            fill="none"
            className="stroke-emerald-400"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Cascais waterfront · 4BR · price/m² · 36-month trend
      </p>
    </LayerCard>
  );
}
