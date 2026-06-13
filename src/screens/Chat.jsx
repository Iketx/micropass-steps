import { useRef, useEffect, useCallback } from 'react'
import { FREE_MODELS } from '../services/api'
import { useChat } from '../hooks/useChat'

export default function Chat() {
  const {
    messages,
    input,
    setInput,
    isLoading,
    selectedModel,
    setSelectedModel,
    showModelSelector,
    setShowModelSelector,
    handleSubmit,
    clearHistory,
    currentModel
  } = useChat()

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const formatTime = useCallback((timestamp) => {
    return new Date(timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    handleSubmit()
  }, [handleSubmit])

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      {/* Header do Chat */}
      <div className="flex items-center justify-between p-4 border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="material-icons text-primary">smart_toy</span>
          </div>
          <div>
            <h2 className="font-semibold text-on-surface">Micropass Assistant</h2>
            <button 
              onClick={() => setShowModelSelector(!showModelSelector)}
              className="text-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              {currentModel?.name || selectedModel} ▼
            </button>
          </div>
        </div>
        
        {/* Seletor de Modelo */}
        {showModelSelector && (
          <div className="absolute top-16 right-4 z-50 bg-surface-container border border-outline-variant rounded-xl p-2 shadow-lg">
            {Object.entries(FREE_MODELS).map(([id, model]) => (
              <button
                key={id}
                onClick={() => {
                  setSelectedModel(id)
                  setShowModelSelector(false)
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedModel === id 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:bg-surface-container-high text-on-surface'
                }`}
              >
                <div className="font-medium">{model.name}</div>
                <div className="text-xs text-on-surface-variant">{model.description}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-primary text-on-primary'
                  : message.isError
                    ? 'bg-error/20 text-error'
                    : 'bg-surface-container-high text-on-surface'
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
              <div className={`text-xs mt-1 ${
                message.role === 'user' ? 'text-on-primary/70' : 'text-on-surface-variant'
              }`}>
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        
        {/* Indicador de loading */}
        {isLoading && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start">
            <div className="bg-surface-container-high rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-on-surface-variant text-sm">Pensando...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={onSubmit} className="p-4 border-t border-outline-variant">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            disabled={isLoading}
            className="flex-1 bg-surface-container-high border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-primary text-on-primary rounded-xl px-4 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-icons">send</span>
          </button>
        </div>
        
        {/* Dicas rápidas */}
        <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
          {[
            'Quebrar tarefa em micro-passos',
            'Criar plano de foco',
            'Técnica Pomodoro',
            'Motivação para começar'
          ].map((tip) => (
            <button
              key={tip}
              type="button"
              onClick={() => setInput(tip)}
              className="flex-shrink-0 text-xs bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full hover:bg-surface-container-high transition-colors"
            >
              {tip}
            </button>
          ))}
        </div>
      </form>
    </div>
  )
}
