import { Link } from '@tanstack/react-router'
import { LayoutDashboard, Users, CalendarCheck, LogOut } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Attendance', to: '/attendance', icon: CalendarCheck },
  { label: 'Members', to: '/members', icon: Users },
]

export function AppSidebar() {
  return (
    <div className="flex h-full flex-col border-r bg-white w-64 pt-5">
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold text-slate-900">ChurchName</h2>
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Admin Panel</p>
      </div>
      
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: 'bg-slate-100 text-slate-900 font-medium' }}
            className="flex items-center px-3 py-2 text-sm rounded-md text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t">
        <Link to="/" className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Link>
      </div>
    </div>
  )
}