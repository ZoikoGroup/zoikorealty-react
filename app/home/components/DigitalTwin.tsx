import Image from "next/image";
import Container from "./Container";

const LAYERS = [
  {
    icon: "/home/layer-legal.png",
    title: "Legal Layer",
    body: "Ownership, title, encumbrance, foreign eligibility",
  },
  {
    icon: "/home/layer-financial.png",
    title: "Financial Layer",
    body: "Price history, operating costs, rental income, tax",
  },
  {
    icon: "/home/layer-physical.png",
    title: "Physical Layer",
    body: "Area, structure, condition, inspection, retrofit",
  },
  {
    icon: "/home/layer-market.png",
    title: "Market Layer",
    body: "Comps, demand trend, vacancy, absorption",
  },
  {
    icon: "/home/layer-predictive.png",
    title: "Predictive Layer",
    body: "Forecast valuation, yield band, AI confidence score",
  },
];

export default function DigitalTwin() {
  return (
    <section className="bg-white py-16 lg:py-[54px]">
      <Container>
        <h2 className="text-center text-3xl font-bold leading-tight text-sky-950 sm:text-4xl lg:text-5xl lg:leading-[48.30px]">
          Digital Twin Structured Property Intelligence
        </h2>
        <p className="mx-auto mt-5 max-w-[578px] text-center text-sm leading-7 text-slate-500 sm:text-base">
          Legal, financial, physical, market, and predictive intelligence
          layered onto every asset. Not listing data — structured property
          truth.
        </p>

        {/* items-stretch + h-full/justify-between on the list makes the left
            column span exactly the right panel's height, distributing the
            leftover space between the five rows instead of stacking fixed
            margins that overshoot it. */}
        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
          <ul className="flex flex-col gap-5 lg:h-full lg:justify-between lg:gap-2">
            {LAYERS.map((l) => (
              <li key={l.title} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-blue-100">
                  <Image
                    src={l.icon}
                    alt=""
                    width={18}
                    height={24}
                    className="object-contain"
                  />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-6 text-sky-800">
                    {l.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {l.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative aspect-847/452 overflow-hidden rounded-2xl bg-neutral-400 outline-1 -outline-offset-1 outline-blue-100">
            <Image
              src="/home/digital-twin.png"
              alt="Digital twin property intelligence panel"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
