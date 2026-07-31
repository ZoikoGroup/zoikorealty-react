import Container from "./Container";

export default function PageHeader() {
  return (
    <div className="border-b border-blue-100 bg-white">
      <Container className="py-12">
        <h1 className="text-center text-3xl font-bold text-slate-900">
          ZoikoID — Identity, KYC &amp; Trust States
        </h1>
        <p className="mx-auto mt-6 max-w-[1266px] text-center text-base leading-7 text-slate-500">
          A trust-progressive identity engine. Each verified state (S0 → S5)
          unlocks new capabilities — from anonymous browsing to institutional
          execution. Documents are jurisdiction-aware and EDD-aware. You&apos;re
          never asked for more than you need.
        </p>
      </Container>
    </div>
  );
}
