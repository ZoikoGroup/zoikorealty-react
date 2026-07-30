import Image from "next/image";

const STATS = [
  { label: "12m price", value: "+7.8%" },
  { label: "Gross yield", value: "4.9%" },
  { label: "Legal complexity", value: "2.6", suffix: "/ 5" },
  { label: "Days to close", value: "42", suffix: "avg" },
];

type Rule = {
  icon: "ok" | "warn";
  title: string;
  body: string;
  tag: string;
  tagStyle: "green" | "amber" | "plain";
};

const RULES: Rule[] = [
  {
    icon: "ok",
    title: "Foreigner ownership",
    body: "Permitted for EU and non-EU residents.",
    tag: "Permitted",
    tagStyle: "green",
  },
  {
    icon: "ok",
    title: "Golden Visa",
    body: "Via €500k fund / cultural / job creation.",
    tag: "Path",
    tagStyle: "plain",
  },
  {
    icon: "warn",
    title: "IMT transfer tax",
    body: "Progressive 0–7.5% based on price bracket.",
    tag: "Tax",
    tagStyle: "amber",
  },
  {
    icon: "ok",
    title: "NHR 2.0 regime",
    body: "10-yr flat rate on qualifying income.",
    tag: "Resident",
    tagStyle: "green",
  },
  {
    icon: "warn",
    title: "AIMI wealth tax",
    body: "Applies above €600k taxable value.",
    tag: "Holdings",
    tagStyle: "amber",
  },
];

const TAG_STYLES: Record<Rule["tagStyle"], string> = {
  green:
    "bg-green-400/10 text-green-600 outline-1 -outline-offset-1 outline-green-400/30",
  amber:
    "bg-amber-700/10 text-amber-700 outline-1 -outline-offset-1 outline-amber-700/30",
  plain:
    "bg-white text-sky-800 outline-1 -outline-offset-1 outline-blue-100",
};

const COSTS = [
  ["Purchase price", "€2,350,000"],
  ["IMT transfer tax (7.5%)", "€176,250"],
  ["Stamp duty (0.8%)", "€18,800"],
  ["Notary + registry", "€4,200"],
  ["Legal (1.25% avg)", "€29,375"],
];

export default function CountryPanel() {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 outline-1 -outline-offset-1 outline-blue-100">
      <div className="flex items-center gap-4">
        {/* Panel flag is its own 42x42 asset, not the 18x12 table swatch. */}
        <Image
          src="/markets/flag-pt-lg.png"
          alt=""
          width={40}
          height={40}
          className="shrink-0 rounded-lg"
        />
        <div>
          <p className="text-xl font-bold text-sky-950">Portugal</p>
          <p className="mt-1 text-xs text-slate-500">
            Lisbon · Cascais · Porto · Algarve
          </p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-[10px] bg-slate-50 p-3">
            <dt className="text-xs uppercase tracking-wider text-slate-500">
              {s.label}
            </dt>
            <dd className="mt-1 flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-sky-950">{s.value}</span>
              {s.suffix && (
                <span className="text-xs font-medium text-slate-500">
                  {s.suffix}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-5 space-y-2.5">
        {RULES.map((r) => (
          <li
            key={r.title}
            className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"
          >
            <span
              className={`shrink-0 text-xs font-bold ${
                r.icon === "ok" ? "text-green-600" : "text-amber-700"
              }`}
              aria-hidden
            >
              {r.icon === "ok" ? "✓" : "!"}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-sky-950">{r.title}</p>
              <p className="mt-1 text-xs text-slate-500">{r.body}</p>
            </div>
            <span
              className={`shrink-0 rounded-[100px] px-2.5 py-1 text-xs font-medium tracking-tight ${TAG_STYLES[r.tagStyle]}`}
            >
              {r.tag}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl bg-sky-950 p-4">
        <p className="text-xs uppercase tracking-wider text-white/60">
          Cost calculator · €2.35M · Cascais villa
        </p>
        <dl className="mt-3">
          {COSTS.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-white/10 py-1.5"
            >
              <dt className="text-xs text-white/70">{label}</dt>
              <dd className="text-xs font-semibold text-white">{value}</dd>
            </div>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-white/20 pt-3">
            <dt className="text-sm font-bold text-lime-400">
              All-in acquisition
            </dt>
            <dd className="text-sm font-semibold text-white">
              €2,578,625 · +9.73%
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-auto pt-5">
        <a
          href="/properties"
          className="block rounded-md bg-sky-800 py-3 text-center text-sm font-semibold tracking-tight text-white transition-colors hover:bg-sky-900"
        >
          See eligible properties →
        </a>
      </div>
    </div>
  );
}
