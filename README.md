# 🧠 Micropass Steps Platform

> **Break complexity into clarity** — A productivity platform designed for ADHD minds

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-0.1.0-purple)

## 🎯 What is Micropass?

Micropass is a platform that helps people with ADHD (and anyone!) manage complex projects by breaking them into **micro-steps** — small, manageable tasks that reduce overwhelm and build momentum.

### The Problem
- Big projects feel overwhelming
- ADHD brains struggle with executive function
- Traditional task managers add complexity instead of reducing it

### The Solution
- **AI-powered brainstorming** → Structure your ideas through conversation
- **Visual mind maps** → See the big picture, then zoom into details
- **Energy-aware tasks** → Match tasks to your current energy level
- **Gamification** → Stay motivated with achievements and streaks

## 🏗️ Architecture

```
Frontend (React + Vite + Tailwind)
    ↓
FastAPI Backend
    ↓
┌───────────┬───────────┬───────────┐
│ PostgreSQL│   Redis   │ ChromaDB  │
│  (data)   │  (cache)  │   (RAG)   │
└───────────┴───────────┴───────────┘
    ↓
LLM Router (DeepSeek / Qwen / Claude)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL 15+

### Installation

```bash
# Clone the repo
git clone git@github.com:Iketx/micropass-steps.git
cd micropass-steps

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Set up environment
cp .env.example .env
# Edit .env with your API keys

# Run database migrations
alembic upgrade head

# Start development servers
npm run dev        # Frontend (port 3000)
cd backend && uvicorn main:app --reload  # Backend (port 8000)
```

## 📁 Project Structure

```
micropass-steps/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Page-level components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   └── assets/          # Images, fonts, etc.
├── backend/
│   ├── api/             # FastAPI routes
│   ├── models/          # SQLAlchemy models
│   ├── services/        # Business logic
│   └── ml/              # LLM integration
├── public/              # Static assets
├── .stitch/             # Design system
│   └── DESIGN.md        # Design specifications
└── docs/                # Documentation
```

## 🎨 Design System

Our design system is optimized for ADHD-friendly UX:
- **Dark mode by default** — reduces eye strain
- **Energy indicators** (⚡⚡⚡) — match tasks to your energy
- **Large touch targets** — 48px minimum for accessibility
- **Calming color palette** — indigo + cyan, no harsh colors

See [`.stitch/DESIGN.md`](.stitch/DESIGN.md) for full specifications.

## 🛣️ Roadmap

### Phase 1: Setup (Weeks 1-2)
- [x] Project scaffolding
- [x] Design system (DESIGN.md)
- [ ] Chat IA interface
- [ ] Mind map component

### Phase 2: Core Features (Weeks 3-4)
- [ ] Micro-step generation
- [ ] Energy level system
- [ ] Export to calendar

### Phase 3: Monitoring (Weeks 5-6)
- [ ] Progress dashboard
- [ ] Pomodoro timer
- [ ] Gamification system

### Phase 4: Polish (Weeks 7-8)
- [ ] RAG integration (PDFs, web)
- [ ] Mobile optimization
- [ ] Beta testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Google Stitch](https://stitch.withgoogle.com) for UI design
- Powered by [DeepSeek](https://deepseek.com) and [Qwen](https://qwen.ai) LLMs
- Inspired by the ADHD community's need for better tools

---

**Made with ❤️ for ADHD minds everywhere**
