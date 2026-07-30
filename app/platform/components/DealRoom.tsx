import Container from "./Container";

const STEPS = [
  {
    n: "1",
    title: "Identity verified",
    body: "Parties passed S3 KYC, EDD cleared",
    when: "Mar 14",
    done: true,
  },
  {
    n: "2",
    title: "Offer accepted",
    body: "€2.35M, 10% deposit, 60-day close",
    when: "Mar 19",
    done: true,
  },
  {
    n: "3",
    title: "Due diligence & title",
    body: "8 of 12 docs received · 2 redlines open",
    when: "in progress",
    done: true,
  },
  {
    n: "4",
    title: "Escrow funded",
    body: "Treasury module ready · ~€235k expected",
    when: "Apr 02",
    done: false,
  },
  {
    n: "5",
    title: "Notary & completion",
    body: "Lisbon notary booked · E-sign queued",
    when: "May 18",
    done: false,
  },
];

const FEATURES = [
  "Timeline orchestrates offer → close, jurisdiction-tuned.",
  "Document vault with versioned, OCR-indexed, privileged flags.",
  "Compliance center runs AML, PEP, sanctions, beneficial ownership.",
  "Escrow & treasury ledger with reconciled audit trail.",
  "Immutable event log for regulators and parties alike.",
];

export default function DealRoom() {
  return (
    // MEASURED OFF THE FRAME, not the export (which supplied no base fill):
    // a desaturated teal at the left running to a soft green at the right,
    // with the export's lime radial adding the yellow-green top-right corner.
    // Sampled by eye — swap for the Inspect values when available.
    <section className="relative overflow-hidden bg-linear-to-r from-[#3E9C86] to-[#6FB673]">
      <div
        className="absolute inset-0 bg-radial-[at_90%_0%] from-lime-400/50 to-lime-400/0 to-50%"
        aria-hidden
      />

      <Container className="relative py-16 lg:py-[100px]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,639px)_minmax(0,581px)] lg:gap-x-14">
          <div className="rounded-2xl bg-white/10 p-5 outline-1 -outline-offset-1 outline-white/25">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold text-white">
                Deal · Cascais Villa · Ref ZR-2401
              </p>
              <span className="rounded-[100px] bg-white/20 px-2.5 py-1 text-xs font-medium tracking-tight text-white">
                Stage 3 · Due Diligence
              </span>
            </div>

            <ol className="mt-4 space-y-2">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="flex items-center gap-4 rounded-[10px] bg-white/15 p-4"
                >
                  <span
                    className={`grid size-6 shrink-0 place-items-center rounded-xl bg-white text-xs font-bold ${
                      s.done
                        ? "text-emerald-400 shadow-[0px_0px_0px_3px_rgba(255,255,255,0.25)]"
                        : "text-sky-950"
                    }`}
                    aria-hidden
                  >
                    {s.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white">{s.title}</p>
                    <p className="mt-1.5 text-xs text-white/70">{s.body}</p>
                  </div>
                  <span className="shrink-0 text-xs text-white/80">
                    {s.when}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white opacity-70">
              Governed Deal Room
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[41px] lg:leading-[48.40px]">
              Transactions that complete themselves — under audit.
            </h2>
            <p className="mt-6 text-base leading-6 text-white/90">
              One workspace for every counterparty: buyer, seller, lawyers,
              notary, lender, and platform. Jurisdiction rule-packs guide every
              step; nothing advances without compliance.
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-lg bg-white/20 text-[9px] text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-5 text-white">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
