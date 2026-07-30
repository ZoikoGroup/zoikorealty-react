import Container from "./Container";
import IntentPanel from "./IntentPanel";

const STATS = [
  { value: "42", label: "Jurisdictions" },
  { value: "14,218", label: "Properties indexed" },
  { value: "$3.1B", label: "AUM under PAMS" },
  { value: "91%", label: "Median confidence" },
];

export default function Hero() {
  return (
    // The export's literal stack (black radial fading to transparent over a
    // slate-50 root) blew out the corners to near-white. The frame shows a
    // solid navy base with a soft blue wash upper-left instead.
    <section className="relative overflow-hidden bg-sky-950">
      <div
        className="absolute inset-0 bg-radial-[at_30%_20%] from-sky-800/40 to-transparent to-75%"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-radial-[at_15%_0%] from-emerald-400/10 to-transparent to-50%"
        aria-hidden
      />

      <Container className="relative py-16 lg:py-[82px]">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,655px)_minmax(0,569px)] lg:gap-x-14">
          <div>
            {/* Measured off the frame: the headline renders ~41px/58, not the
                48px/65.28 the export annotates — the text layer is scaled. */}
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[41px] lg:leading-[58px]">
              Global real estate
              <br />
              <span className="text-lime-400">intelligently governed.</span>
            </h1>

            <p className="mt-8 max-w-[560px] text-base leading-7 text-white/70 lg:text-lg">
              Zoiko is the global infrastructure for real estate intelligence,
              execution and trust. Search, evaluate, transact, and manage
              cross-border assets through a jurisdiction-aware, AI-augmented
              platform with built-in compliance and explainable scoring.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/search"
                className="rounded-md bg-linear-to-r from-emerald-400 to-lime-400 px-6 py-3 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
              >
                Start a property search →
              </a>
              <a
                href="/markets"
                className="rounded-md bg-white/5 px-6 py-3 text-sm font-semibold tracking-tight text-white outline-1 -outline-offset-1 outline-white/20 transition-colors hover:bg-white/10"
              >
                Explore markets
              </a>
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-xl font-bold text-white">
                      {s.value}
                    </span>
                    <span className="mt-2 block text-xs uppercase tracking-wide text-white/50">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <IntentPanel />
        </div>
      </Container>
    </section>
  );
}
