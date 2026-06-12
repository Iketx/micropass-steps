export default function Settings() {
  return (
    <div className="flex flex-col gap-6 py-4">
      <h2 className="text-2xl font-bold text-on-surface">Settings</h2>
      
      {/* Profile section */}
      <section className="glass-card rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-primary">
            <span className="material-symbols-outlined text-primary text-3xl">person</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-on-surface">Henrique</h3>
            <p className="text-sm text-on-surface-variant">henrique.dtx@gmail.com</p>
          </div>
        </div>
      </section>
      
      {/* Settings options */}
      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Preferences</h3>
        
        <button className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">timer</span>
            <span className="text-on-surface">Pomodoro Settings</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </button>
        
        <button className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">notifications</span>
            <span className="text-on-surface">Notifications</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </button>
        
        <button className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">palette</span>
            <span className="text-on-surface">Appearance</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </button>
      </section>
      
      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Integrations</h3>
        
        <button className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">calendar_today</span>
            <span className="text-on-surface">Google Calendar</span>
          </div>
          <span className="text-xs text-green-400 font-semibold">Connected</span>
        </button>
        
        <button className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">cloud_upload</span>
            <span className="text-on-surface">Cloud Sync</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </button>
      </section>
      
      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">About</h3>
        
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-on-surface">Version</span>
            <span className="text-on-surface-variant">0.1.0</span>
          </div>
        </div>
        
        <button className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">help</span>
            <span className="text-on-surface">Help & Support</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </button>
      </section>
    </div>
  )
}
