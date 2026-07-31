import Card from "./Card";

type Month = {
  month: string;
  value: string;
  /** Forward-modeled months are rendered italic, per the design. */
  modeled?: boolean;
  negative?: boolean;
};

const MONTHS: Month[] = [
  { month: "Apr", value: "+218k" },
  { month: "May", value: "+241k" },
  { month: "Jun", value: "+264k" },
  { month: "Jul", value: "−84k", negative: true },
  { month: "Aug", value: "+295k" },
  { month: "Sep", value: "+312k" },
  { month: "Oct", value: "+289k" },
  { month: "Nov", value: "+274k" },
  { month: "Dec", value: "+302k", modeled: true },
  { month: "Jan", value: "+318k", modeled: true },
  { month: "Feb", value: "+285k", modeled: true },
  { month: "Mar", value: "+346k", modeled: true },
];

function toneClass({ modeled, negative }: Month) {
  if (negative) return "bg-amber-700/10 text-amber-700";
  if (modeled) return "bg-slate-50 italic text-sky-800";
  return "bg-green-400/10 text-green-600";
}

export default function CashflowCard() {
  return (
    <Card title="12-month cashflow" meta="· net of opex · forward 4mo modeled">
      <ol className="mt-4 grid grid-cols-4 gap-1.5 sm:grid-cols-6 lg:grid-cols-12">
        {MONTHS.map((m) => (
          <li
            key={m.month}
            className={`rounded-md px-2 py-2 text-center ${toneClass(m)}`}
          >
            <span className="block text-[10px] text-slate-500">{m.month}</span>
            <span className="mt-0.5 block text-xs font-semibold">
              {m.value}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-xs text-slate-900">
          <span className="font-bold">TTM net cash</span> €2.41M ·{" "}
          <span className="text-green-600">↑ 8.4% YoY</span>
        </p>
        <p className="text-xs text-slate-500">
          Jul dip: refurb capex on Marbella villa
        </p>
      </div>
    </Card>
  );
}
