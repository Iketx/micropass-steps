export default function StatsCard({ icon, iconColor, label, value, description, filled = false }) {
  return (
    <div className="glass-card p-4 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className={`material-symbols-outlined ${iconColor}`} style={filled ? { fontVariationSettings: "'FILL' 1" } : {}}>
          {icon}
        </span>
        <span className="text-[10px] uppercase font-bold text-on-surface-variant opacity-50 tracking-widest">
          {label}
        </span>
      </div>
      <div className="mt-1">
        <p className="text-2xl font-semibold text-on-surface">{value}</p>
        <p className="text-sm font-semibold text-on-surface-variant">{description}</p>
      </div>
    </div>
  )
}
