import { Link, NavLink } from 'react-router-dom'
import logoSvg from '@/assets/triplereport-logo.svg'
import { HomeIcon } from '@/components/icons'
import { CheckBoxIcon } from '@/components/icons'
import { DocumentIcon } from '@/components/icons'
import { CompletedIcon } from '@/components/icons'

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function StoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
    </svg>
  )
}

const navItems = [
  { to: '/', label: 'ホーム', icon: HomeIcon },
  { to: '/check', label: 'チェック', icon: CheckBoxIcon },
  { to: '/result', label: '結果', icon: DocumentIcon },
  { to: '/completed', label: '完了', icon: CompletedIcon },
]

const STORE_COUNT = 12

export function HomeSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-10 flex h-full w-56 flex-col border-r border-gray-200 bg-gray-50">
      <div className="flex items-center gap-2 p-4">
        <img src={logoSvg} alt="TRIPLE REPORT" className="h-5 w-auto" />
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`
            }
          >
            <Icon className="h-5 w-5 shrink-0" />
            {label}
          </NavLink>
        ))}

        {/* 契約店舗ブロック */}
        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
          <NavLink
            to="/stores"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <StoreIcon className="h-5 w-5 shrink-0" />
            契約店舗
          </NavLink>
          <div className="flex items-center justify-between gap-2 px-2">
            <span className="text-xs font-medium text-gray-500">
              <span className="text-base font-bold tabular-nums text-gray-900">{STORE_COUNT}</span>
              <span className="ml-0.5">店舗</span>
            </span>
            <Link
              to="/stores/add"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-primary/90"
            >
              <PlusIcon className="h-4 w-4" />
              店舗追加
            </Link>
          </div>
        </div>

        <div className="mt-auto pt-2">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`
            }
          >
            <SettingsIcon className="h-5 w-5 shrink-0" />
            設定
          </NavLink>
        </div>
      </nav>
    </aside>
  )
}
