import { FileCheckIcon } from '@/components/icons'
import { CalendarCheckIcon } from '@/components/icons'
import { UserIcon } from '@/components/icons'
import { ApprovalHistoryIcon } from './ApprovalHistoryIcon'

export type ApprovalStepStatus = 'completed' | 'current' | 'pending'

export interface ApprovalStep {
  name: string
  date?: string
  /** 完了済みのときの時刻（例: 15:23） */
  time?: string
  tag?: string
  initial: string
  status: ApprovalStepStatus
}

export interface ApprovalFlowCardProps {
  steps: ApprovalStep[]
  /** 対応履歴内に表示する総括コメント（1件目と2件目の間に表示） */
  summaryComment?: string
  onViewFlow?: () => void
  className?: string
}

/** 対応履歴（縦タイムライン：完了・現在・承認要 + 総括コメント） */
export function ApprovalFlowCard({ steps, summaryComment, onViewFlow, className = '' }: ApprovalFlowCardProps) {
  return (
    <section className={`rounded-xl bg-white p-4 shadow-card border border-gray-100 ${className}`}>
      <div
        role={onViewFlow ? 'button' : undefined}
        tabIndex={onViewFlow ? 0 : undefined}
        onClick={onViewFlow}
        onKeyDown={onViewFlow ? (e) => e.key === 'Enter' && onViewFlow() : undefined}
        className="flex w-full items-center gap-2 text-left"
      >
        <span className="flex items-center justify-center w-8 h-8 text-primary shrink-0">
          <ApprovalHistoryIcon className="w-full h-full" />
        </span>
        <span className="font-bold text-gray-900">対応履歴</span>
      </div>

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
          const commentBlockHeight = summaryComment ? 64 : 0
          if (activeCount > 0) {
            const blockHeight = 52
            const lineTop = 24
            const lastActiveCenter =
              lineTop +
              lastActiveIndex * blockHeight +
              (lastActiveIndex >= 1 ? commentBlockHeight : 0) +
              blockHeight / 2
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

        {/* 各ステップ = 左に丸、右に [ラベル12px] → [名前・日付12px] → [総括コメント(1件目のみ・あれば)] */}
        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex gap-3 pb-6 last:pb-0">
            {/* 左：円（チェック or ● or 枠のみ） */}
            <div className="w-6 shrink-0 flex justify-center pt-0.5">
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
                <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-sm" aria-hidden />
              )}
            </div>

            {/* 右：縦3段 = ラベル(12px) → 名前・日付(12px) → 総括コメント(1件目かつあるときのみ) */}
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              {/* 1. ラベル（12px） */}
              {step.tag ? (
                <span
                  className={`inline-flex items-center w-fit text-[12px] px-2 py-0.5 rounded ${
                    step.tag === 'QSCチェック完了'
                      ? 'border border-gray-300 bg-white text-gray-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {step.tag}
                </span>
              ) : null}
              {step.status === 'pending' && i === steps.length - 1 && !step.tag ? (
                <span className="text-[12px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 w-fit">承認要</span>
              ) : null}

              {/* 2. 名前・日付（12px） */}
              <span className="text-[12px] flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1">
                  <UserIcon className="h-3.5 w-3.5 text-gray-600 shrink-0" />
                  <span className={step.status === 'pending' ? 'text-gray-400' : 'text-gray-800'}>
                    {step.name}
                  </span>
                </span>
                {step.date ? (
                  <span className="inline-flex items-center gap-1 text-gray-600">
                    {step.date === '3/12' && <FileCheckIcon className="h-3.5 w-3.5 shrink-0" />}
                    {step.date === '3/19' && <CalendarCheckIcon className="h-3.5 w-3.5 shrink-0" />}
                    <span>{step.date}{step.time ? ` ${step.time}` : ''}</span>
                  </span>
                ) : null}
              </span>

              {/* 3. 総括コメント（1件目のときのみ・あるときだけ表示） */}
              {i === 0 && summaryComment ? (
                <div className="rounded-lg bg-gray-50 border border-gray-100 p-2.5 mt-1">
                  <p className="text-[12px] font-medium text-gray-500 mb-1">総括コメント</p>
                  <p className="text-[12px] text-gray-800 whitespace-pre-wrap">{summaryComment}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
