import Container from "./Container";

const TABS = [
  { icon: "⚖", label: "Legal", score: "94%", href: "#legal" },
  { icon: "💰", label: "Financial", score: "91%", href: "#financial" },
  { icon: "📐", label: "Physical", score: "88%", href: "#physical" },
  { icon: "📊", label: "Market", score: "93%", href: "#market" },
  // Amber, not lime: sub-90% confidence reads as a caution in the frame.
  { icon: "🔮", label: "Predictive", score: "76%", moderate: true, href: "#predictive" },
  { icon: "🗂", label: "Provenance & Audit", href: "#provenance" },
];

export default function LayerTabs() {
  return (
    <div className="bg-sky-950">
      <Container>
        <nav
          aria-label="Intelligence layers"
          className="-mx-1 flex gap-1 overflow-x-auto py-2.5"
        >
          {TABS.map((t, i) => (
            <a
              key={t.label}
              href={t.href}
              className={
                i === 0
                  ? "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white"
                  : "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              }
            >
              <span aria-hidden>{t.icon}</span>
              {t.label}
              {t.score && (
                <span
                  className={
                    t.moderate
                      ? "rounded-sm bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-400"
                      : "rounded-sm bg-lime-400/20 px-1.5 py-0.5 text-[10px] font-semibold text-lime-400"
                  }
                >
                  {t.score}
                </span>
              )}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
