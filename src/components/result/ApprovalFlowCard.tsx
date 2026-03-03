import { ChevronRightIcon } from '@/components/icons'
import { FileCheckIcon } from '@/components/icons'
import { CalendarCheckIcon } from '@/components/icons'
import { ApprovalHistoryIcon } from './ApprovalHistoryIcon'

export type ApprovalStepStatus = 'completed' | 'current' | 'pending'

export interface ApprovalStep {
  name: string
  date?: string
  tag?: string
  initial: string
  status: ApprovalStepStatus
}

export interface ApprovalFlowCardProps {
  steps: ApprovalStep[]
  onViewFlow?: () => void
  className?: string
}

/** Figma: 承認フロー（縦タイムライン：完了・現在・承認要） */
export function ApprovalFlowCard({ steps, onViewFlow, className = '' }: ApprovalFlowCardProps) {
  return (
    <section className={`rounded-xl bg-white p-4 shadow-card border border-gray-100 ${className}`}>
      <button
        type="button"
        onClick={onViewFlow}
        className="flex w-full items-center justify-between gap-2 text-left"
      >
        <span className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 text-primary shrink-0">
            <ApprovalHistoryIcon className="w-full h-full" />
          </span>
          <span className="font-medium text-gray-900">承認フロー</span>
        </span>
        <ChevronRightIcon className="h-5 w-5 text-gray-400 shrink-0" />
      </button>

      <div className="mt-4 relative">
        {/* 縦線：全体グレー、完了〜現在は青で上書き */}
        <div
          className="absolute left-3 top-6 bottom-6 w-0.5 -translate-x-px bg-gray-200"
          aria-hidden
        />
        {(() => {
          const lastActiveIndex = steps.findIndex((s) => s.status === 'current')
          const activeCount =
            lastActiveIndex >= 0 ? lastActiveIndex + 1 : steps.filter((s) => s.status === 'completed').length
          if (activeCount > 0) {
            const rowHeight = 48
            const lineTop = 24
            const lastActiveCenter = lineTop + lastActiveIndex * rowHeight + rowHeight / 2
            return (
              <div
                className="absolute left-3 top-6 w-0.5 -translate-x-px bg-primary"
                style={{ height: `${lastActiveCenter - lineTop}px` }}
                aria-hidden
              />
            )
          }
          return null
        })()}

        {/* 1行 = 左に丸、右に名前・日付・タグ（綺麗にそろう） */}
        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex items-center gap-3 pb-6 last:pb-0 min-h-12">
            {/* 左：円（チェック or ●） */}
            <div className="w-6 shrink-0 flex justify-center">
              {step.status === 'completed' && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
              {step.status === 'current' && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              )}
              {step.status === 'pending' && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              )}
            </div>

            {/* 右：アバター・名前・日付（アイコン付き）・タグ */}
            <div className="flex-1 min-w-0 flex items-center gap-2 flex-wrap">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-600 shrink-0">
                {step.initial}
              </span>
              <span className={`font-medium shrink-0 ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>
                {step.name}
              </span>
              {step.date && (
                <span className="flex items-center gap-1 text-xs text-gray-500 shrink-0">
                  {step.date === '3/12' && <FileCheckIcon className="h-4 w-4 shrink-0 text-gray-500" />}
                  {step.date === '3/19' && <CalendarCheckIcon className="h-4 w-4 shrink-0 text-gray-500" />}
                  <span>{step.date}</span>
                </span>
              )}
              {step.tag && (
                <span
                  className={`text-xs px-2 py-0.5 rounded shrink-0 ${
                    step.tag === 'QSCチェック済'
                      ? 'border border-gray-300 bg-white text-gray-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {step.tag}
                </span>
              )}
              {step.status === 'pending' && i === steps.length - 1 && (
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 shrink-0">
                  承認要
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
