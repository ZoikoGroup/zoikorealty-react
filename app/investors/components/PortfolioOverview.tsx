import Container from "./Container";
import GeographicExposure from "./GeographicExposure";
import Composition from "./Composition";
import TotalReturnChart from "./TotalReturnChart";
import PerformanceSummary from "./PerformanceSummary";
import AssetsTable from "./AssetsTable";
import CashflowCard from "./CashflowCard";
import AlertsCard from "./AlertsCard";

/** Frame splits each row 778 / 486 with a 16px gutter inside 1280px. */
const ROW = "grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]";

export default function PortfolioOverview() {
  return (
    <section className="bg-slate-50 py-6 lg:py-11">
      <Container className="flex flex-col gap-4">
        <div className={ROW}>
          <GeographicExposure />
          <Composition />
        </div>

        <div className={ROW}>
          <TotalReturnChart />
          <PerformanceSummary />
        </div>

        <AssetsTable />

        <div className={ROW}>
          <CashflowCard />
          <AlertsCard />
        </div>
      </Container>
    </section>
  );
}
