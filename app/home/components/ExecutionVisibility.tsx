import Image from "next/image";
import Container from "./Container";

// Measured off the Figma frame (1440 canvas):
//   heading top 62 · subtitle 128 · content block 222 · panel 567→1345 x, 222→795 y
//   step markers centred at y 300, 393, 487, 580, 673, 767 → 93px rhythm
const STEPS = [
  { title: "Interest Logged", body: "Buyer intent recorded and timestamped" },
  { title: "Offer Submitted", body: "Structured offer submitted via platform" },
  {
    title: "Verification Complete",
    body: "Identity, KYC, and sanctions screening in progress",
  },
  { title: "Legal Processing", body: "Awaiting verification clearance" },
  { title: "Conditional Approval", body: "Pending legal processing" },
  { title: "Completion / Closing", body: "Final registry and title transfer" },
];

export default function ExecutionVisibility() {
  return (
    <section className="bg-sky-950 pt-16 pb-20 lg:pt-[58px] lg:pb-[110px]">
      <Container>
        <h2 className="mx-auto max-w-[880px] text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[48.30px]">
          Execution Visibility Without Replacing Local Law
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-sm leading-7 text-white sm:text-base">
          Transaction orchestration, jurisdiction logic, and compliance gates
          surfaced
          <br className="hidden sm:inline" /> transparently — Zoiko improves
          execution visibility, not legal shortcuts.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1165px] items-start gap-10 lg:mt-[52px] lg:grid-cols-[minmax(0,340px)_minmax(0,778px)] lg:gap-x-[47px]">
          <div>
            <h3 className="text-sm font-medium uppercase leading-4 tracking-wide text-white">
              Transaction State Flow — Example
            </h3>

            <ol className="mt-11">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  className="relative flex gap-[15px] pb-[53px] last:pb-0"
                >
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute left-[15px] top-[42px] bottom-3 w-px -translate-x-1/2 bg-lime-400/40"
                      aria-hidden
                    />
                  )}
                  <span
                    className="grid size-[30px] shrink-0 place-items-center rounded-full text-[10px] leading-none text-lime-400/80 outline-1 -outline-offset-1 outline-lime-400/50"
                    aria-hidden
                  >
                    ○
                  </span>
                  <div className="-mt-1">
                    <h4 className="text-[15px] font-semibold leading-6 text-white">
                      {s.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-5 text-white/70">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-778/573 overflow-hidden rounded-xl">
            <Image
              src="/home/execution-panel.png"
              alt="Buyers being shown a property by an agent"
              fill
              sizes="(min-width: 1024px) 778px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
