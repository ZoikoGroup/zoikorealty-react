import Container from "./Container";

const CRUMBS = [
  { label: "Search", href: "/properties" },
  { label: "Portugal", href: "/market" },
  { label: "Cascais" },
  { label: "Seaside Villa" },
];

export default function PropertyHeader() {
  return (
    <div className="border-b border-blue-100 bg-white">
      <Container className="pb-10 pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2.5 text-xs">
            {CRUMBS.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2.5">
                {i > 0 && (
                  <span aria-hidden className="text-slate-400">
                    ›
                  </span>
                )}
                {c.href ? (
                  <a href={c.href} className="text-sky-800 hover:underline">
                    {c.label}
                  </a>
                ) : (
                  <span
                    className="text-slate-500"
                    aria-current={i === CRUMBS.length - 1 ? "page" : undefined}
                  >
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <ul className="mt-4 flex flex-wrap gap-2.5">
          <li className="flex items-center gap-2 rounded-[100px] bg-green-400/10 px-2.5 py-1 text-xs font-medium tracking-tight text-green-600 outline-1 -outline-offset-1 outline-green-400/30">
            <span aria-hidden className="size-1.5 rounded-[3px] bg-green-600" />
            Verified title
          </li>
          <li className="rounded-[100px] bg-lime-400/20 px-2.5 py-1 text-xs font-medium tracking-tight text-lime-600 outline-1 -outline-offset-1 outline-lime-400/30">
            FOP eligible
          </li>
          <li className="rounded-[100px] bg-white px-2.5 py-1 text-xs font-medium tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-blue-100">
            Listed 8 days ago
          </li>
          <li className="rounded-[100px] bg-white px-2.5 py-1 text-xs font-medium tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-blue-100">
            Ref · ZR-2401
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <h1 className="text-3xl font-bold text-sky-950">
              Seaside Villa · Cascais, Portugal
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              <span aria-hidden>📍</span> Av. Marginal 412, 2750-374 Cascais ·
              Lisbon Metropolitan Area · Atlantic frontline
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              className="rounded-md bg-white px-4 py-2 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-sky-800/5"
            >
              ↗ Share
            </button>
            <button
              type="button"
              className="rounded-md bg-white px-4 py-2 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-sky-800/5"
            >
              ⭐ Save
            </button>
            <button
              type="button"
              className="rounded-md bg-sky-800 px-16 py-2 text-xs font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              View
            </button>
          </div>
        </div>

        {/* Gallery: one hero frame beside a 2x2 grid, all placeholders until the
            asset imagery lands. */}
        <div className="mt-8 grid h-96 grid-cols-1 gap-2 overflow-hidden rounded-2xl sm:grid-cols-2">
          <div className="bg-neutral-400" />
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div className="bg-neutral-400" />
            <div className="bg-neutral-400" />
            <div className="bg-neutral-400" />
            <div className="grid place-items-center bg-neutral-400">
              <span className="text-xs font-semibold text-white">+12 more</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
