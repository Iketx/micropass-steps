export default function ProgressChart() {
  return (
    <section className="glass-card p-4 rounded-lg overflow-hidden">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-lg font-semibold text-on-surface">Weekly Flow</h3>
          <p className="text-sm font-semibold text-on-surface-variant">Productivity over time</p>
        </div>
        <div className="text-right">
          <span className="text-primary font-bold">+18%</span>
        </div>
      </div>
      
      {/* SVG Chart */}
      <div className="relative h-32 w-full">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#c0c1ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c0c1ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,80 Q30,60 60,70 T120,40 T180,50 T240,20 T300,30 V100 H0 Z" fill="url(#chartGradient)" />
          <path d="M0,80 Q30,60 60,70 T120,40 T180,50 T240,20 T300,30" fill="none" stroke="#c0c1ff" strokeWidth="3" />
          <circle cx="60" cy="70" fill="#c0c1ff" r="3" />
          <circle cx="120" cy="40" fill="#c0c1ff" r="3" />
          <circle cx="180" cy="50" fill="#c0c1ff" r="3" />
          <circle cx="240" cy="20" fill="#5de6ff" r="4" />
        </svg>
      </div>
      
      <div className="flex justify-between mt-3 text-[10px] font-bold text-on-surface-variant opacity-50 px-1">
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
        <span>SUN</span>
      </div>
    </section>
  )
}
