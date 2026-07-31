import Card from "./Card";
import Flag from "./Flag";

type Risk = "Low" | "Med" | "High";

type Asset = {
  name: string;
  detail: string;
  /** Stand-in for the asset thumbnail until real imagery is wired up. */
  gradient: string;
  /** ISO code for the flag PNG, e.g. "GB" for the UK. */
  flag: string;
  jurisdiction: string;
  assetClass: string;
  acquired: string;
  nav: string;
  /** "—" where the asset is still in diligence and has no return yet. */
  ytd: string;
  yield: string;
  occupancy: string;
  risk: Risk;
};

const RISK_CLASSES: Record<Risk, string> = {
  Low: "bg-green-400/10 text-green-600 outline-green-400/30",
  Med: "bg-amber-700/10 text-amber-700 outline-amber-700/30",
  High: "bg-red-100 text-orange-700 outline-orange-700/30",
};

const COLUMNS = [
  "Asset",
  "Jurisdiction",
  "Class",
  "Acquired",
  "NAV",
  "YTD return",
  "Yield",
  "Occupancy",
  "Risk",
];

const ASSETS: Asset[] = [
  {
    name: "Marina Sky · Tower B",
    detail: "Dubai Marina, UAE · 12,400 sqft office",
    gradient: "bg-linear-to-br from-sky-800 to-emerald-400",
    flag: "AE",
    jurisdiction: "UAE",
    assetClass: "Commercial",
    acquired: "Jun 2024",
    nav: "€11.2M",
    ytd: "+11.4%",
    yield: "6.2%",
    occupancy: "100%",
    risk: "Low",
  },
  {
    name: "Cascais Coastal Villa",
    detail: "Cascais, PT · 4 BR · waterfront",
    gradient: "bg-linear-to-br from-lime-400 to-emerald-400",
    flag: "PT",
    jurisdiction: "PT",
    assetClass: "Residential",
    acquired: "Mar 2026 (DD)",
    nav: "€2.35M",
    ytd: "—",
    yield: "5.2%",
    occupancy: "—",
    risk: "Low",
  },
  {
    name: "King's Cross Logistics",
    detail: "London, UK · 92,000 sqft last-mile",
    gradient: "bg-linear-to-br from-sky-950 to-sky-800",
    flag: "GB",
    jurisdiction: "UK",
    assetClass: "Logistics",
    acquired: "Sep 2024",
    nav: "€10.1M",
    ytd: "+8.7%",
    yield: "5.8%",
    occupancy: "100%",
    risk: "Low",
  },
  {
    name: "Lisbon Chiado Boutique Hotel",
    detail: "Lisbon, PT · 24 keys · branded",
    gradient: "bg-linear-to-br from-emerald-400 to-lime-400",
    flag: "PT",
    jurisdiction: "PT",
    assetClass: "Hospitality",
    acquired: "Apr 2024",
    nav: "€9.8M",
    ytd: "+15.2%",
    yield: "7.4%",
    occupancy: "92%",
    risk: "Med",
  },
  {
    name: "Paris 8e Maison",
    detail: "Paris, FR · 280 m² · long let",
    gradient: "bg-linear-to-br from-indigo-500 to-emerald-400",
    flag: "FR",
    jurisdiction: "FR",
    assetClass: "Residential",
    acquired: "Jan 2024",
    nav: "€9.5M",
    ytd: "+4.2%",
    yield: "3.8%",
    occupancy: "100%",
    risk: "Low",
  },
  {
    name: "JLT Office Floor 24",
    detail: "Dubai, UAE · grade A",
    gradient: "bg-linear-to-br from-yellow-600 to-lime-400",
    flag: "AE",
    jurisdiction: "UAE",
    assetClass: "Commercial",
    acquired: "Nov 2023",
    nav: "€6.4M",
    ytd: "+7.1%",
    yield: "5.6%",
    occupancy: "100%",
    risk: "Low",
  },
  {
    name: "Bandra-Kurla Warehouse",
    detail: "Mumbai, IN · 64,000 sqft",
    gradient: "bg-linear-to-br from-sky-800 to-indigo-500",
    flag: "IN",
    jurisdiction: "IN",
    assetClass: "Logistics",
    acquired: "Feb 2025",
    nav: "€7.4M",
    ytd: "+12.8%",
    yield: "8.2%",
    occupancy: "100%",
    risk: "Med",
  },
  {
    name: "Marbella Sea View Villa",
    detail: "Marbella, ES · 6 BR · short-let",
    gradient: "bg-linear-to-br from-orange-500 to-yellow-600",
    flag: "ES",
    jurisdiction: "ES",
    assetClass: "Hospitality",
    acquired: "May 2024",
    nav: "€5.4M",
    ytd: "+6.4%",
    yield: "6.9%",
    occupancy: "78%",
    risk: "Med",
  },
];

const cellClass = "px-3 py-4 text-xs text-slate-900";

export default function AssetsTable() {
  return (
    <Card title="All assets" meta="· 12 · sorted by NAV">
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-left">
          <thead>
            <tr>
              {COLUMNS.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="border-b border-blue-100 bg-slate-50 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 first:rounded-tl-md last:rounded-tr-md"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ASSETS.map((a) => (
              <tr key={a.name} className="border-b border-blue-100">
                <th scope="row" className="px-3 py-3 text-left font-normal">
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`size-9 shrink-0 rounded-md ${a.gradient}`}
                    />
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold text-sky-950">
                        {a.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">
                        {a.detail}
                      </span>
                    </span>
                  </span>
                </th>
                <td className={cellClass}>
                  <span className="flex items-center gap-1.5">
                    <Flag code={a.flag} />
                    {a.jurisdiction}
                  </span>
                </td>
                <td className={cellClass}>{a.assetClass}</td>
                <td className={cellClass}>{a.acquired}</td>
                <td className={`${cellClass} font-bold`}>{a.nav}</td>
                <td
                  className={
                    a.ytd === "—"
                      ? "px-3 py-4 text-xs text-slate-500"
                      : "px-3 py-4 text-xs font-semibold text-green-600"
                  }
                >
                  {a.ytd}
                </td>
                <td className={cellClass}>{a.yield}</td>
                <td className={cellClass}>{a.occupancy}</td>
                <td className="px-3 py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-[100px] px-2.5 py-1 text-xs font-medium tracking-tight outline-1 -outline-offset-1 ${RISK_CLASSES[a.risk]}`}
                  >
                    {a.risk === "Low" && (
                      <span
                        aria-hidden
                        className="size-1.5 rounded-[3px] bg-green-600"
                      />
                    )}
                    {a.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
