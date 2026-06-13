import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { streamMessage, FREE_MODELS } from '../services/api'

const STORAGE_KEY = 'micropass_chat_history'

function loadSavedMessages() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch {}
  return null
}

export function useChat() {
  const [messages, setMessages] = useState(() => loadSavedMessages() ?? [])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState('deepseek-v4-flash-free')
  const [showModelSelector, setShowModelSelector] = useState(false)

  const inputRef = useRef(input)
  const isLoadingRef = useRef(isLoading)
  const selectedModelRef = useRef(selectedModel)
  const messagesRef = useRef(messages)

  inputRef.current = input
  isLoadingRef.current = isLoading
  selectedModelRef.current = selectedModel
  messagesRef.current = messages

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: 1,
        role: 'assistant',
        content: 'Olá! 👋 Sou seu assistente Micropass. Como posso ajudar você hoje?\n\nPosso ajudar com:\n• Quebrar tarefas em micro-passos\n• Criar planos de foco\n• Sugerir técnicas para ADHD\n• Motivação e produtividade',
        timestamp: new Date().toISOString()
      }])
    }
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages])

  const handleSubmit = useCallback(async () => {
    const text = inputRef.current.trim()
    if (!text || isLoadingRef.current) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: '',
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, assistantMessage])

      await streamMessage(
        userMessage.content,
        selectedModelRef.current,
        messagesRef.current.slice(-10),
        (chunk) => {
          setMessages(prev => {
            const last = prev[prev.length - 1]
            if (last?.id === assistantMessage.id) {
              const updated = { ...last, content: last.content + chunk }
              return [...prev.slice(0, -1), updated]
            }
            return prev
          })
        }
      )
    } catch (error) {
      console.error('Erro:', error)
      setMessages(prev => [...prev, {
        id: Date.now() + 2,
        role: 'assistant',
        content: `❌ Erro: ${error.message}\n\nTente novamente ou selecione outro modelo.`,
        timestamp: new Date().toISOString(),
        isError: true
      }])
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setMessages([])
    setIsLoading(false)
  }, [])

  const currentModel = useMemo(() => FREE_MODELS[selectedModel], [selectedModel])

  return {
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
  }
}
