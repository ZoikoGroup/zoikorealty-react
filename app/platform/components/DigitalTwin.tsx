import Image from "next/image";
import Container from "./Container";

const TILES = [
  { label: "Title", value: "Freehold" },
  { label: "Encumbrances", value: "0", note: "clear" },
  { label: "FOP eligible", value: "Yes", note: "EU/non-EU" },
  { label: "Confidence", value: "94%", note: "verified" },
];

export default function DigitalTwin() {
  return (
    // The export gave this section white text but no dark fill — Figma dropped
    // the base layer. The full-page render shows brand navy here, not black.
    <section className="relative overflow-hidden bg-sky-950">
      {/* The frame lightens toward the upper right in blue, not green at the
          bottom right as the export's emerald radial implied. */}
      <div
        className="absolute inset-0 bg-radial-[at_80%_20%] from-sky-800/40 to-transparent to-70%"
        aria-hidden
      />

      <Container className="relative py-16 lg:py-[96px]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,543px)_minmax(0,671px)] lg:gap-x-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-lime-400">
              Digital twin
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[41px] lg:leading-[48px]">
              Every property gets a verified identity.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/70">
              Five layers of intelligence per asset: legal (title, charges,
              restrictions), financial (yield, costs, scenarios), physical
              (condition, energy, twin model), market (comps, velocity,
              sensitivity), predictive (price path, liquidity, risk) — each with
              independent confidence scoring.
            </p>
            <a
              href="/intelligence"
              className="mt-9 inline-block rounded-md bg-linear-to-r from-emerald-400 to-lime-400 px-6 py-3 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              See a Property Intelligence Page →
            </a>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 outline-1 -outline-offset-1 outline-white/10">
            <div className="relative aspect-633/356 overflow-hidden rounded-xl bg-white">
              <Image
                src="/platform/digital-twin.png"
                alt="Property digital twin layers"
                fill
                sizes="(min-width: 1024px) 634px, 100vw"
                className="object-contain"
              />
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {TILES.map((t) => (
                <div
                  key={t.label}
                  className="rounded-[10px] bg-white/5 p-3 outline-1 -outline-offset-1 outline-white/10"
                >
                  <dt className="text-[10px] uppercase tracking-wide text-white/50">
                    {t.label}
                  </dt>
                  <dd className="mt-1.5 flex items-baseline gap-1.5">
                    <span className="text-base font-bold text-white">
                      {t.value}
                    </span>
                    {t.note && (
                      <span className="text-[10px] font-bold text-lime-400">
                        {t.note}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
