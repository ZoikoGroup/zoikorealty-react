import Container from "./Container";

type TrustState = {
  code: string;
  title: string;
  subtitle: string;
  unlocks: [string, string];
};

const STATES: TrustState[] = [
  {
    code: "S0",
    title: "Anonymous",
    subtitle: "Public browsing only",
    unlocks: ["Heatmaps", "Market summaries"],
  },
  {
    code: "S1",
    title: "Email verified",
    subtitle: "Saved searches enabled",
    unlocks: ["Saved searches (5)", "Alerts opt-in"],
  },
  {
    code: "S2",
    title: "Identity verified",
    subtitle: "Government ID + selfie",
    unlocks: ["Full PIP access", "Confidence visible"],
  },
  {
    code: "S3",
    title: "KYC complete",
    subtitle: "Address + EDD baseline",
    unlocks: ["Make offers", "Open Deal Rooms"],
  },
  {
    code: "S4",
    title: "Source-of-funds",
    subtitle: "Documented + AML signed",
    unlocks: ["PAMS access", "Treasury wallet"],
  },
  {
    code: "S5",
    title: "Institutional",
    subtitle: "Entity + UBOs + counsel",
    unlocks: ["Multi-signer escrow", "API + audit exports"],
  },
];

export default function TrustLadder() {
  return (
    <div className="border-b border-blue-100 bg-slate-50">
      <Container className="py-12">
        <ol className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 xl:grid-cols-6">
          {/* Rail sits behind the nodes, inset by half a column so it starts and
              ends at the first and last circle rather than the frame edge. One
              span per gap: the colour ramps grey → teal → lime across the first
              three, then holds navy — a single multi-stop gradient would need
              hard-coded hexes instead of the brand tokens. */}
          <span
            aria-hidden
            className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-1 -translate-y-1/2 overflow-hidden rounded-xs xl:flex"
          >
            <span className="flex-1 bg-linear-to-r from-zinc-400 to-emerald-400" />
            <span className="flex-1 bg-linear-to-r from-emerald-400 to-lime-400" />
            <span className="flex-1 bg-linear-to-r from-lime-400 to-sky-950" />
            <span className="flex-2 bg-sky-950" />
          </span>
          {STATES.map((s) => (
            <li
              key={s.code}
              className="relative flex flex-col items-center text-center"
            >
              <span className="grid size-14 place-items-center rounded-full bg-white text-base font-bold text-sky-800 outline-4 -outline-offset-4 outline-sky-800">
                {s.code}
              </span>
              <h3 className="mt-4 text-xs font-bold text-sky-950">{s.title}</h3>
              <p className="mt-1 text-xs leading-4 text-slate-500">
                {s.subtitle}
              </p>
              <ul className="mt-2 space-y-1">
                {s.unlocks.map((u) => (
                  <li key={u} className="text-xs text-neutral-700">
                    <span aria-hidden className="text-slate-400">
                      ·{" "}
                    </span>
                    {u}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-xs text-slate-500">
          <span className="font-bold text-sky-950">
            Restricted overlay · SX
          </span>{" "}
          Sanctions, PEP, adverse media, or jurisdiction-restricted scenarios
          trigger a separate{" "}
          <span className="rounded-md bg-red-700/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-red-700">
            SX
          </span>{" "}
          overlay state — independent of S0–S5 — requiring manual compliance
          review.
        </p>
      </Container>
    </div>
  );
}
