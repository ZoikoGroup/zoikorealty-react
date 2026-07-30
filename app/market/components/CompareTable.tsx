import Container from "./Container";
import Flag from "./Flag";

const COLUMNS = [
  "Market",
  "Ownership",
  "Visa path",
  "All-in cost",
  "Gross yield",
  "12m Δ",
  "Complexity",
  "Confidence",
];

type Row = {
  flag: string;
  country: string;
  city?: string;
  ownership: string;
  ownershipTone: "green" | "amber";
  visa: string;
  cost: string;
  yield: string;
  delta: string;
  /** Fill of the 80px complexity track, as a percentage. */
  complexity: number;
  confidence: string;
};

// Rows 1–7 came from the code export; the USA row and the complexity fill for
// it were read off the full-page render, where the paste was truncated.
const ROWS: Row[] = [
  { flag: "PT", country: "Portugal", city: "Lisbon", ownership: "Permitted", ownershipTone: "green", visa: "Golden Visa (fund)", cost: "+9.7%", yield: "4.9%", delta: "+7.8%", complexity: 50, confidence: "96%" },
  { flag: "AE", country: "UAE", city: "Dubai", ownership: "Freehold zones", ownershipTone: "green", visa: "Golden Visa (AED 2M+)", cost: "+5.2%", yield: "6.2%", delta: "+12.1%", complexity: 45, confidence: "93%" },
  { flag: "GB", country: "United Kingdom", city: "London", ownership: "Permitted + surcharge", ownershipTone: "amber", visa: "Innovator Founder", cost: "+13.4%", yield: "3.4%", delta: "+2.2%", complexity: 70, confidence: "94%" },
  { flag: "FR", country: "France", city: "Paris", ownership: "Permitted", ownershipTone: "green", visa: "Talent Passport", cost: "+11.8%", yield: "3.1%", delta: "−1.4%", complexity: 70, confidence: "92%" },
  { flag: "ES", country: "Spain", city: "Madrid", ownership: "Permitted", ownershipTone: "green", visa: "Digital Nomad", cost: "+10.5%", yield: "4.6%", delta: "+5.3%", complexity: 60, confidence: "95%" },
  { flag: "SG", country: "Singapore", ownership: "Restricted · condo only", ownershipTone: "amber", visa: "Global Investor", cost: "+24.0% ABSD", yield: "2.9%", delta: "+3.9%", complexity: 80, confidence: "91%" },
  { flag: "JP", country: "Japan", city: "Tokyo", ownership: "Permitted", ownershipTone: "green", visa: "Business Manager", cost: "+8.8%", yield: "4.2%", delta: "+2.8%", complexity: 60, confidence: "90%" },
  { flag: "US", country: "USA", city: "Miami", ownership: "Permitted", ownershipTone: "green", visa: "EB-5 path", cost: "+6.4%", yield: "5.2%", delta: "+4.4%", complexity: 50, confidence: "92%" },
];

const TONE: Record<Row["ownershipTone"], { pill: string; dot: string }> = {
  green: {
    pill: "bg-green-400/10 text-green-600 outline-1 -outline-offset-1 outline-green-400/30",
    dot: "bg-green-600",
  },
  amber: {
    pill: "bg-amber-700/10 text-amber-700 outline-1 -outline-offset-1 outline-amber-700/30",
    dot: "bg-amber-700",
  },
};

export default function CompareTable() {
  return (
    <section className="bg-slate-50 py-14 lg:py-[53px]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Compare markets
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-8 text-sky-950 sm:text-3xl">
              Side-by-side · ownership, cost, yield, complexity
            </h2>
          </div>
          <button
            type="button"
            className="rounded-md bg-white px-3.5 py-2 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-slate-50"
          >
            + Add jurisdiction
          </button>
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl bg-white outline-1 -outline-offset-1 outline-blue-100">
          <table className="w-full min-w-[1100px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-50">
                {COLUMNS.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="border-b border-blue-100 px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-sky-800"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.country} className="border-b border-blue-100 last:border-0">
                  <td className="px-4 py-3.5">
                    <span className="flex items-center gap-3">
                      <Flag code={r.flag} />
                      <span className="text-xs">
                        <span className="font-bold text-sky-950">
                          {r.country}
                        </span>
                        {r.city && (
                          <span className="text-slate-900"> · {r.city}</span>
                        )}
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex items-center gap-2 rounded-[100px] px-3 py-1 text-xs font-medium tracking-tight ${TONE[r.ownershipTone].pill}`}
                    >
                      <span
                        className={`size-1.5 rounded-[3px] ${TONE[r.ownershipTone].dot}`}
                      />
                      {r.ownership}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-slate-900">{r.visa}</td>
                  <td className="px-4 py-3.5 text-xs text-slate-900">{r.cost}</td>
                  <td className="px-4 py-3.5 text-xs text-slate-900">{r.yield}</td>
                  <td
                    className={`px-4 py-3.5 text-xs font-semibold ${
                      r.delta.startsWith("−") ? "text-amber-700" : "text-green-600"
                    }`}
                  >
                    {r.delta}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="block h-1.5 w-20 overflow-hidden rounded-[3px] bg-blue-100">
                      <span
                        style={{ width: `${r.complexity}%` }}
                        className="block h-1.5 bg-linear-to-r from-green-400 via-lime-400 to-amber-700"
                      />
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-slate-900">
                    {r.confidence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
