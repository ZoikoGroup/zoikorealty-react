import Card from "./Card";

type Tone = "positive" | "negative" | "neutral";

const ROWS: { label: string; value: string; tone: Tone }[] = [
  { label: "3-month return", value: "+3.4%", tone: "positive" },
  { label: "12-month return", value: "+9.8%", tone: "positive" },
  { label: "Inception IRR", value: "+14.7%", tone: "positive" },
  { label: "Sharpe ratio", value: "1.84", tone: "positive" },
  { label: "Max drawdown", value: "−4.2% (Q3 24)", tone: "negative" },
  { label: "Volatility (12m)", value: "6.3%", tone: "neutral" },
  { label: "Vs benchmark", value: "+5.5pp", tone: "positive" },
];

const TONES: Record<Tone, string> = {
  positive: "font-semibold text-green-600",
  negative: "font-semibold text-amber-700",
  neutral: "text-slate-900",
};

export default function PerformanceSummary() {
  return (
    <Card title="Performance summary">
      <dl className="mt-4 space-y-2.5">
        {ROWS.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between gap-4 rounded-lg bg-slate-50 px-3.5 py-2.5"
          >
            <dt className="text-xs font-bold text-sky-950">{r.label}</dt>
            <dd className={`text-xs ${TONES[r.tone]}`}>{r.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
