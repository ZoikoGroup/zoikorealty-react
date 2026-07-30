import Image from "next/image";
import Container from "./Container";

const STATS = [
  { label: "Foreigner-Owner Permitted", value: "28 / 42" },
  { label: "Golden-Visa Paths", value: "11" },
  { label: "Avg legal complexity", value: "3.2", suffix: "/ 5" },
  { label: "Median transaction cost", value: "8.4%" },
];

export default function MarketsEngine() {
  return (
    // Frame shows a white base with a mint wash bottom-left and a pale
    // yellow-green one top-right — not the bluish slate-50 I had.
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-radial-[at_0%_100%] from-emerald-400/15 to-transparent to-50%"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-radial-[at_100%_0%] from-lime-400/10 to-transparent to-45%"
        aria-hidden
      />

      <Container className="relative py-16 lg:py-[100px]">
        {/* Columns are 659 / 581 with a 39px gutter on the frame — not 50/50,
            which was making the map narrower than designed. */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,659px)_minmax(0,581px)] lg:gap-x-10">
          <div className="relative aspect-659/461 overflow-hidden rounded-[20px] outline-1 -outline-offset-1 outline-blue-100">
            <Image
              src="/platform/markets-engine.png"
              alt="Global jurisdiction coverage map"
              fill
              sizes="(min-width: 1024px) 659px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Markets Engine
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-sky-950 sm:text-4xl lg:text-[41px] lg:leading-[48px]">
              Jurisdiction-aware intelligence for every market you touch.
            </h2>
            <p className="mt-6 max-w-[566px] text-base leading-7 text-slate-500">
              Each market view ships with ownership eligibility,
              legal-complexity score, tax and fee calculators, FX sensitivity,
              and governed rule-packs — so you always see what&apos;s actually
              possible for you in that country.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white p-4 outline-1 -outline-offset-1 outline-blue-100"
                >
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dt>
                  <dd className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-sky-950">
                      {s.value}
                    </span>
                    {s.suffix && (
                      <span className="text-xs font-medium text-slate-500">
                        {s.suffix}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="/markets"
              className="mt-8 inline-block rounded-md bg-sky-800 px-6 py-3 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-sky-900"
            >
              Explore Markets Engine →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
