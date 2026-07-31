import Image from "next/image";

import Card from "./Card";
import Flag from "./Flag";

const COUNTRIES = [
  { flag: "PT", code: "PT", detail: "3 · €18.4M" },
  { flag: "AE", code: "UAE", detail: "3 · €22.1M" },
  { flag: "GB", code: "UK", detail: "2 · €15.6M" },
  { flag: "ES", code: "ES", detail: "2 · €11.2M" },
  { flag: "FR", code: "FR", detail: "1 · €9.5M" },
  { flag: "IN", code: "IN", detail: "1 · €7.4M" },
];

export default function GeographicExposure() {
  return (
    <Card title="Geographic exposure" meta="· hover pins for asset detail">
      {/* Placeholder frame for the Google Maps embed — the label and border are
          part of the supplied PNG, so nothing is overlaid on it here. */}
      <Image
        src="/investors/google-map.png"
        alt="Map placeholder for the portfolio's geographic exposure"
        width={733}
        height={320}
        sizes="(min-width: 1280px) 732px, 100vw"
        className="mt-4 h-auto w-full rounded-[10px]"
      />

      <dl className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-6">
        {COUNTRIES.map((c) => (
          <div key={c.code}>
            <dt className="flex items-center gap-1.5 text-xs font-bold text-sky-950">
              <Flag code={c.flag} />
              {c.code}
            </dt>
            <dd className="mt-0.5 text-xs text-slate-500">{c.detail}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
