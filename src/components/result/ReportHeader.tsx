import { BackIcon } from '@/components/icons'
import { FileIcon } from '@/components/icons'
import { RefreshIcon } from '@/components/icons'
import { UserIcon } from '@/components/icons'
import { CalendarCheckIcon } from '@/components/icons'

export interface ReportHeaderProps {
  storeName?: string
  reportLabel?: string
  reportAge?: string
  assigneeName: string
  deadline: string
  progressCurrent: number
  progressTotal: number
  /** 'full' = タイトルバー + ゲージ, 'titleOnly' = タイトルバーのみ（下スクロール時用） */
  variant?: 'full' | 'titleOnly'
  className?: string
}

/** Figma: Titlebar (10964:1237) + Accordion (11013:72073) — 戻る＋中央タイトル / 月次・1日前 / 担当・報告期限 / プログレス */
export function ReportHeader({
  storeName,
  reportLabel = '月次レポート',
  reportAge = '1日前',
  assigneeName,
  deadline,
  progressCurrent,
  progressTotal,
  variant = 'full',
  className = '',
}: ReportHeaderProps) {
  const pct = progressTotal > 0 ? (progressCurrent / progressTotal) * 100 : 0
  const titleOnly = variant === 'titleOnly'

  return (
    <div className={`bg-white ${className}`}>
      {/* Titlebar: 戻る（16px空けて）| 左寄せ「店の結果」+ 月次・1日前 */}
      {storeName != null && (
        <div
          className={`grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-2 ${titleOnly ? 'border-b border-gray-200 shadow-card' : 'py-3'}`}
        >
          <div className="flex justify-start">
            <button type="button" className="p-2 -ml-1 text-gray-700 rounded-full hover:bg-gray-100" aria-label="戻る">
              <BackIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center min-w-0">
            <h1 className="text-base font-bold text-gray-900 truncate w-full text-center">{storeName}の結果</h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <FileIcon className="h-4 w-4 shrink-0" />
                {reportLabel}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <RefreshIcon className="h-4 w-4 shrink-0" />
                {reportAge}
              </span>
            </div>
          </div>
          <div className="flex justify-end" aria-hidden />
        </div>
      )}

      {/* Accordion: 担当・報告期限 + プログレスバー（下端のみシャドウ） */}
      {!titleOnly && (
      <div className="border-b border-gray-200 px-4 py-3 flex flex-col gap-2 relative">
        <div className="absolute left-0 right-0 bottom-0 h-px bg-transparent pointer-events-none shadow-bottom-only" aria-hidden />
        <div className="flex items-center justify-start gap-4">
          <span className="flex items-center gap-1 text-sm font-medium text-gray-900">
            <UserIcon className="h-4 w-4 text-gray-900 shrink-0" />
            {assigneeName}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-gray-900">
            <CalendarCheckIcon className="h-4 w-4 shrink-0 text-gray-900" aria-hidden />
            報告期限
            <span>{deadline}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-3 bg-[#ebebed] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all bg-primary"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm text-gray-900 shrink-0">
            {progressCurrent}/{progressTotal}件の改善
          </span>
        </div>
      </div>
      )}
    </div>
  )
}
