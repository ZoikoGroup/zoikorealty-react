import Card from "./Card";

const QUARTERS = [
  "Q1'24",
  "Q2'24",
  "Q3'24",
  "Q4'24",
  "Q1'25",
  "Q2'25",
  "Q3'25",
  "Q4'25",
  "Q1'26",
];

/**
 * Indexed total return, 0 = inception. Eight points against nine labels: Q1'26
 * is the open quarter, so the series stops short of the right edge — that gap
 * is in the design, not a truncation.
 */
const FUND = [8, 20, 31, 25, 39, 45, 61, 79];
const BENCHMARK = [4, 10, 15, 19, 25, 31, 38, 47];

const WIDTH = 600;
const HEIGHT = 208;
/** Maps a 0–100 index value onto the plot height. */
const SCALE = 1.8;

const px = (i: number) => (i * WIDTH) / (QUARTERS.length - 1);
const py = (v: number) => HEIGHT - v * SCALE;
const toPath = (series: number[]) =>
  series.map((v, i) => `${i === 0 ? "M" : "L"}${px(i)},${py(v)}`).join(" ");

const lastX = px(FUND.length - 1);

export default function TotalReturnChart() {
  return (
    <Card
      title="Total return performance"
      meta="· since inception · vs MSCI Global RE Index"
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Total return since inception: ZR Capital Partners I at 14.7% IRR versus MSCI Global RE Index at 9.2% IRR."
        className="mt-4 h-56 w-full"
      >
        <defs>
          {/* currentColor + a text-* utility keeps the brand palette in one
              place instead of hard-coding hexes into the SVG. */}
          <linearGradient id="fund-area" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              className="text-emerald-400"
              stopColor="currentColor"
              stopOpacity="0.28"
            />
            <stop
              offset="100%"
              className="text-emerald-400"
              stopColor="currentColor"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d={`${toPath(FUND)} L${lastX},${HEIGHT} L0,${HEIGHT} Z`}
          fill="url(#fund-area)"
        />
        <path
          d={toPath(BENCHMARK)}
          fill="none"
          className="stroke-sky-800"
          strokeWidth="2"
          strokeDasharray="1 5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={toPath(FUND)}
          fill="none"
          className="stroke-emerald-400"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="mt-2 flex justify-between text-xs">
        {QUARTERS.map((q, i) => (
          <span
            key={q}
            className={
              i === QUARTERS.length - 1
                ? "font-bold text-sky-950"
                : "text-slate-500"
            }
          >
            {q}
          </span>
        ))}
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-xs text-neutral-700">
        <li className="flex items-center gap-2">
          <span aria-hidden className="h-0.5 w-2.5 bg-emerald-400" />
          <span className="font-bold">ZR CP I total return</span> · 14.7% IRR
        </li>
        <li className="flex items-center gap-2">
          <span
            aria-hidden
            className="h-0.5 w-2.5 border-t-2 border-dotted border-sky-800"
          />
          <span className="font-bold">MSCI Global RE</span> · 9.2% IRR
        </li>
      </ul>
    </Card>
  );
}
