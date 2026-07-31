import Card from "./Card";

type Tone = "opportunity" | "risk" | "info";

type Alert = {
  icon: string;
  title: string;
  detail: string;
  tone: Tone;
};

const TONES: Record<Tone, { row: string; badge: string }> = {
  opportunity: {
    row: "border-l-4 border-green-600 bg-green-400/5",
    badge: "bg-green-400/15 text-green-600",
  },
  risk: {
    row: "border-l-4 border-amber-700 bg-amber-700/5",
    badge: "bg-amber-700/15 text-amber-700",
  },
  info: {
    row: "border-l-4 border-sky-800 bg-sky-800/5",
    badge: "bg-sky-800/15 text-sky-800",
  },
};

const ALERTS: Alert[] = [
  {
    icon: "↑",
    tone: "opportunity",
    title: "Lisbon Chiado Hotel · revenue +18%",
    detail: "RevPAR up · suggest hold & refinance to release equity",
  },
  {
    icon: "!",
    tone: "risk",
    title: "King's Cross Logistics · lease expires Q4 2026",
    detail: "Tenant intent unconfirmed · start mkt prep T−9mo",
  },
  {
    icon: "i",
    tone: "info",
    title: "UK SDLT change · Apr 2026",
    detail: "Affects 2 UK assets — see Markets jurisdiction page",
  },
  {
    icon: "↗",
    tone: "opportunity",
    title: "Dubai JLT · cap rate compression",
    detail: "Suggest exit window 3–9 months · est. +12% gain",
  },
];

export default function AlertsCard() {
  return (
    <Card title="Alerts & opportunities" meta="· 4 active">
      <ul className="mt-4 space-y-3">
        {ALERTS.map((a) => (
          <li
            key={a.title}
            className={`flex items-start gap-3 rounded-lg p-3.5 ${TONES[a.tone].row}`}
          >
            <span
              aria-hidden
              className={`grid size-6 shrink-0 place-items-center rounded-md text-xs font-bold ${TONES[a.tone].badge}`}
            >
              {a.icon}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-sky-950">{a.title}</p>
              <p className="mt-1 text-xs text-slate-500">{a.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
