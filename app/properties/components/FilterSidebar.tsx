import type { ReactNode } from "react";

type CheckOption = {
  label: string;
  /** Candidate count for the facet — omitted where the design shows none. */
  count?: number;
  defaultChecked?: boolean;
};

const PROPERTY_TYPES: CheckOption[] = [
  { label: "Residential", count: 284, defaultChecked: true },
  { label: "Commercial", count: 112 },
  { label: "Logistics", count: 48 },
  { label: "Land / development", count: 66 },
  { label: "Mixed-use", count: 21 },
];

const OWNERSHIP: CheckOption[] = [
  { label: "Foreigner owner permitted", defaultChecked: true },
  { label: "Freehold only" },
  { label: "Golden Visa eligible" },
  { label: "Corp / trust holding ok" },
];

const LEGAL_COMPLEXITY: CheckOption[] = [
  { label: "Low (1–2)", defaultChecked: true },
  { label: "Medium (3)", defaultChecked: true },
  { label: "High (4–5)" },
];

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl bg-white p-5 outline-1 -outline-offset-1 outline-blue-100">
      <h2 className="text-xs font-bold uppercase tracking-wider text-sky-800">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CheckRow({ label, count, defaultChecked }: CheckOption) {
  return (
    <li className="flex items-center gap-2">
      <label className="flex flex-1 items-center gap-3 text-xs text-slate-900">
        {/* Solid fill when checked, no tick glyph — matches the design. */}
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="size-3.5 shrink-0 appearance-none rounded-xs border border-neutral-500 bg-white checked:border-sky-800 checked:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
        />
        {label}
      </label>
      {count !== undefined && (
        <span className="text-xs text-slate-500">{count}</span>
      )}
    </li>
  );
}

/**
 * Decorative dual-handle track from the design. The live values are stated in
 * the adjacent labels and price inputs, so this carries no information of its
 * own and stays out of the accessibility tree.
 */
function RangeTrack({ from, to }: { from: number; to: number }) {
  return (
    <div aria-hidden="true" className="relative h-1.5 rounded-[3px] bg-slate-50">
      <span
        className="absolute inset-y-0 rounded-[3px] bg-sky-800"
        style={{ left: `${from}%`, right: `${100 - to}%` }}
      />
      {[from, to].map((pos) => (
        <span
          key={pos}
          className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-800 bg-white"
          style={{ left: `${pos}%` }}
        />
      ))}
    </div>
  );
}

function SliderRow({
  label,
  value,
  from,
  to,
}: {
  label: string;
  value: string;
  from: number;
  to: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-slate-900">{label}</span>
        <span className="text-xs text-slate-500">{value}</span>
      </div>
      <div className="mt-4 px-2">
        <RangeTrack from={from} to={to} />
      </div>
    </div>
  );
}

const priceInputClass =
  "w-full min-w-0 rounded-md bg-slate-50 px-2.5 py-1.5 text-xs text-sky-950 outline-1 -outline-offset-1 outline-blue-100 focus:outline-sky-800";

export default function FilterSidebar() {
  return (
    <aside className="flex h-fit flex-col gap-5 lg:sticky lg:top-6">
      <Card title="Property type">
        <ul className="space-y-3">
          {PROPERTY_TYPES.map((o) => (
            <CheckRow key={o.label} {...o} />
          ))}
        </ul>
      </Card>

      <Card title="Price range">
        <div className="px-2">
          <RangeTrack from={15} to={70} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <input
            className={priceInputClass}
            defaultValue="€750k"
            aria-label="Minimum price"
          />
          <input
            className={priceInputClass}
            defaultValue="€2.5M"
            aria-label="Maximum price"
          />
        </div>
      </Card>

      <Card title="Ownership eligibility">
        <ul className="space-y-3">
          {OWNERSHIP.map((o) => (
            <CheckRow key={o.label} {...o} />
          ))}
        </ul>
      </Card>

      <Card title="Yield & returns">
        <div className="space-y-6">
          <SliderRow
            label="Min gross yield"
            value="4.5%"
            from={15}
            to={70}
          />
          <SliderRow label="Min occupancy" value="85%" from={15} to={70} />
        </div>
      </Card>

      <Card title="Legal complexity">
        <ul className="space-y-3">
          {LEGAL_COMPLEXITY.map((o) => (
            <CheckRow key={o.label} {...o} />
          ))}
        </ul>
      </Card>
    </aside>
  );
}
