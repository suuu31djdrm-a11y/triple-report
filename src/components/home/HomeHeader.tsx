import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, StoreIcon } from '@/components/icons'
import logoSvg from '@/assets/triplereport-logo.svg'

/** モバイル用の店舗数表示（参照画像に合わせて5、実際はサイドバーと合わせて12など可） */
const MOBILE_STORE_COUNT = 5

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function FilterXIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

/** モバイル共通トップバー: ロゴ + 店舗ボタン(○店舗>) + ハンバーガー（コーチマークのターゲット用） */
export function MobileTopBar({ storeCount = MOBILE_STORE_COUNT }: { storeCount?: number }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 md:hidden">
      <img src={logoSvg} alt="TRIPLE REPORT" className="h-5 w-auto" />
      <Link
        to="/stores"
        className="coach-mark-store-target inline-flex items-center gap-2 rounded-[999px] border border-primary bg-white pl-2 pr-3 py-1 text-sm font-bold text-primary hover:bg-primary/5"
      >
        <StoreIcon className="h-5 w-5 shrink-0 text-primary" />
        <span>{storeCount}店舗</span>
        <ChevronRightIcon className="h-5 w-5 shrink-0" />
      </Link>
      <button type="button" className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg" aria-label="メニュー">
        <MenuIcon className="h-6 w-6" />
      </button>
    </div>
  )
}

export function HomeHeader() {
  const [keyword, setKeyword] = useState('')

  return (
    <header className="sticky top-0 z-10 border-b border-[#dcdcde] bg-white">
      {/* Mobile: logo + 店舗ボタン + hamburger */}
      <MobileTopBar storeCount={MOBILE_STORE_COUNT} />
      {/* Mobile: フィルター一行・横スクロール（切れる分は横スクロール） */}
      <div className="overflow-x-auto border-t border-[#dcdcde] md:hidden">
        <div className="flex items-center gap-2 px-4 py-3 flex-nowrap min-w-0">
          <button type="button" className="inline-flex items-center gap-1 shrink-0 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900">
            チェック実施月
            <ChevronDownIcon className="h-5 w-5 shrink-0" />
          </button>
          <button type="button" className="inline-flex items-center gap-1 shrink-0 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900">
            店舗
            <ChevronDownIcon className="h-5 w-5 shrink-0" />
          </button>
          <button type="button" className="inline-flex items-center gap-1 shrink-0 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900">
            ステータス
            <ChevronDownIcon className="h-5 w-5 shrink-0" />
          </button>
          <button type="button" className="inline-flex items-center gap-1 shrink-0 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900">
            レポート
            <ChevronDownIcon className="h-5 w-5 shrink-0" />
          </button>
          <button type="button" className="inline-flex items-center gap-1 shrink-0 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900">
            <FilterXIcon className="h-5 w-5 shrink-0" />
            リセット
          </button>
          <button type="button" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dcdcde] bg-white text-[#5c5c5f]" aria-label="キーワード検索">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Desktop: Figma 11078-98681 - フィルター + 検索 */}
      <div className="hidden md:flex flex-col gap-2 px-6 py-4">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" className="inline-flex items-center gap-1 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50">
              チェック実施月
              <ChevronDownIcon className="h-5 w-5 shrink-0" />
            </button>
            <button type="button" className="inline-flex items-center gap-1 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50">
              店舗
              <ChevronDownIcon className="h-5 w-5 shrink-0" />
            </button>
            <button type="button" className="inline-flex items-center gap-1 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50">
              ステータス
              <ChevronDownIcon className="h-5 w-5 shrink-0" />
            </button>
            <button type="button" className="inline-flex items-center gap-1 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50">
              レポート
              <ChevronDownIcon className="h-5 w-5 shrink-0" />
            </button>
            <button type="button" className="inline-flex items-center gap-1 rounded-full border border-[#dcdcde] bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50">
              <FilterXIcon className="h-5 w-5 shrink-0" />
              リセット
            </button>
          </div>
          <div className="flex h-10 w-full max-w-[400px] items-center gap-2 rounded-md border border-[#dcdcde] bg-white px-3 py-2">
            <SearchIcon className="h-5 w-5 shrink-0 text-[#99999b]" />
            <input
              type="search"
              placeholder="キーワード検索"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 min-w-0 text-sm text-gray-900 placeholder:text-[#99999b] bg-transparent border-0 outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
