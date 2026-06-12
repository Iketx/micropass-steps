import { useState, useEffect } from 'react'
import StatsCard from '../components/StatsCard'
import PomodoroTimer from '../components/PomodoroTimer'
import ProgressChart from '../components/ProgressChart'
import QuickWinCard from '../components/QuickWinCard'
import BadgesSection from '../components/BadgesSection'

export default function Dashboard() {
  const [greeting, setGreeting] = useState('')
  
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])
  
  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Greeting */}
      <section>
        <h2 className="text-3xl font-bold text-on-surface">
          {greeting}, Henrique!
        </h2>
        <p className="text-on-surface-variant mt-1">
          Ready to hit your focus goals today?
        </p>
      </section>
      
      {/* Stats Grid */}
      <section className="grid grid-cols-2 gap-3">
        <StatsCard
          icon="check_circle"
          iconColor="text-green-400"
          label="Today"
          value="12"
          description="Tasks Done"
        />
        <StatsCard
          icon="local_fire_department"
          iconColor="text-orange-400"
          label="Streak"
          value="5"
          description="Day Streak"
          filled
        />
        <StatsCard
          icon="schedule"
          iconColor="text-secondary"
          label="Focus"
          value="2.5h"
          description="Focused"
        />
        <StatsCard
          icon="star"
          iconColor="text-yellow-400"
          label="New"
          value="3"
          description="Achievements"
          filled
        />
      </section>
      
      {/* Progress Chart */}
      <ProgressChart />
      
      {/* Pomodoro Timer */}
      <PomodoroTimer />
      
      {/* Quick Win */}
      <QuickWinCard />
      
      {/* Badges */}
      <BadgesSection />
    </div>
  )
}
