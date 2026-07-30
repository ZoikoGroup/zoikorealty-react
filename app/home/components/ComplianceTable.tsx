import Container from "./Container";
import SectionHeading from "./SectionHeading";

type Status = "Eligible" | "Conditional" | "Restricted";

// Exact values from Figma Inspect: fill is the base colour at 15% opacity.
const STATUS_CLASSES: Record<Status, string> = {
  Eligible: "bg-status-green/15 text-status-green-fg",
  Conditional: "bg-lime-400/15 text-lime-400",
  Restricted: "bg-status-red/15 text-status-red-fg",
};

const COLUMNS = [
  "Jurisdiction",
  "Foreign Ownership",
  "Transaction Tax",
  "AML/KYC",
  "Status",
];

const ROWS: [string, string, string, string, Status][] = [
  ["United States", "Open — some CFIUS", "State-variable", "Moderate", "Eligible"],
  ["United Kingdom", "Open — SDLT applies", "SDLT 2–12%", "Moderate", "Eligible"],
  ["UAE", "Designated zones", "4% DLD fee", "Moderate", "Conditional"],
  ["Nigeria", "Conditional — state rules", "2–5% variable", "High", "Conditional"],
  ["Singapore", "ABSD 60% foreigners", "ABSD — high", "High", "Restricted"],
  ["Australia", "FIRB approval req'd", "FIRB fee + state tax", "Moderate", "Conditional"],
];

const cell = "px-6 py-4 text-xs font-normal leading-5 text-white/75";

export default function ComplianceTable() {
  return (
    <section className="bg-sky-950 py-16 lg:py-[58px]">
      <Container>
        <SectionHeading
          title="Compliance-Native, Not Compliance-Decorated"
          subtitle={
            <>
              Jurisdiction eligibility, live compliance checks, and audit ledger
              built into the
              <br className="hidden sm:inline" /> operating layer — not added as
              footnotes.
            </>
          }
          tone="onDark"
          subtitleWidth="max-w-[620px]"
        />

        {/* Table body sits on #FFFFFF at 4% over the navy; the header bar is
            brand lime stepped 82% → 68%. Both per Figma Inspect. */}
        <div className="mx-auto mt-10 max-w-[976px] overflow-x-auto rounded-xl bg-white/4 outline-1 -outline-offset-1 outline-white/10">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-linear-to-r from-lime-400/82 to-lime-400/68">
                {COLUMNS.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="px-6 py-3.5 text-sm font-medium uppercase leading-4 tracking-wide text-white"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([jur, own, tax, aml, status]) => (
                <tr
                  key={jur}
                  className="border-b border-white/10 last:border-0"
                >
                  <td className={cell}>{jur}</td>
                  <td className={cell}>{own}</td>
                  <td className={cell}>{tax}</td>
                  <td className={cell}>{aml}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-[100px] px-2.5 py-1 text-[10px] font-semibold leading-4 ${STATUS_CLASSES[status]}`}
                    >
                      {status}
                    </span>
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
