import { ChevronRightIcon } from '@/components/icons'
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

      <div className="mt-4 flex gap-3">
        {/* 縦線＋ステップ円：中央軸で揃える */}
        <div className="relative flex w-6 shrink-0 flex-col items-center">
          {/* 縦線：全体はグレー、完了〜現在の上側は青で上書き */}
          <div
            className="absolute left-1/2 top-2.5 bottom-2.5 w-0.5 -translate-x-px bg-gray-200"
            aria-hidden
          />
          {(() => {
            const lastActiveIndex = steps.findIndex((s) => s.status === 'current')
            const activeCount =
              lastActiveIndex >= 0 ? lastActiveIndex + 1 : steps.filter((s) => s.status === 'completed').length
            if (activeCount > 0) {
              const lineTop = 10
              const stepHeight = 40
              const lastActiveCenter = lineTop + lastActiveIndex * stepHeight + stepHeight / 2
              const blueHeight = lastActiveCenter - lineTop
              return (
                <div
                  className="absolute left-1/2 top-2.5 w-0.5 -translate-x-px bg-primary"
                  style={{ height: `${blueHeight}px` }}
                  aria-hidden
                />
              )
            }
            return null
          })()}
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex h-10 shrink-0 items-center justify-center"
            >
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
          ))}
        </div>

        {/* ラベル・日付・タグ（縦の並びを円と一致） */}
        <div className="flex-1 min-w-0">
          {steps.map((step, i) => (
            <div key={i} className="flex min-h-10 flex-col justify-center pb-4 last:pb-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-600 shrink-0">
                  {step.initial}
                </span>
                <span className={`font-medium ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>
                  {step.name}
                </span>
                {step.date && (
                  <span className="flex items-center gap-0.5 text-xs text-gray-500">
                    <span>{step.date}</span>
                  </span>
                )}
                {step.tag && (
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {step.tag}
                  </span>
                )}
                {step.status === 'pending' && i === steps.length - 1 && (
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    承認要
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
