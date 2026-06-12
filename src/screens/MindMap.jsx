export default function MindMap() {
  return (
    <div className="flex flex-col h-full py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-on-surface">Mind Map</h2>
        <button className="h-10 px-4 bg-primary text-on-primary rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-150 active:scale-95">
          <span className="material-symbols-outlined text-lg">add</span>
          Add Node
        </button>
      </div>
      
      {/* Mind Map Canvas */}
      <div className="flex-1 glass-card rounded-xl p-6 min-h-[400px] relative overflow-hidden">
        {/* Central Node */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-on-primary rounded-2xl px-6 py-4 shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <p className="font-semibold text-center">TCC Project</p>
            <p className="text-xs text-on-primary opacity-80 text-center mt-1">⚡⚡⚡</p>
          </div>
        </div>
        
        {/* Sample child nodes */}
        <div className="absolute top-1/4 left-1/4">
          <div className="bg-green-500/20 border-2 border-green-500 text-on-surface rounded-xl px-4 py-3 shadow-md cursor-pointer hover:scale-105 transition-transform">
            <p className="text-sm font-semibold">Research</p>
            <p className="text-xs text-on-surface-variant">⚡⚡</p>
          </div>
        </div>
        
        <div className="absolute top-1/4 right-1/4">
          <div className="bg-yellow-500/20 border-2 border-yellow-500 text-on-surface rounded-xl px-4 py-3 shadow-md cursor-pointer hover:scale-105 transition-transform">
            <p className="text-sm font-semibold">Writing</p>
            <p className="text-xs text-on-surface-variant">⚡⚡⚡</p>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3">
          <div className="bg-red-500/20 border-2 border-red-500 text-on-surface rounded-xl px-4 py-3 shadow-md cursor-pointer hover:scale-105 transition-transform">
            <p className="text-sm font-semibold">Review</p>
            <p className="text-xs text-on-surface-variant">⚡</p>
          </div>
        </div>
      </div>
      
      {/* Bottom toolbar */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 h-12 bg-surface-container-high text-on-surface rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">auto_fix_high</span>
          Auto-Organize
        </button>
        <button className="flex-1 h-12 bg-secondary text-on-secondary rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">list</span>
          Generate Steps
        </button>
      </div>
    </div>
  )
}
