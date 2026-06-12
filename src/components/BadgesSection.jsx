const badges = [
  { icon: 'wb_sunny', color: 'text-primary', label: 'Early Bird', filled: true, unlocked: true },
  { icon: 'psychology', color: 'text-secondary', label: 'Deep Work', filled: true, unlocked: true },
  { icon: 'all_inclusive', color: 'text-orange-400', label: 'Consistency', filled: true, unlocked: true },
  { icon: 'lock', color: 'text-on-surface-variant', label: 'Overachiever', filled: false, unlocked: false },
]

export default function BadgesSection() {
  return (
    <section className="py-4 mb-4">
      <h3 className="text-lg font-semibold text-on-surface mb-3">Recent Badges</h3>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 flex flex-col items-center gap-2 w-20 ${
              !badge.unlocked ? 'opacity-30 grayscale' : ''
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center relative border border-outline-variant">
              <span 
                className={`material-symbols-outlined ${badge.color} text-3xl`}
                style={badge.filled ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {badge.icon}
              </span>
              {badge.unlocked && (
                <div className="absolute -bottom-1 -right-1 bg-green-400 w-5 h-5 rounded-full flex items-center justify-center border-2 border-surface">
                  <span className="material-symbols-outlined text-[10px] text-surface font-bold">check</span>
                </div>
              )}
            </div>
            <span className="text-[10px] text-center font-bold text-on-surface-variant">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
