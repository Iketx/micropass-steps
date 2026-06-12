import { useState } from 'react'

const initialTasks = [
  { id: 1, title: 'Define research methodology', energy: 2, time: '15 min', completed: false, difficulty: 'medium' },
  { id: 2, title: 'Find 5 relevant papers', energy: 2, time: '30 min', completed: false, difficulty: 'medium' },
  { id: 3, title: 'Write introduction outline', energy: 3, time: '25 min', completed: false, difficulty: 'hard' },
  { id: 4, title: 'Create bibliography', energy: 1, time: '10 min', completed: true, difficulty: 'easy' },
  { id: 5, title: 'Review advisor feedback', energy: 1, time: '5 min', completed: false, difficulty: 'easy' },
]

const filters = ['All', '⚡ Quick Wins', '⚡⚡ Medium', '⚡⚡⚡ Deep Work']

export default function Checklist() {
  const [tasks, setTasks] = useState(initialTasks)
  const [activeFilter, setActiveFilter] = useState('All')
  
  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }
  
  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'All') return true
    if (activeFilter === '⚡ Quick Wins') return task.energy === 1
    if (activeFilter === '⚡⚡ Medium') return task.energy === 2
    if (activeFilter === '⚡⚡⚡ Deep Work') return task.energy === 3
    return true
  })
  
  const completedCount = tasks.filter(t => t.completed).length
  const progress = Math.round((completedCount / tasks.length) * 100)
  
  const difficultyColors = {
    easy: 'border-green-500',
    medium: 'border-yellow-500',
    hard: 'border-red-500'
  }
  
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-on-surface">Micro Steps</h2>
        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-orange-400" style={{ fontVariationSettings: "'FILL' 1" }}>
            local_fire_department
          </span>
          <span className="font-semibold">5 days streak</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-on-surface-variant">Progress</span>
          <span className="text-primary font-semibold">{progress}%</span>
        </div>
        <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex-shrink-0 h-10 px-4 rounded-xl text-sm font-semibold transition-all duration-150 ${
              activeFilter === filter
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Tasks list */}
      <div className="flex flex-col gap-2">
        {filteredTasks.map(task => (
          <div 
            key={task.id}
            className={`glass-card rounded-xl p-4 flex items-center gap-3 border-l-4 ${difficultyColors[task.difficulty]} ${
              task.completed ? 'opacity-60' : ''
            }`}
          >
            <button 
              onClick={() => toggleTask(task.id)}
              className="w-6 h-6 rounded-full border-2 border-on-surface-variant flex items-center justify-center transition-all duration-200"
            >
              {task.completed && (
                <span className="material-symbols-outlined text-sm text-green-400">check</span>
              )}
            </button>
            <div className="flex-1">
              <p className={`text-sm font-semibold ${task.completed ? 'line-through text-on-surface-variant' : 'text-on-surface'}`}>
                {task.title}
              </p>
              <div className="flex gap-2 mt-1">
                <span className="text-xs text-on-surface-variant">
                  {'⚡'.repeat(task.energy)}
                </span>
                <span className="text-xs text-on-surface-variant">{task.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add task button */}
      <button className="w-full h-12 bg-surface-container-high text-on-surface rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border-2 border-dashed border-outline-variant hover:border-primary hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-lg">add</span>
        Add Micro Step
      </button>
    </div>
  )
}
