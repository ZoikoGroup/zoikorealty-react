import Flag from "./Flag";

const PACKS = [
  {
    flag: "PT",
    title: "Portugal · NHR 2.0",
    kind: "Residency & tax pack",
    points: [
      "FOP permitted (residents & non-residents)",
      "IMT / stamp duty calc built-in",
      "Golden Visa path via fund / culture",
    ],
    version: "v2026.04",
    confidence: "Conf. 96%",
  },
  {
    flag: "AE",
    title: "UAE · Freehold Zones",
    kind: "Ownership & dev pack",
    points: [
      "Freehold only in designated zones",
      "Oqood registration & escrow rules",
      "No property tax; 4% transfer fee",
    ],
    version: "v2026.03",
    confidence: "Conf. 93%",
  },
  {
    flag: "GB",
    title: "UK · SDLT + Non-res",
    kind: "Tax & compliance pack",
    points: [
      "SDLT incl. non-res surcharge (2%)",
      "ATED thresholds for corp owners",
      "ECSPR disclosure requirements",
    ],
    version: "v2026.04",
    confidence: "Conf. 94%",
  },
];

export default function RulePackCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {PACKS.map((p) => (
        <div
          key={p.title}
          className="flex flex-col rounded-2xl bg-white p-5 outline-1 -outline-offset-1 outline-blue-100"
        >
          <p className="flex items-center gap-2 text-base font-bold text-slate-900">
            <Flag code={p.flag} />
            {p.title}
          </p>
          <p className="mt-2.5 text-xs tracking-wide text-slate-500">
            {p.kind}
          </p>

          <ul className="mt-5 space-y-2.5">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-2.5">
                <span className="mt-1.5 size-[5px] shrink-0 rounded-xs bg-slate-500" />
                <span className="text-xs leading-4 text-neutral-700">{pt}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between border-t border-blue-100 pt-3.5 text-xs text-slate-500 lg:mt-6">
            <span>{p.version}</span>
            <span>{p.confidence}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
