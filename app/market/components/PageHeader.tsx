import Container from "./Container";

export default function PageHeader() {
  return (
    <div className="border-b border-blue-100 bg-white">
      <Container className="py-8 lg:py-[23px] lg:pb-10">
        <h1 className="text-center text-3xl font-bold leading-10 text-sky-950 sm:text-4xl">
          Markets
        </h1>
        <p className="mx-auto mt-5 max-w-[1144px] text-center text-base leading-7 text-slate-500">
          Country-level intelligence with ownership eligibility,
          legal-complexity scoring, tax and fee
          <br className="hidden lg:inline" /> calculators, FX sensitivity, and
          governed rule-packs. Every insight is attached to a source,
          confidence, and an &quot;as-of&quot; date.
        </p>
      </Container>
    </div>
  );
}
