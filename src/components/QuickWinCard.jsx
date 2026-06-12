export default function QuickWinCard() {
  return (
    <section className="glass-card p-4 rounded-lg flex items-center gap-4 border-l-4 border-orange-400">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-orange-400">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </div>
      <div className="flex-1">
        <p className="text-[10px] uppercase font-bold text-orange-400 opacity-80 tracking-widest">
          Quick Win
        </p>
        <h4 className="text-lg font-semibold text-on-surface">
          Drink a glass of water
        </h4>
        <p className="text-sm text-on-surface-variant">
          Hydration improves cognitive function.
        </p>
      </div>
      <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </section>
  )
}
