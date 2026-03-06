import logoSvg from '@/assets/triplereport-logo.svg'

function TriangleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  )
}

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

/** トップバー（契約店舗・店舗登録など）：ロゴ＋三角アイコン、右にヘルプ・通知・ユーザー */
export function SimplePageHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <TriangleIcon className="h-5 w-5 text-[#1d1d1f]" aria-hidden />
          <img src={logoSvg} alt="TRIPLE REPORT" className="h-5 w-auto" />
        </div>
        <div className="flex items-center gap-1">
          <button type="button" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full" aria-label="ヘルプ">
            <HelpIcon className="h-5 w-5" />
          </button>
          <button type="button" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full" aria-label="通知">
            <BellIcon className="h-5 w-5" />
          </button>
          <div className="ml-1 h-10 w-10 rounded-full bg-gray-300" aria-hidden />
        </div>
      </div>
    </header>
  )
}
