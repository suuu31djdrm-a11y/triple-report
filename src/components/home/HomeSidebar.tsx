import { Link, NavLink, useLocation } from 'react-router-dom'
import logoSvg from '@/assets/triplereport-logo.svg'
import { HomeIcon, CheckBoxIcon, DocumentIcon, ArchiveIcon, StoreIcon } from '@/components/icons'

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
  { to: '/completed', label: '完了', icon: ArchiveIcon },
]

const STORE_COUNT = 12

export function HomeSidebar() {
  const location = useLocation()
  const isStoresSection = location.pathname === '/stores' || location.pathname.startsWith('/stores/')

  return (
    <aside className="fixed left-0 top-0 z-10 flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-2 p-4">
        <img src={logoSvg} alt="TRIPLE REPORT" className="h-5 w-auto" />
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-[12px] px-2 py-3 text-sm font-bold transition-colors ${
                isActive
                  ? 'bg-[#e8eaf8] text-primary'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`
            }
          >
            <Icon className="h-5 w-5 shrink-0" />
            {label}
          </NavLink>
        ))}

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-[12px] px-2 py-3 text-sm font-bold transition-colors ${
              isActive
                ? 'bg-[#e8eaf8] text-primary'
                : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`
          }
        >
          <SettingsIcon className="h-5 w-5 shrink-0" />
          設定
        </NavLink>

        {/* セパレーター: hsba(240, 1%, 93%, 1) */}
        <div className="my-2 h-px w-full shrink-0 bg-[hsla(240,1%,93%,1)]" aria-hidden />

        {/* 契約店舗: Store icon、選択時は同じダークブルー（#e8eaf8 + text-primary） */}
        <div className="flex flex-col gap-2">
          <NavLink
            to="/stores"
            className={() =>
              `flex items-center gap-2 rounded-[12px] px-2 py-3 text-sm font-bold transition-colors ${
                isStoresSection
                  ? 'bg-[#e8eaf8] text-primary'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`
            }
          >
            <StoreIcon className="h-5 w-5 shrink-0" />
            <span>契約店舗</span>
            <span className="ml-auto">{STORE_COUNT}店舗</span>
          </NavLink>
          <Link
            to="/stores/add"
            className="coach-mark-register-target flex min-w-[64px] items-center justify-center gap-1 rounded-full border border-primary bg-white px-8 py-3 text-sm font-bold text-primary hover:bg-primary-light/20"
          >
            <PlusIcon className="h-5 w-5 shrink-0" />
            新しい店舗を登録
          </Link>
        </div>
      </nav>
    </aside>
  )
}
