import Container from "./Container";

const BADGES = [
  "GDPR · DPA-compliant",
  "AML / KYC · S0 → S5",
  "SOC 2 Type II",
  "ISO 27001",
  "Jurisdiction-aware",
];

export default function TrustStrip() {
  return (
    <div className="border-y border-blue-100 bg-white">
      <Container>
        {/* The export spaces these at even 237px intervals across the full
            1425 canvas, so they justify apart rather than clustering left. */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Governed by
          </p>
          {BADGES.map((b) => (
            <div key={b} className="flex items-center gap-2.5">
              <span
                className="grid size-4 shrink-0 place-items-center rounded-lg bg-green-400 text-[10px] text-white"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-xs font-medium text-sky-950">{b}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
