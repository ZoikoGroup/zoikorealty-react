import Image from "next/image";
import Container from "./Container";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/home/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <Container className="relative py-16 lg:py-[62px]">
        <h2 className="mx-auto max-w-[760px] text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[52px]">
          Start Operating Real Estate with Genuine Intelligence
        </h2>
        <p className="mx-auto mt-5 max-w-[660px] text-center text-sm leading-7 text-white/70 sm:text-[15px]">
          Market intelligence, property discovery, transaction orchestration,
          portfolio control, and compliance governance — in one platform built
          for global execution.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <a
            href="/market-intelligence"
            className="rounded-md bg-linear-to-r from-emerald-400 to-lime-400 px-10 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start with Market Intelligence
          </a>
          <a
            href="/platform"
            className="rounded-md px-10 py-3 text-sm text-white outline-1 -outline-offset-1 outline-white/80 transition-colors hover:bg-white/10"
          >
            Explore the Platform
          </a>
        </div>
      </Container>
    </section>
  );
}
