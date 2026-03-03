import { ChevronRightIcon } from '@/components/icons'
import { DocumentListIcon } from '@/components/icons'
import { CircleAlertIcon } from '@/components/icons'

export interface BottomActionBarProps {
  allItemsCount: number
  reportItemsCount: number
  onCheckAll?: () => void
  onCheckReport?: () => void
  /** スクロール停止時のみ表示する場合は false のとき非表示 */
  visible?: boolean
  className?: string
}

/** Figma: 下部アクションバー（全項目を確認 121件 | 要報告を確認 4件） */
export function BottomActionBar({
  allItemsCount,
  reportItemsCount,
  onCheckAll,
  onCheckReport,
  visible = true,
  className = '',
}: BottomActionBarProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 flex w-full border-t border-gray-200 bg-white shadow-top-subtle transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <button
        type="button"
        onClick={onCheckAll}
        className="flex-1 flex items-center gap-3 min-w-0 rounded-none border-r border-gray-200 py-3 px-4 text-left bg-white hover:bg-gray-50"
      >
        <DocumentListIcon className="h-6 w-6 text-gray-900 shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-700">全項目を確認</p>
          <p className="text-xl font-bold text-gray-900 mt-0.5">{allItemsCount}件</p>
        </div>
        <ChevronRightIcon className="h-5 w-5 text-gray-900 shrink-0" />
      </button>
      <button
        type="button"
        onClick={onCheckReport}
        className="flex-1 flex items-center gap-3 min-w-0 rounded-none py-3 px-4 text-left bg-primary hover:bg-primary/90"
      >
        <CircleAlertIcon className="h-6 w-6 text-white shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-white/90">要報告を確認</p>
          <p className="text-xl font-bold text-white mt-0.5">{reportItemsCount}件</p>
        </div>
        <ChevronRightIcon className="h-5 w-5 text-white shrink-0" />
      </button>
    </div>
  )
}
