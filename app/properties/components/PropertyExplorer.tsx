import Container from "./Container";
import FilterSidebar from "./FilterSidebar";
import ResultsList from "./ResultsList";
import QueryTrace from "./QueryTrace";

export default function PropertyExplorer() {
  return (
    <section className="bg-slate-50 py-8 lg:py-7">
      <Container>
        {/* Frame splits 288 / 596 / 340 — the trace column is trimmed from the
            design's 384 so the result column keeps its full 596 inside the
            1280px content width. At 2xl those are pinned exactly; below that
            the side columns give up 32/20px each so the result cards keep as
            much room as possible, and below xl the trace panel drops under
            both columns rather than squeezing them further. */}
        <div className="grid items-start gap-6 lg:grid-cols-[256px_minmax(0,1fr)] xl:grid-cols-[256px_minmax(0,1fr)_minmax(0,320px)] xl:gap-7 2xl:grid-cols-[288px_596px_340px] 2xl:justify-center">
          <FilterSidebar />
          <ResultsList />
          <div className="lg:col-span-2 xl:col-span-1">
            <QueryTrace />
          </div>
        </div>
      </Container>
    </section>
  );
}
