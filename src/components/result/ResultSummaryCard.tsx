import { DocumentCheckIcon } from './DocumentCheckIcon'

type StatusType = 'approved' | 'submitting' | 'pending'

const STATUS_CONFIG: Record<StatusType, { label: string; className: string }> = {
  approved: { label: '承認済み', className: 'bg-approved-light text-approved' },
  submitting: { label: '提出中', className: 'bg-primary-light text-primary' },
  pending: { label: '確認待ち', className: 'bg-amber-100 text-amber-800' },
}

export interface ResultSummaryCardProps {
  /** 全体スコア (点) */
  score: number
  /** ステータス */
  status: StatusType
  className?: string
}

/**
 * Figma パターン: 全体(Total) + スコア + 承認ステータスバッジ
 * 左: 書類＋チェックアイコン / 中央: 全体(Total) + 87点 / 右: 承認済みバッジ
 */
export function ResultSummaryCard({ score, status, className = '' }: ResultSummaryCardProps) {
  const config = STATUS_CONFIG[status]
  const scoreLabel = `${score}点`

  return (
    <div
      className={`flex items-center gap-4 rounded-xl bg-white p-4 shadow-card border border-gray-100 ${className}`}
      role="region"
      aria-label="全体スコアと承認状況"
    >
      <div className="shrink-0 w-12 h-12 flex items-center justify-center text-primary">
        <DocumentCheckIcon className="w-full h-full" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-600">全体(Total)</p>
        <p className="text-2xl font-bold text-gray-900 mt-0.5">{scoreLabel}</p>
      </div>
      <span
        className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold ${config.className}`}
      >
        {config.label}
      </span>
    </div>
  )
}
