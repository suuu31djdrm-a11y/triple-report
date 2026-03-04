import { MenuIcon } from '@/components/icons'
import logoSvg from '@/assets/triplereport-logo.svg'

/** フィルターなしのシンプルヘッダー（契約店舗など） */
export function SimplePageHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <img src={logoSvg} alt="TRIPLE REPORT" className="h-5 w-auto" />
        <button
          type="button"
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          aria-label="メニュー"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
