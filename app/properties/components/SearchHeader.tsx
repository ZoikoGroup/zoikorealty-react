import Container from "./Container";

type Chip = {
  label: string;
  /** Lime chips are constraints ZoikoAI inferred rather than ones the user typed. */
  suggested?: boolean;
};

const PARSED: Chip[] = [
  { label: "🏷 residential · waterfront" },
  { label: "📍 Portugal" },
  { label: "📍 UAE" },
  { label: "💰 ≤ €2.5M" },
  { label: "🧾 FOP eligible" },
  { label: "📈 gross yield > 4.5%" },
  { label: "⏱ close < 60 days" },
  { label: "+ High-speed rail access", suggested: true },
  { label: "+ Coastal protection rules clear", suggested: true },
];

function ParsedChip({ label, suggested }: Chip) {
  return (
    <li
      className={
        suggested
          ? "flex items-center gap-2 rounded-[100px] bg-lime-400/10 py-2 pl-3 pr-2.5 text-xs text-lime-700 outline-1 -outline-offset-1 outline-lime-400/40"
          : "flex items-center gap-2 rounded-[100px] bg-white py-2 pl-3 pr-2.5 text-xs text-sky-950 outline-1 -outline-offset-1 outline-blue-100"
      }
    >
      {label}
      <button
        type="button"
        aria-label={`Remove ${label} constraint`}
        className="text-sm leading-none opacity-50 transition-opacity hover:opacity-100"
      >
        ×
      </button>
    </li>
  );
}

export default function SearchHeader() {
  return (
    <div className="border-b border-blue-100 bg-white">
      <Container className="pb-9 pt-14 lg:pt-[83px]">
        <h1 className="text-center text-3xl font-bold leading-9 text-sky-950">
          Properties
        </h1>

        <form
          role="search"
          className="mt-9 flex flex-wrap items-center gap-3 lg:flex-nowrap"
        >
          <label className="relative flex h-12 min-w-0 flex-1 basis-full items-center rounded-xl bg-slate-50 outline-1 -outline-offset-1 outline-blue-100 focus-within:outline-sky-800 lg:basis-auto">
            <span className="sr-only">Search properties</span>
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="pointer-events-none absolute left-[18px] size-5 text-slate-500"
            >
              <circle
                cx="9"
                cy="9"
                r="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M13.7 13.7 16.7 16.7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              className="h-full w-full rounded-xl bg-transparent pl-12 pr-4 text-sm text-sky-950 outline-none"
            />
          </label>

          <button
            type="button"
            className="h-8 shrink-0 rounded-md bg-white px-4 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-sky-800/5"
          >
            Advanced
          </button>
          <button
            type="submit"
            className="h-8 shrink-0 rounded-md bg-sky-800 px-4 text-xs font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            Search
          </button>
        </form>

        {/* `contents` lets the chips flow as siblings of the PARSED label, so the
            first row sits beside it and later rows wrap to the container edge. */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <h2 className="mr-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
            Parsed
          </h2>
          <ul role="list" className="contents">
            {PARSED.map((chip) => (
              <ParsedChip key={chip.label} {...chip} />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
