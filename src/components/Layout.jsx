import { Outlet, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', icon: 'dashboard', label: 'Dashboard' },
  { path: '/chat', icon: 'chat', label: 'Chat' },
  { path: '/mindmap', icon: 'account_tree', label: 'Mind Map' },
  { path: '/checklist', icon: 'check_circle', label: 'Tasks' },
  { path: 'settings', icon: 'settings', label: 'Settings' },
]

export default function Layout() {
  const location = useLocation()
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface flex justify-between items-center h-touch px-5 transition-all duration-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center border-2 border-primary">
            <span className="material-symbols-outlined text-primary">psychology</span>
          </div>
          <h1 className="text-xl font-semibold text-on-surface">Micropass</h1>
        </div>
        <button className="w-touch h-touch flex items-center justify-center text-secondary transition-all duration-200 active:scale-95">
          <span className="material-symbols-outlined">bolt</span>
        </button>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 mt-16 mb-20 px-5 overflow-auto">
        <Outlet />
      </main>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full h-20 flex justify-around items-center px-4 pb-safe z-50 bg-surface-container-low rounded-t-xl shadow-lg">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-transform duration-150 active:scale-90 ${
                isActive 
                  ? 'bg-secondary-container text-on-secondary-container' 
                  : 'text-on-surface-variant hover:text-secondary'
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-xs font-semibold mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
