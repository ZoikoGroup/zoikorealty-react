export type Doc = {
  title: string;
  detail: string;
  /** Cleared docs show a green tick; outstanding ones show an action button. */
  cleared?: boolean;
  action?: string;
};

export default function DocCard({ title, detail, cleared, action }: Doc) {
  return (
    <div
      className={
        cleared
          ? "flex items-center gap-4 rounded-xl bg-green-400/5 p-5 outline-2 -outline-offset-2 outline-green-400/30"
          : "flex items-center gap-4 rounded-xl bg-white p-5 outline-2 -outline-offset-2 outline-blue-100"
      }
    >
      <span
        aria-hidden
        className={
          cleared
            ? "grid size-11 shrink-0 place-items-center rounded-[10px] bg-green-400 text-base text-white"
            : "grid size-11 shrink-0 place-items-center rounded-[10px] bg-blue-100 text-base text-slate-500"
        }
      >
        {cleared ? "✓" : "+"}
      </span>

      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-bold text-sky-950">{title}</h4>
        <p className="mt-1 text-xs text-slate-500">{detail}</p>
      </div>

      {cleared ? (
        <span className="shrink-0 rounded-[100px] bg-green-400/10 px-3 py-1 text-xs font-medium tracking-tight text-slate-500 outline-1 -outline-offset-1 outline-green-400/30">
          Cleared
        </span>
      ) : (
        <button
          type="button"
          className="shrink-0 rounded-md bg-white px-3.5 py-1.5 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-sky-800/5"
        >
          {action}
        </button>
      )}
    </div>
  );
}
