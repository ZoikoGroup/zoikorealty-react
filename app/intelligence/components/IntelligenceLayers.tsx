import Container from "./Container";
import LegalLayer from "./LegalLayer";
import FinancialLayer from "./FinancialLayer";
import PhysicalLayer from "./PhysicalLayer";
import MarketLayer from "./MarketLayer";
import PredictiveLayer from "./PredictiveLayer";
import PriceRail from "./PriceRail";

export default function IntelligenceLayers() {
  return (
    <section className="bg-slate-50 py-6 lg:py-11">
      {/* Frame splits 892 / 365 with a 25px gutter inside 1280px. */}
      <Container className="grid items-start gap-6 xl:grid-cols-[minmax(0,2.44fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-5">
          <LegalLayer />
          <FinancialLayer />
          <PhysicalLayer />
          <MarketLayer />
          <PredictiveLayer />
        </div>
        <PriceRail />
      </Container>
    </section>
  );
}
