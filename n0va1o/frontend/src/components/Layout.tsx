import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Bot, Wrench, Activity, BookOpen,
  Link2, Shield, AlertTriangle, Settings, Zap
} from 'lucide-react'

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/agents', label: 'Agents', icon: Bot },
  { path: '/tools', label: 'Tools', icon: Wrench },
  { path: '/sessions', label: 'Sessions', icon: Activity },
  { path: '/recipes', label: 'Recipes', icon: BookOpen },
  { path: '/connections', label: 'Connections', icon: Link2 },
  { path: '/audit', label: 'Audit Trail', icon: Shield },
  { path: '/interrogation', label: 'Interrogation', icon: AlertTriangle },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Zap className="logo-icon" />
          <h1>N0VA1O</h1>
          <span className="version">v2026.07</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => {
            const Icon = item.icon
            const active = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${active ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
        <div className="sidebar-footer">
          <div className="status-indicator">
            <span className="status-dot online"></span>
            Gateway Online
          </div>
        </div>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
