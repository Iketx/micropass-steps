import { useState, useEffect, useCallback } from 'react'

export default function PomodoroTimer() {
  const [seconds, setSeconds] = useState(1500) // 25 minutes
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  
  const updateDisplay = useCallback(() => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }, [seconds])
  
  const toggleTimer = useCallback(() => {
    if (isRunning) {
      clearInterval(intervalId)
      setIsRunning(false)
      setIntervalId(null)
    } else {
      setIsRunning(true)
      const id = setInterval(() => {
        setSeconds(prev => {
          if (prev <= 0) {
            clearInterval(id)
            setIsRunning(false)
            setIntervalId(null)
            alert('Session Complete! Take a break.')
            return 0
          }
          return prev - 1
        })
      }, 1000)
      setIntervalId(id)
    }
  }, [isRunning, intervalId])
  
  const resetTimer = useCallback(() => {
    clearInterval(intervalId)
    setIsRunning(false)
    setIntervalId(null)
    setSeconds(1500)
  }, [intervalId])
  
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [intervalId])
  
  return (
    <section className="bg-surface-container rounded-xl p-6 border-l-4 border-secondary active-timer-glow relative overflow-hidden">
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-[0.2em] mb-2">
            Current Session
          </p>
          <h3 className="text-6xl font-bold text-on-surface tracking-tighter">
            {updateDisplay()}
          </h3>
        </div>
        
        <div className="flex gap-4 w-full max-w-[240px]">
          <button
            className="flex-1 h-12 bg-primary text-on-primary rounded-xl text-lg font-semibold flex items-center justify-center transition-all duration-150 active:scale-95 shadow-lg"
            onClick={toggleTimer}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            className="w-12 h-12 bg-surface-container-highest text-on-surface rounded-xl flex items-center justify-center transition-all duration-150 active:scale-90"
            onClick={resetTimer}
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary opacity-5 blur-[60px] rounded-full" />
    </section>
  )
}
