import { NavLink } from 'react-router-dom'
import { HomeIcon, CheckBoxIcon, DocumentIcon, ArchiveIcon } from '@/components/icons'

/** デスクトップサイドバーと同じ並び: ホーム、チェック、結果、完了 */
const items = [
  { to: '/', label: 'ホーム', icon: HomeIcon },
  { to: '/check', label: 'チェック', icon: CheckBoxIcon },
  { to: '/result', label: '結果', icon: DocumentIcon },
  { to: '/completed', label: '完了', icon: ArchiveIcon },
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
