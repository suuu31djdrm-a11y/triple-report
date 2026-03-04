import { NavLink } from 'react-router-dom'
import { HomeIcon } from '@/components/icons'
import { DocumentListIcon } from '@/components/icons'
import { UserIcon } from '@/components/icons'

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  )
}

const items = [
  { to: '/', label: 'ホーム', icon: HomeIcon },
  { to: '/tasks', label: 'タスク', icon: DocumentListIcon },
  { to: '/notifications', label: '通知', icon: BellIcon },
  { to: '/mypage', label: 'マイページ', icon: UserIcon },
]

export function HomeBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-gray-200 bg-white py-2 md:hidden">
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 py-1 px-4 text-xs font-medium ${
              isActive ? 'text-primary' : 'text-gray-500'
            }`
          }
        >
          <Icon className="h-6 w-6 shrink-0" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
