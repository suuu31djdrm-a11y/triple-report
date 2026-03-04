import { useState } from 'react'
import { MenuIcon } from '@/components/icons'
import logoSvg from '@/assets/triplereport-logo.svg'

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

export function HomeHeader() {
  const [keyword, setKeyword] = useState('')

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      {/* Mobile: logo + hamburger */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <img src={logoSvg} alt="TRIPLE REPORT" className="h-5 w-auto" />
        <button type="button" className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg" aria-label="メニュー">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile: チェック項目 + dropdowns + search */}
      <div className="flex flex-wrap items-center gap-2 px-4 pb-3 md:hidden">
        <button type="button" className="relative rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700">
          チェック項目
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
            12
          </span>
        </button>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
          <option>広報</option>
        </select>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
          <option>ステータス</option>
        </select>
        <button type="button" className="ml-auto p-2 text-gray-600 hover:bg-gray-100 rounded-lg" aria-label="検索">
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
      {/* Desktop: filters + search + user */}
      <div className="hidden md:flex items-center gap-4 px-6 py-4">
        <div className="relative">
          <select className="rounded-lg border border-gray-200 bg-white pl-3 pr-10 py-2 text-sm text-gray-700">
            <option>チェック実施月</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            11
          </span>
        </div>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
          <option>店舗</option>
        </select>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
          <option>ステータス</option>
        </select>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
          <option>レポート</option>
        </select>
        <button type="button" className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          リセット
        </button>
        <div className="flex-1 relative max-w-xs">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="キーワード検索"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400"
          />
        </div>
        <button type="button" className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" aria-label="ヘルプ">
          <HelpIcon className="h-5 w-5" />
        </button>
        <button type="button" className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg" aria-label="通知">
          <BellIcon className="h-5 w-5" />
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
            1
          </span>
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-300" aria-hidden />
      </div>
    </header>
  )
}
