type FilterGroup = {
  legend: string;
  options: { label: string; active?: boolean }[];
};

const GROUPS: FilterGroup[] = [
  {
    legend: "Asset Class",
    options: [
      { label: "Residential", active: true },
      { label: "Multifamily" },
      { label: "Commercial" },
      { label: "Mixed-Use" },
      { label: "Dev. Land" },
      { label: "Industrial" },
      { label: "Hospitality" },
    ],
  },
  {
    legend: "Geography",
    options: [
      { label: "EMEA" },
      { label: "Americas", active: true },
      { label: "Asia-Pacific" },
      { label: "MENA" },
    ],
  },
  {
    legend: "Ownership & Eligibility",
    options: [
      { label: "Foreign Buyer Eligible", active: true },
      { label: "Freehold Only" },
      { label: "Off-Market" },
      { label: "Institutional" },
    ],
  },
  {
    legend: "Data Quality",
    options: [
      { label: "Registry-Linked", active: true },
      { label: "Partner-Verified", active: true },
      { label: "AI-Modeled" },
    ],
  },
];

function Pill({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active ?? false}
      className={
        active
          ? "rounded-[100px] bg-gray-800/5 px-3.5 py-1.5 text-xs leading-4 text-sky-800 outline-1 -outline-offset-1 outline-sky-800"
          : "rounded-[100px] px-3.5 py-1.5 text-xs leading-4 text-neutral-600 outline-1 -outline-offset-1 outline-zinc-400 transition-colors hover:outline-sky-800 hover:text-sky-800"
      }
    >
      {label}
    </button>
  );
}

function Legend({ children }: { children: string }) {
  return (
    <legend className="mb-3 text-xs font-semibold leading-5 text-sky-800">
      {children}
    </legend>
  );
}

const inputClass =
  "w-full min-w-0 rounded-sm bg-white px-3 py-2 text-xs text-sky-950 outline-1 -outline-offset-1 outline-blue-100 placeholder:text-neutral-500 focus:outline-sky-800";

export default function FilterSidebar() {
  const [assetClass, geography, ownership, dataQuality] = GROUPS;

  return (
    <aside className="h-fit rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-blue-100 lg:sticky lg:top-6">
      <fieldset>
        <Legend>{assetClass.legend}</Legend>
        <div className="flex flex-wrap gap-2">
          {assetClass.options.map((o) => (
            <Pill key={o.label} {...o} />
          ))}
        </div>
      </fieldset>

      <hr className="my-6 border-blue-100" />

      <fieldset>
        <Legend>{geography.legend}</Legend>
        <div className="flex flex-wrap gap-2">
          {geography.options.map((o) => (
            <Pill key={o.label} {...o} />
          ))}
        </div>
      </fieldset>

      <hr className="my-6 border-blue-100" />

      <fieldset>
        <Legend>Financial Filters</Legend>
        <div className="grid grid-cols-2 gap-2">
          <input className={inputClass} placeholder="Min Price ($)" inputMode="numeric" aria-label="Minimum price in dollars" />
          <input className={inputClass} placeholder="Max Price ($)" inputMode="numeric" aria-label="Maximum price in dollars" />
        </div>
        <input
          className={`${inputClass} mt-2`}
          placeholder="Min Yield (%)"
          inputMode="decimal"
          aria-label="Minimum yield percentage"
        />
      </fieldset>

      <hr className="my-6 border-blue-100" />

      <fieldset>
        <Legend>{ownership.legend}</Legend>
        <div className="flex flex-wrap gap-2">
          {ownership.options.map((o) => (
            <Pill key={o.label} {...o} />
          ))}
        </div>
      </fieldset>

      <hr className="my-6 border-blue-100" />

      <fieldset>
        <Legend>{dataQuality.legend}</Legend>
        <div className="flex flex-wrap gap-2">
          {dataQuality.options.map((o) => (
            <Pill key={o.label} {...o} />
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
