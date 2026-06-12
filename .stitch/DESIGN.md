# Design System — Micropass Steps Platform

## Brand Identity
- **Name:** Micropass Steps Platform
- **Tagline:** "Break complexity into clarity"
- **Mission:** Help ADHD minds manage and execute complex projects by breaking them into manageable micro-steps
- **Audience:** People with ADHD, entrepreneurs, students, productivity enthusiasts

## Visual Language

### Color Palette

#### Primary Colors
- **Focus Indigo:** `#6366f1` — Main brand color, calm and focused
- **Energy Cyan:** `#22d3ee` — Accents, energy indicators, CTAs
- **Success Green:** `#22c55e` — Completed tasks, achievements

#### Background Colors
- **Deep Navy:** `#0f172a` — Main background (dark mode)
- **Slate Surface:** `#1e293b` — Cards, modals, elevated surfaces
- **Muted Surface:** `#334155` — Secondary surfaces, disabled states

#### Text Colors
- **Primary Text:** `#f8fafc` — Main content
- **Secondary Text:** `#94a3b8` — Labels, descriptions
- **Muted Text:** `#64748b` — Disabled, placeholder

#### Semantic Colors
- **Warning Amber:** `#f59e0b` — Alerts, medium priority
- **Error Rose:** `#f43f5e` — Errors, high priority
- **Info Sky:** `#0ea5e9` — Information, tips

### Typography

#### Font Stack
```css
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

#### Type Scale
- **H1:** 32px / 2rem, bold (700), line-height 1.2
- **H2:** 24px / 1.5rem, semibold (600), line-height 1.3
- **H3:** 20px / 1.25rem, semibold (600), line-height 1.4
- **Body:** 16px / 1rem, regular (400), line-height 1.6
- **Small:** 14px / 0.875rem, regular (400), line-height 1.5
- **Caption:** 12px / 0.75rem, medium (500), line-height 1.4

### Spacing System
```
4px  → xs (tight gaps)
8px  → sm (component internal)
12px → md (standard gap)
16px → lg (card padding)
24px → xl (section spacing)
32px → 2xl (major sections)
48px → 3xl (page margins)
```

### Border Radius
```
8px  → sm (inputs, buttons)
12px → md (cards, modals)
16px → lg (large cards)
24px → xl (pill buttons, tags)
9999px → full (avatars, badges)
```

## Components

### Cards
```css
.card {
  background: var(--surface);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}
```

### Buttons
- **Min height:** 48px (touch-friendly)
- **Border radius:** 8px (standard), 24px (pill)
- **Padding:** 12px 24px
- **Font weight:** 600

### Energy Indicators (ADHD-specific)
```
⚡     → Low energy (quick wins, 5-10 min)
⚡⚡   → Medium energy (focused work, 15-30 min)
⚡⚡⚡ → High energy (deep work, 30+ min)
```

### Mind Map Nodes
- **Size:** 120px × 80px minimum
- **Border:** 2px solid, color-coded by priority
- **Shadow:** Subtle drop shadow for depth
- **Interaction:** Drag to reorganize, tap to expand

## ADHD-Specific Design Principles

### 1. Reduce Cognitive Load
- Minimal visual noise
- Clear hierarchy with obvious focal points
- Progressive disclosure (show what's needed now)
- Consistent patterns (same action = same location)

### 2. Support Hyperfocus
- Distraction-free mode
- Large, clear progress indicators
- Satisfying completion animations
- Streak tracking visible at all times

### 3. Manage Energy Levels
- Color-coded tasks by energy requirement
- Smart suggestions based on current energy
- Break reminders (Pomodoro integration)
- "Quick wins" section for low-energy moments

### 4. Gamification (Non-infantilizing)
- Achievement badges (professional, not childish)
- Progress burn-down charts
- Streak counters
- Milestone celebrations (subtle, not overwhelming)

## Accessibility

### WCAG 2.2 AA Compliance
- **Contrast ratio:** Minimum 4.5:1 for text
- **Focus indicators:** Visible, 2px outline
- **Touch targets:** Minimum 48px × 48px
- **Screen reader:** ARIA labels on all interactive elements
- **Keyboard navigation:** Full support, logical tab order

### Dark Mode (Default)
- Reduces eye strain for extended use
- Better for focus sessions
- Lower battery usage on OLED screens

### Light Mode (Optional)
- Higher contrast for outdoor use
- Better for users with light sensitivity

## Motion & Animation

### Transitions
- **Duration:** 200ms (micro), 300ms (standard), 500ms (complex)
- **Easing:** ease-out for entrances, ease-in for exits
- **Reduced motion:** Respect prefers-reduced-motion

### Completion Animations
- Subtle scale bounce on task completion
- Progress bar smooth fill
- Achievement unlock: gentle glow effect
- **NO:** Confetti, loud sounds, excessive celebration

## Responsive Breakpoints
```
Mobile: 0-640px (single column, stacked)
Tablet: 641-1024px (two columns, side nav)
Desktop: 1025px+ (full layout, multi-panel)
```

## File Structure
```
.stitch/
├── DESIGN.md          (this file)
├── tokens/
│   ├── colors.json
│   ├── typography.json
│   └── spacing.json
├── components/
│   ├── card.md
│   ├── button.md
│   └── mindmap-node.md
└── screens/
    ├── chat-brainstorm.md
    ├── mindmap.md
    ├── microsteps.md
    ├── dashboard.md
    └── pomodoro.md
```
