import { Fragment } from 'react'
import { FileCheckIcon } from '@/components/icons'
import { CalendarCheckIcon } from '@/components/icons'
import { UserIcon } from '@/components/icons'
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
          const commentBlockHeight = summaryComment ? 72 : 0
          if (activeCount > 0) {
            const rowHeight = 48
            const lineTop = 24
            const lastActiveCenter =
              lineTop +
              lastActiveIndex * rowHeight +
              (lastActiveIndex >= 1 ? commentBlockHeight : 0) +
              rowHeight / 2
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

        {/* 1行 = 左に丸、右に名前・日付・タグ。2件目の前に総括コメントを表示 */}
        {steps.map((step, i) => (
          <Fragment key={i}>
            {i === 1 && summaryComment ? (
              <div className="relative z-10 flex items-start gap-3 pb-4 pl-9">
                <div className="flex-1 min-w-0 rounded-lg bg-gray-50 border border-gray-100 p-3">
                  <p className="text-xs font-medium text-gray-500 mb-1">総括コメント</p>
                  <p className="text-sm text-gray-800 whitespace-pre-wrap">{summaryComment}</p>
                </div>
              </div>
            ) : null}
            <div className="relative z-10 flex items-center gap-3 pb-6 last:pb-0 min-h-12">
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
                <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-sm" aria-hidden />
              )}
            </div>

            {/* 右：Figma順 = タグ → 人物アイコン+名前 → 日付アイコン+日付 */}
            <div className="flex-1 min-w-0 flex flex-wrap items-center gap-x-2 gap-y-1">
              {/* 1. タグラベル（QSCチェック完了 / 要結果確認・報告 / 承認要） */}
              {step.tag ? (
                <span
                  className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded shrink-0 ${
                    step.tag === 'QSCチェック完了'
                      ? 'border border-gray-300 bg-white text-gray-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {step.tag === 'QSCチェック完了' && (
                    <svg className="h-4 w-4 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {step.tag}
                </span>
              ) : null}
              {step.status === 'pending' && i === steps.length - 1 && !step.tag ? (
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 shrink-0">承認要</span>
              ) : null}
              {/* 2. 人物アイコン + 名前 */}
              <span className="inline-flex items-center gap-1.5 shrink-0">
                <UserIcon className="h-4 w-4 text-gray-700 shrink-0" />
                <span className={`text-sm font-medium ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>
                  {step.name}
                </span>
              </span>
              {/* 3. 書類/カレンダーアイコン + 日付 */}
              {step.date ? (
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 shrink-0 ml-auto">
                  {step.date === '3/12' && <FileCheckIcon className="h-4 w-4 shrink-0" />}
                  {step.date === '3/19' && <CalendarCheckIcon className="h-4 w-4 shrink-0" />}
                  <span>{step.date}</span>
                </span>
              ) : null}
            </div>
          </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
