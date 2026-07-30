import Container from "./Container";
import MapCard from "./MapCard";
import RulePackCards from "./RulePackCards";
import CountryPanel from "./CountryPanel";

export default function MarketExplorer() {
  return (
    <section className="bg-slate-50 py-13 lg:py-[52px]">
      <Container>
        {/* Frame splits 832 / 384 with a 28px gutter (map card ends at x 904.5,
            panel starts at 932.5). Widening either starves the left column and
            forces the rule-pack card copy to wrap. */}
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,832px)_minmax(0,384px)] xl:gap-x-7">
          <div className="flex flex-col gap-6">
            <MapCard />
            <RulePackCards />
          </div>
          <CountryPanel />
        </div>
      </Container>
    </section>
  );
}
