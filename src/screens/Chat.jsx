export default function Chat() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-4 py-4">
        <h2 className="text-2xl font-bold text-on-surface">Chat Brainstorm</h2>
        <p className="text-on-surface-variant">
          Discuss your project with the AI assistant to generate a mind map.
        </p>
        
        {/* Chat messages area */}
        <div className="flex-1 glass-card rounded-xl p-4 min-h-[300px]">
          <div className="flex flex-col gap-3">
            {/* AI message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-sm">psychology</span>
              </div>
              <div className="bg-surface-container-high rounded-xl p-3 max-w-[80%]">
                <p className="text-sm text-on-surface">
                  Hi! I'm your AI assistant. Tell me about your project and I'll help you break it down into manageable steps.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Input area */}
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Describe your project..."
            className="flex-1 h-12 bg-surface-container-high rounded-xl px-4 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-12 h-12 bg-primary text-on-primary rounded-xl flex items-center justify-center transition-all duration-150 active:scale-95">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}
