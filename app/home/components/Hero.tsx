import Image from "next/image";
import Container from "./Container";

/**
 * Drop the Figma export at public/home/hero-bg.png and this lights up.
 * Until then the sky-950 base shows through the scrim.
 */
const HERO_BG = "/home/hero-bg.png";

const SUGGESTIONS = [
  "Cross-Border Residential",
  "FDI-Eligible Markets",
  "Low-Risk Income Assets",
  "Developer Land Opportunities",
  "Institutional Yield Screening",
];

type Status = {
  icon: string;
  label: string;
  value: string;
  dot?: "lime" | "emerald";
};

const STATUSES: Status[] = [
  {
    icon: "/home/icon-id.png",
    label: "ZoikoID Status",
    value: "Anonymous — Create Account",
    dot: "lime",
  },
  {
    icon: "/home/icon-globe.png",
    label: "Jurisdiction Engine",
    value: "Active — 47 Markets",
    dot: "emerald",
  },
  {
    icon: "/home/icon-shield.png",
    label: "ZoikoAssure Compliance",
    value: "Operational",
    dot: "emerald",
  },
  {
    icon: "/home/icon-clipboard.png",
    label: "Data Provenance",
    value: "Registry-linked · Partner-verified · AI-modeled",
  },
  {
    icon: "/home/icon-unlock.png",
    label: "Access Status",
    value: "S0 · Anonymous",
    dot: "lime",
  },
];

export default function Hero() {
  return (
    <section>
      <div className="relative overflow-hidden bg-sky-950">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Scrim over the hero photo. The Figma export specified black/70,
            which crushed the image — dialled back to 45%. Raise it if the
            headline ever loses contrast against a lighter photo. */}
        <div className="absolute inset-0 bg-black/45" aria-hidden />

        <Container className="relative py-16 sm:py-20 lg:py-[70px]">
          <h1 className="mx-auto max-w-[1236px] text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[59px]">
            Operate Real Estate with{" "}
            <span className="text-lime-400">Intelligence, Trust,</span> and
            <br className="hidden sm:inline" /> Jurisdiction Aware Execution
          </h1>

          <p className="mx-auto mt-6 max-w-[790px] text-center text-sm leading-7 text-white/75 sm:text-base">
            AI-powered discovery, property intelligence, transaction
            orchestration, compliance control, and portfolio visibility — in one
            governed infrastructure built for global markets.
          </p>

          <form
            className="mx-auto mt-8 flex w-full max-w-[675px] flex-col gap-2 rounded-lg bg-white p-1.5 outline-1 -outline-offset-1 outline-lime-400/30 sm:flex-row sm:items-center"
            // Submits to the property search page. There is no /search route —
            // that action 404'd.
            action="/properties"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search properties
            </label>
            <input
              id="hero-search"
              name="q"
              type="search"
              placeholder="Search properties, analyze market or yield intelligence"
              className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-sm text-sky-950 outline-none placeholder:text-zinc-400 sm:text-base"
            />
            <button
              type="submit"
              className="shrink-0 rounded-md bg-linear-to-r from-emerald-400 to-lime-400 px-6 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:w-36"
            >
              Run Analysis
            </button>
          </form>

          <ul className="mx-auto mt-8 flex max-w-[720px] flex-wrap justify-center gap-2.5">
            {SUGGESTIONS.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  className="rounded-[100px] px-4 py-2 text-xs leading-4 tracking-tight text-white outline-1 -outline-offset-1 outline-white transition-colors hover:bg-white/10"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Trust / status strip */}
      <div className="bg-sky-800">
        <Container>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {STATUSES.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-start gap-4 py-5 lg:py-6 ${
                  i < STATUSES.length - 1
                    ? "xl:border-r xl:border-lime-400/10 xl:pr-6"
                    : ""
                } ${i > 0 ? "xl:pl-6" : ""}`}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-white/30">
                  <Image src={s.icon} alt="" width={16} height={16} />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs uppercase leading-4 tracking-wide text-white/90">
                    {s.label}
                  </dt>
                  <dd className="mt-1.5 flex items-start gap-2 text-xs font-medium leading-5 text-white">
                    {s.dot && (
                      <span
                        className={`mt-1.5 size-1.5 shrink-0 rounded-[3px] ${
                          s.dot === "lime" ? "bg-lime-400" : "bg-emerald-400"
                        }`}
                        aria-hidden
                      />
                    )}
                    <span>{s.value}</span>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
